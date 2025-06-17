# NTHP End-of-Year Homepage Takeover Demo Pages

This repository contains example code and resources for a **homepage takeover** campaign flow for the National Trust for Historic Preservation (NTHP). In a year-end “Homepage Takeover,” all homepage visitors are temporarily redirected to a dedicated Engaging Networks (EN) donation page on specific dates. NTHP uses a Google Tag Manager (GTM) tag (running on both the live site and staging environment) to trigger these site-wide redirects on the designated dates. These demo pages and scripts simulate various end-of-year scenarios, including date-based redirects and a custom message bar to guide users.

**DEMO Recording**: [Demo Recording](https://cln.sh/gWLHqRry)

**Landing Page Code**: [`landing-page.js`](https://github.com/4site-interactive-studios/4site-nthp-eoy-redirect/blob/main/landing-page.js)

**Engaging Networks Page Code**: [`target-page.js`](https://github.com/4site-interactive-studios/4site-nthp-eoy-redirect/blob/main/target-page.js)

---

## How It Works

1. **Automatic Redirects on Key Dates**
   On a specified takeover date (or a simulated date for testing), the GTM tag script checks the current date. If it matches a target date, the user is **automatically redirected** from the landing page (e.g. the homepage) to the corresponding EN donation page. All URL query parameters from the original page are preserved and passed along to the donation page during the redirect.

2. **Message Bar & Return Link**
   When a visitor lands on the EN donation page via the redirect, a notice bar appears at the top of the page with a prompt (e.g. *“Click here to continue to savingplaces.org”*). This message bar provides a **return link** that takes the user back to the original page they came from (the originating URL is stored and used for this link). This allows users to easily navigate back to the main site after seeing the donation form.

3. **Redirect Suppression**
   If the user clicks the return link (or if the system detects a `no-redirect` flag in the URL), the script will append a `no-redirect` parameter to the homepage URL and set a **suppression cookie**. This cookie lasts for 24 hours and tells the script not to redirect that user again. In other words, once a user returns to the site, they won’t be immediately redirected again (even if they revisit the homepage on the same date), preventing any potential redirect loop or frustration.

---

## Setup Instructions

To implement this homepage takeover on the NTHP site (or a similar site), follow these steps:

1. **Add Redirect-Back Code on EN Pages**
   On the Engaging Networks donation page (and its thank-you page) that users will be redirected to, include the **“4Site - Temp Code - GT/EOY Homepage Takeover Redirect Back”** script at the bottom of the page. This code is responsible for displaying the return message bar and handling the return link logic on the EN pages.

2. **Configure GTM Tag**
   In **Google Tag Manager** (using the `goog@4site.tv` account), edit the **“GT/EOY - Homepage Takeover”** tag. Set the specific takeover date(s) and the target EN donation page URL (including any necessary URL arguments such as tracking codes) for the redirect. Ensure the tag is set to fire on the appropriate pages (e.g., the site’s homepage or site-wide) and on the correct dates.

3. **Publish / Testing GTM Changes**
   After configuring the tag, publish the updated GTM container so that the changes are saved and ready. *Note:* Simply publishing the tag in GTM does not immediately make it live on the NTHP website. You will need to coordinate with the NTHP team (notify David at Avalon) to have the updated container pushed live on the site. Before NTHP pushes the updated GTM container live, you can preview the homepage takeover using **GTM’s Preview Mode**. This lets you test the functionality on the real site without affecting all visitors. For example: ```https://savingplaces.org?simulate-date=06-30``` Using this URL (with GTM Preview enabled for that container version) will simulate the redirect as if it were June 30. You should see the homepage redirect to the specified EN page and the message bar appear, just as it would during a live campaign.

4. **Verify Deployment**
   Once the container is pushed live, test the functionality on the live site around the specified date to ensure the redirect and return bar work as expected.

---

## Demo Pages and Simulating Different Dates

For testing purposes, the demo landing page supports a `simulate-date` query parameter. You can append this to the URL to simulate how the redirect behaves on specific dates. This is useful for previewing the takeover logic without waiting for the actual dates. For example:

* **Simulate 12/03** – *Redirects to EN page ID [74587](https://support.savingplaces.org/page/74587/donate/1)* - 
  [Landing Page as if on December 3](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-03)

* **Simulate 12/20** – *No redirect occurs (date not in redirect list)* - 
  [Landing Page as if on December 20](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-20)

* **Simulate 12/30** – *Redirects to EN page ID [74588](https://support.savingplaces.org/page/74588/donate/1)* - 
  [Landing Page as if on December 30](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-30)

* **Simulate 12/31** – *Redirects to EN page ID [74588](https://support.savingplaces.org/page/74588/donate/1)* - 
  [Landing Page as if on December 31](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-31)

---

## Developer Notes

* **URL Parameters Preserved**
  Redirects will include any URL arguments present on the landing page. All query parameters are carried over to the EN donation page.

* **Customizing Text**
  To change the return message bar text or other messaging, edit the corresponding JavaScript Code Block on the EN page(s).

* **Set It and Forget It**
  The script is meant to run during the campaign window and can be safely left in place until you’re ready to remove it post-campaign.
