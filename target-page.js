/* Code to be added to the page(s) the visitor will have been redirected to */
/* Productive Task: https://app.productive.io/2650-4site-interactive-studios-inc/tasks/9437529 */

(function() {
  const queryParams = new URLSearchParams(window.location.search);
  const isRedirected = queryParams.has("was-redirected");
  const isInIframe = window.self !== window.top;
  const originatingUrlParam = queryParams.get("originating-url");
  const originatingUrlCookie = getCookie("originatingUrl");

  // Get cookie by name
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let c of ca) {
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }

  // Set cookie with expiration (in seconds)
  function setCookie(name, value, seconds) {
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  // Save originating URL to cookie if present
  if (originatingUrlParam) {
    setCookie("originatingUrl", originatingUrlParam, 1800);

    // Remove the originating-url argument from the URL
    queryParams.delete("originating-url");
    const newQueryString = queryParams.toString();
    const newUrl = `${window.location.pathname}${newQueryString ? '?' + newQueryString : ''}`;

    // Update the browser URL without reloading the page
    window.history.replaceState(null, "", newUrl);
  }

  const originatingUrl = originatingUrlParam || originatingUrlCookie;

  // Declare bar outside of the if block so it can be accessed globally within the function
  let bar;

  // Function to adjust the body's margin based on the banner height
  function adjustBodyMargin() {
    if (bar) {
      const barHeight = bar.offsetHeight;
      document.body.style.marginTop = `${barHeight}px`;
    }
  }

  // Show banner if redirected, in iframe, or cookie exists
  if (isRedirected || isInIframe || originatingUrlCookie) {
    bar = document.createElement("div"); // Now this is in the broader scope
    bar.style = "position:fixed;top:0;width:100%;background-color:#00689f;color:#fff;padding:15px 10px;text-align:center;z-index:9999;box-sizing:border-box;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;";
    bar.innerHTML = "You&nbsp;were&nbsp;redirected&nbsp;here.";

    // Create return link
    const returnLink = document.createElement("a");
    returnLink.href = originatingUrl || "#";
    returnLink.innerHTML = "Click&nbsp;here&nbsp;to&nbsp;go&nbsp;back";
    returnLink.style = "color:#7dd2f7;text-decoration:underline;margin-left:10px;margin-right:10px";
    bar.appendChild(returnLink);
    document.body.appendChild(bar);

    // Use requestAnimationFrame to ensure the banner is fully rendered before adjusting margin
    requestAnimationFrame(adjustBodyMargin);

    // Handle window resize
    window.addEventListener('resize', adjustBodyMargin);

    // Handle return link click
    returnLink.addEventListener("click", function(e) {
      e.preventDefault();
      queryParams.delete("was-redirected");
      queryParams.delete("originating-url");

      // Redirect back using the original URL from the cookie, adding `no-redirect`
      const originalUrl = new URL(originatingUrl || document.referrer || "/");
      originalUrl.searchParams.set("no-redirect", "");

      window.location.href = originalUrl.toString();
    });
  }
})();