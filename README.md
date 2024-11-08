# NTHP End-of-Year Campaign Demo Pages

This repository contains example code and resources for demonstrating a redirect-based campaign flow for the National Trust for Historic Preservation (NTHP) using 4Site landing pages and Engaging Networks (EN) donation pages. These demo pages simulate various end-of-year scenarios, including specific dates, redirect mechanisms, and a custom message bar for user guidance.

**DEMO Recording**: [Demo Recording](https://cln.sh/gWLHqRry)

## Overview

The demo includes:
- **Landing page** hosted on 4Site Studios
- **EN donation pages** with adjusted page titles for easy identification
- **Custom redirect message** with a link to return to the original page

## Test Pages

1. **Simulated Landing Page**:  
   [4Site Demo Page for NTHP End-of-Year Homepage Takeover](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/)

2. **Simulated EN Donation Pages**:
   - [EN Page for December 3](https://support.savingplaces.org/page/74587/donate/1)
   - [EN Page for December 30 & 31](https://support.savingplaces.org/page/74588/donate/1)

## Simulating Different Dates

Use the following URLs with `simulate-date` query parameters to test redirects and page behaviors on specific dates:

- **Simulate 12-03 - Will redirect to page #74587**:  
  [Landing Page on December 3](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-03)
  
- **Simulate 12-20 - Won't redirect**:  
  [Landing Page on December 20](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-20)
  
- **Simulate 12-30 - Will redirect to page #74588**:  
  [Landing Page on December 30](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-30)
  
- **Simulate 12-31 - Will redirect to page #74588**:  
  [Landing Page on December 31](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-31)

## Code

- **Landing Page Code**: [landing-page.js](https://github.com/4site-interactive-studios/4site-nthp-eoy-redirect/blob/main/landing-page.js)
- **EN Page Code**: [target-page.js](https://github.com/4site-interactive-studios/4site-nthp-eoy-redirect/blob/main/target-page.js)

## Redirect and Suppression Logic

1. **Redirect Triggers**:  
   If the landing page is loaded on a specific redirect date (or simulated date), users are automatically redirected to the corresponding EN donation page. URL parameters from the original page are passed to the destination page.

2. **Redirect Suppression Cookie**:  
   A cookie is set to prevent further redirects for 24 hours, ensuring users are not redirected in a loop if they revisit.

3. **Return-to-Origin Bar**:  
   When users are redirected, a bar displays at the top of the EN page with a message: *"You were redirected here. Click here to go back"* . The link uses a saved cookie containing the original URL, allowing users to return to the exact URL they came from.

## Developer Notes

1. Redirects will include include any URL arugments present on the landing page.

2. We recommend placing the code directly in the <head> so it executes as quickly as possible

3. You can change the copy on the landing page by editing the JS file.

4. The EN landing pages are for DEMO purposes only. There should be other page URLs that are prepared for EOY.
