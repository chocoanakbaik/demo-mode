# ChocoScan Threat Lab

A standalone static web experience for controlled browser-threat simulations. It is separate from the ChocoScan scanner engine and can be deployed independently.

## Included scenarios

- Account verification: realistic account-security layout and a harmless local-only interaction.
- Urgent browser update: fake update prompt; no file is downloaded.
- Redirect chain: multi-hop destination preview; external navigation is blocked.
- Popup pressure: deceptive security alert and urgency pattern.

The scenario layouts mimic suspicious patterns for detection testing. Interactions do not store or transmit entered values, execute hostile scripts, download files, or navigate to external destinations. Fictional `.example.test` hostnames are used.

## Deploy on Netlify without GitHub deploys

1. Download this repository as a ZIP and extract it.
2. In Netlify, choose **Add new site → Deploy manually** (labels may vary).
3. Drag the extracted project contents, including `index.html`, `assets/`, and `netlify.toml`, into the deploy drop zone.
4. Netlify publishes the static site without a GitHub-triggered deployment.

Keep the HTML file and the `assets` folder together. Uploading only `index.html` will break the CSS and JavaScript.

## File structure

- `index.html`: page structure
- `assets/css/style.css`: responsive interface
- `assets/js/app.js`: scenario switching and safe interactions
- `assets/favicon.svg`: tab icon
- `netlify.toml`: static publishing and basic response headers

This repository contains a controlled UI simulation, not a live phishing toolkit, malware, or the ChocoScan detection engine. Scan the deployed URL or review the source with the separate scanner to evaluate detection.