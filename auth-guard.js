// auth-guard.js

(function () {

  const loggedIn =
    localStorage.getItem('logged_in');

  const githubUser =
    localStorage.getItem('github_username');

  const githubId =
    localStorage.getItem('github_id');

  // Invalid or incomplete authentication
  if (
    loggedIn !== 'true' ||
    !githubUser ||
    !githubId
  ) {

    // Clear broken session
    localStorage.removeItem('logged_in');
    localStorage.removeItem('auth_provider');
    localStorage.removeItem('github_username');
    localStorage.removeItem('github_id');
    localStorage.removeItem('github_profile');
    localStorage.removeItem('avatar');
    localStorage.removeItem('userName');
    localStorage.removeItem('userDept');

    // Preserve return URL
    const current =
      window.location.pathname +
      window.location.search;

    const returnTo =
      encodeURIComponent(current);

    // Redirect to login
    window.location.replace(
      `/SRM-VEC-English-PWA/auth.html?return=${returnTo}`
    );

    return;
  }

  // Global helper object
  window.GH = {

    loggedIn: true,

    username:
      githubUser,

    githubId:
      githubId,

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
