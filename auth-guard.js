// auth-guard.js

(function () {

  const loggedIn =
    localStorage.getItem('logged_in');

  const githubUser =
    localStorage.getItem('github_username');

  // Not authenticated
  if (
    loggedIn !== 'true' ||
    !githubUser
  ) {

    const current =
      window.location.pathname +
      window.location.search;

    const returnTo =
      encodeURIComponent(current);

    window.location.replace(
      `/SRM-VEC-English-PWA/auth.html?return=${returnTo}`
    );

    return;
  }

  // Optional:
  // expose simple global object

  window.GH = {

    loggedIn: true,

    username:
      localStorage.getItem('github_username'),

    githubId:
      localStorage.getItem('github_id'),

    profile:
      localStorage.getItem('github_profile'),

    avatar:
      localStorage.getItem('avatar'),

    name:
      localStorage.getItem('userName'),

    dept:
      localStorage.getItem('userDept')
  };

})();
