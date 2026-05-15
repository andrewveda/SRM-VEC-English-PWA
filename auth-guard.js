(function () {

  const loggedIn =
    localStorage.getItem("logged_in");

  if (loggedIn === "true") {
    return;
  }

  const current =
    encodeURIComponent(window.location.pathname);

  window.location.href =
    `/SRM-VEC-English-PWA/cat-a?return=${current}`;

})();
