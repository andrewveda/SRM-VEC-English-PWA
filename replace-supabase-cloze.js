const fs = require("fs");
const path = require("path");

// ✅ ONLY TARGET THIS FOLDER
const TARGET_DIR = path.join(process.cwd(), "cloze");

// ❌ Old broken block
const targetBlock = `
<script type="module">
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(
  'https://yellow-lab-4999.andrewveda.workers.dev',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZXpzc29jenZwYmt0ZWZmY2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NTk1ODUsImV4cCI6MjA3ODQzNTU4NX0.2ZlqXnZxv0opkhynAT7OlK4S-xPygcc7ETUyTXRfGHE'
);
`.trim();

// ✅ New working block
const replacementBlock = `
<script src="https://unpkg.com/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
<script>
const supabase = window.supabase.createClient(
  "https://yellow-lab-4999.andrewveda.workers.dev",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZXpzc29jenZwYmt0ZWZmY2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NTk1ODUsImV4cCI6MjA3ODQzNTU4NX0.2ZlqXnZxv0opkhynAT7OlK4S-xPygcc7ETUyTXRfGHE"
);
`.trim();

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith(".html")) {
      let content = fs.readFileSync(fullPath, "utf8");

      if (content.includes(targetBlock)) {
        content = content.replace(targetBlock, replacementBlock);
        fs.writeFileSync(fullPath, content, "utf8");
        console.log("✅ Updated:", fullPath);
      }
    }
  });
}

if (fs.existsSync(TARGET_DIR)) {
  walk(TARGET_DIR);
  console.log("🎉 Cloze folder replacement complete.");
} else {
  console.error("❌ Cloze folder not found.");
}
