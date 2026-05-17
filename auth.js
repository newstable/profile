(function () {
  var STORAGE_KEY = "wara_portfolio_auth";

  var VALID_USERNAME = "stable";
  var VALID_PASSWORD = "newstable@profile";

  function isAuthenticated() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  }

  function login(username, password) {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        return false;
      }
      return true;
    }
    return false;
  }

  function logout() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  window.PortfolioAuth = {
    isAuthenticated: isAuthenticated,
    login: login,
    logout: logout,
  };
})();
