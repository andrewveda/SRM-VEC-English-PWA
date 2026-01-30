import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Pause, Download, ChevronRight, RotateCcw } from 'lucide-react';

export default function SpeakingQuest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState({});
  const [isPlaying, setIsPlaying] = useState(null);
  const [questComplete, setQuestComplete] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const audioRefs = useRef({});

  const questions = [
    {
      id: 1,
      question: "Introduce yourself",
      prompt: "Tell us your name, where you're from, and one interesting thing about yourself."
    },
    {
      id: 2,
      question: "Your favorite hobby",
      prompt: "Describe your favorite hobby and why you enjoy it."
    },
    {
      id: 3,
      question: "A memorable experience",
      prompt: "Share a memorable experience from the past year."
    },
    {
      id: 4,
      question: "Future goals",
      prompt: "What are your goals for the next six months?"
    },
    {
      id: 5,
      question: "Advice to others",
      prompt: "What advice would you give to someone learning a new skill?"
    }
  ];

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) audio.pause();
      });
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        setRecordings(prev => ({
          ...prev,
          [questions[currentQuestion].id]: {
            blob: audioBlob,
            url: audioUrl,
            duration: recordingTime
          }
        }));

        stream.getTracks().forEach(track => track.stop());
        setRecordingTime(0);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please grant permission and try again.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const togglePlayback = (questionId) => {
    const audio = audioRefs.current[questionId];
    
    if (isPlaying === questionId) {
      audio.pause();
      setIsPlaying(null);
    } else {
      Object.values(audioRefs.current).forEach(a => {
        if (a) a.pause();
      });
      
      if (!audio) {
        const newAudio = new Audio(recordings[questionId].url);
        audioRefs.current[questionId] = newAudio;
        newAudio.onended = () => setIsPlaying(null);
        newAudio.play();
      } else {
        audio.currentTime = 0;
        audio.play();
      }
      setIsPlaying(questionId);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuestComplete(true);
    }
  };

  const downloadAllRecordings = async () => {
    const audioContext = new AudioContext();
    const sources = [];

    for (let i = 0; i < questions.length; i++) {
      const questionId = questions[i].id;
      if (recordings[questionId]) {
        const arrayBuffer = await recordings[questionId].blob.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        sources.push(audioBuffer);
      }
    }

    if (sources.length === 0) {
      alert('No recordings to download');
      return;
    }

    const totalLength = sources.reduce((sum, buffer) => sum + buffer.length, 0);
    const combinedBuffer = audioContext.createBuffer(
      2,
      totalLength,
      audioContext.sampleRate
    );

    let offset = 0;
    sources.forEach(buffer => {
      for (let channel = 0; channel < 2; channel++) {
        const channelData = buffer.numberOfChannels > channel 
          ? buffer.getChannelData(channel) 
          : buffer.getChannelData(0);
        combinedBuffer.getChannelData(channel).set(channelData, offset);
      }
      offset += buffer.length;
    });

    const wavBlob = audioBufferToWav(combinedBuffer);
    const url = URL.createObjectURL(wavBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `speaking-quest-${Date.now()}.wav`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const audioBufferToWav = (buffer) => {
    const length = buffer.length * buffer.numberOfChannels * 2;
    const arrayBuffer = new ArrayBuffer(44 + length);
    const view = new DataView(arrayBuffer);
    
    const writeString = (offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + length, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, buffer.numberOfChannels, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * 4, true);
    view.setUint16(32, buffer.numberOfChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, length, true);

    let offset = 44;
    for (let i = 0; i < buffer.length; i++) {
      for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
        const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
        view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
        offset += 2;
      }
    }

    return new Blob([arrayBuffer], { type: 'audio/wav' });
  };

  const resetQuest = () => {
    setCurrentQuestion(0);
    setRecordings({});
    setQuestComplete(false);
    setIsPlaying(null);
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) audio.pause();
    });
    audioRefs.current = {};
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (questComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Quest Complete!</h1>
              <p className="text-gray-600">Great job completing all {questions.length} questions.</p>
            </div>

            <div className="space-y-4 mb-8">
              {questions.map((q) => (
                <div key={q.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{q.question}</h3>
                    {recordings[q.id] && (
                      <span className="text-sm text-gray-500">
                        {formatTime(recordings[q.id].duration)}
                      </span>
                    )}
                  </div>
                  {recordings[q.id] ? (
                    <button
                      onClick={() => togglePlayback(q.id)}
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      {isPlaying === q.id ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                      <span className="text-sm font-medium">
                        {isPlaying === q.id ? 'Pause' : 'Play'} recording
                      </span>
                    </button>
                  ) : (
                    <span className="text-sm text-gray-400">No recording</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={downloadAllRecordings}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download All Recordings
              </button>
              <button
                onClick={resetQuest}
                className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const hasRecording = recordings[question.id];
  const canProceed = hasRecording || currentQuestion === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Object.keys(recordings).length} recorded
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{question.question}</h2>
          <p className="text-gray-600 mb-8">{question.prompt}</p>

          <div className="space-y-6">
            {!hasRecording ? (
              <div className="text-center">
                {isRecording ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-2xl font-mono font-bold text-gray-800">
                        {formatTime(recordingTime)}
                      </span>
                    </div>
                    <button
                      onClick={stopRecording}
                      className="bg-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-600 transition-all flex items-center gap-2 mx-auto shadow-lg"
                    >
                      <Square className="w-5 h-5" />
                      Stop Recording
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={startRecording}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2 mx-auto shadow-lg"
                  >
                    <Mic className="w-6 h-6" />
                    Start Recording
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="font-semibold text-green-800">Recording saved</span>
                  </div>
                  <span className="text-sm text-green-700">
                    {formatTime(recordings[question.id].duration)}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => togglePlayback(question.id)}
                    className="flex-1 bg-white border-2 border-green-300 text-green-700 px-4 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isPlaying === question.id ? (
                      <>
                        <Pause className="w-5 h-5" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        Play
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      if (audioRefs.current[question.id]) {
                        audioRefs.current[question.id].pause();
                      }
                      setRecordings(prev => {
                        const newRecordings = { ...prev };
                        delete newRecordings[question.id];
                        return newRecordings;
                      });
                      setIsPlaying(null);
                    }}
                    className="px-4 py-3 border-2 border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-all"
                  >
                    Re-record
                  </button>
                </div>
              </div>
            )}

            {hasRecording && (
              <button
                onClick={nextQuestion}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {currentQuestion === questions.length - 1 ? 'Complete Quest' : 'Next Question'}
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
