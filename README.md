# NTHP End-of-Year Campaign Demo Pages

This repository contains example code and resources for demonstrating a redirect-based campaign flow for the National Trust for Historic Preservation (NTHP) using 4Site landing pages and Engaging Networks (EN) donation pages. These demo pages simulate various end-of-year scenarios, including specific dates, redirect mechanisms, and a custom message bar for user guidance.

## Overview

The demo includes:
- **Landing page** hosted on 4Site Studios
- **EN donation pages** with adjusted page titles for easy identification
- **Custom redirect message** with a link to return to the original page

## Demo Pages

### Test Pages

1. **Landing Page**:  
   [4Site Demo Page for NTHP End-of-Year Homepage Takeover](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/)

2. **EN Donation Pages**:
   - **12-03 Page**:  
     [EN Page for December 3](https://support.savingplaces.org/page/74587/donate/1)
   - **12-30 & 12-31 Page**:  
     [EN Page for December 30 & 31](https://support.savingplaces.org/page/74588/donate/1)

### Simulating Different Dates

Use the following URLs with `simulate-date` query parameters to test redirects and page behaviors on specific dates:

- **Simulate 12-03**:  
  [Landing Page on December 3](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-03)
  
- **Simulate 12-20**:  
  [Landing Page on December 20](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-20)
  
- **Simulate 12-30**:  
  [Landing Page on December 30](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-30)
  
- **Simulate 12-31**:  
  [Landing Page on December 31](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-31)
  
- **Simulate 12-31 with URL Argument**:  
  [Landing Page on December 31 with `utm_source`](https://www.4sitestudios.com/nthp-demo-page-gt-eoy-homepage-takeover/?simulate-date=12-31&utm_source=facebook)

   - **Recording**:  
     [Demo Recording](https://cln.sh/gWLHqRry)

## Code

- **Landing Page Code**: [4Site Landing Page Code on Pastebin](https://pastebin.com/raw/zxZ8J1Gh)
- **EN Page Code**: [EN Donation Page Code on Pastebin](https://pastebin.com/raw/Z1KJs5vd)

## Redirect and Suppression Logic

1. **Redirect Triggers**:  
   If the landing page is loaded on a specific redirect date (or simulated date), users are automatically redirected to the corresponding EN donation page. URL parameters from the original page are passed to the destination page.

2. **Redirect Suppression Cookie**:  
   A cookie is set to prevent further redirects for 24 hours, ensuring users are not redirected in a loop if they revisit.

3. **Return-to-Origin Bar**:  
   When users are redirected, a bar displays at the top of the EN page with a message: *"You were redirected here. Click here to go back"* (link provided in the message). The link uses a saved cookie containing the original URL, allowing users to return without triggering another redirect.

## Feedback

Please review the setup and demo pages. If you have any questions or need further clarification, feel free to reach out.