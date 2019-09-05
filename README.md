# Bitwarden Browser Extension

[![Mattermost](https://img.shields.io/badge/mattermost-join%20char-orange.svg)](https://most.kokakiwi.net/signup_user_complete/?id=1atxn5ydk3g8pe4omy1akmhoaw)

The Bitwarden browser extension is written using the Web Extension API and Angular.

# Build/Run

**Requirements**

- [Node.js](https://nodejs.org) v8.11 or greater
- [Gulp](https://gulpjs.com/) (`npm install --global gulp-cli`)
- Chrome (preferred), Opera, or Firefox browser

**Run the app**

```
npm install
npm run build:watch
```

You can now load the extension into your browser through the browser's extension tools page:

- Chrome/Opera:
  1. Type `chrome://extensions` in your address bar to bring up the extensions page.
  2. Enable developer mode (checkbox)
  3. Click the "Load unpacked extension" button, navigate to the `build` folder of your local extension instance, and click "Ok".
- Firefox
  1. Type `about:debugging` in your address bar to bring up the add-ons page.
  2. Click the `Load Temporary Add-on` button, navigate to the `build/manifest.json` file, and "Open".
