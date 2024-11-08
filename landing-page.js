/* Code to add to the page(s) the visitor will land on and in turn need to be redirected elsehwere */
/* Productive Task: https://app.productive.io/2650-4site-interactive-studios-inc/tasks/9437529 */

(function() {
  const urlsByDate = {
    "12-03": "https://support.savingplaces.org/page/74587/donate/1",
    "12-30": "https://support.savingplaces.org/page/74588/donate/1",
    "12-31": "https://support.savingplaces.org/page/74588/donate/1"
  };

  const suppressionCookie = "redirectSuppressed";
  const queryParams = new URLSearchParams(window.location.search);

  // Function to set a cookie with an expiration date
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Days to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // If no-redirect is present, set the suppression cookie for 24 hours and exit
  if (queryParams.has("no-redirect")) {
    setCookie(suppressionCookie, "true", 1); // Set suppression cookie for 1 day
    return;
  }

  // Check for suppression cookie
  if (document.cookie.includes(suppressionCookie)) {
    return; // Suppression is active, so exit
  }

  // Function to build redirect URL with original parameters, was-redirected, and originating URL
  function buildRedirectUrl(redirectUrl) {
    const redirectParams = new URLSearchParams(queryParams.toString());
    redirectParams.append("was-redirected", "");
    redirectParams.append("originating-url", window.location.href); // Append the current URL as originating-url
    return `${redirectUrl}?${redirectParams.toString()}`;
  }

  // Get the current date or the simulated date from query params
  function getCurrentOrSimulatedDate() {
    const simulateDate = queryParams.get("simulate-date");
    if (simulateDate && /^\d{2}-\d{2}$/.test(simulateDate)) {
      return simulateDate; // Use the simulated date if provided and valid
    }
    const today = new Date();
    return `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  }

  // Check if the date is one of the specified target dates
  const todayFormatted = getCurrentOrSimulatedDate();

  if (urlsByDate[todayFormatted]) {
    // Set the suppression cookie before redirecting to prevent further redirects
    setCookie(suppressionCookie, "true", 1); // Set suppression cookie for 1 day

    // Redirect to the corresponding URL
    window.location.href = buildRedirectUrl(urlsByDate[todayFormatted]);
  }
})();