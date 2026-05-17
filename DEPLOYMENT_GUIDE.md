# Pallankuzhi — Deployment Guide
© 2026 Quixote Club. All Rights Reserved.

---

## 🌐 Option 1: GitHub Pages (Free, Recommended)

1. Create a GitHub repository (e.g. `pallankuzhi`)
2. Upload all files from this folder to the repo root
3. Go to **Settings → Pages**
4. Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`
5. Click **Save** — your site will be live at `https://yourusername.github.io/pallankuzhi/`

> ⚠️ Update your Firebase authorized domains to include the GitHub Pages URL.

---

## 🔥 Option 2: Firebase Hosting (Recommended for Firebase users)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to: . (current folder)
# Single page app: No
firebase deploy
```

Your site will be at `https://pallankuzhi-53823.web.app`

---

## ▲ Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this folder
3. Follow prompts — no build step needed

---

## 📱 Option 4: Capacitor (Android APK / iOS IPA)

Capacitor wraps this web game into a native app.

### Prerequisites
- Node.js v18+ → https://nodejs.org
- Android Studio (for APK) → https://developer.android.com/studio
- Xcode on Mac (for IPA)

### Steps

```bash
# 1. Create a new folder for the Capacitor project
mkdir pallankuzhi-app && cd pallankuzhi-app

# 2. Copy all files from this zip into a www/ subfolder
mkdir www
cp -r ../Pallankuzhi/* www/

# 3. Create package.json
npm init -y
npm install @capacitor/core @capacitor/android @capacitor/ios
npm install -D @capacitor/cli

# 4. Initialize Capacitor
npx cap init "Pallankuzhi" "com.quixoteclub.pallankuzhi" --web-dir www

# 5. Add platforms
npx cap add android
npx cap add ios      # Mac only

# 6. Sync
npx cap sync

# 7. Open in Android Studio → Build → Generate Signed APK
npx cap open android
```

### ⚠️ Firebase App Check in native apps
reCAPTCHA v3 (used in the web version) does NOT work inside Capacitor.
Before publishing to Play Store / App Store:
- Android: Enable **Play Integrity** provider in Firebase Console → App Check
- iOS: Enable **Device Check** provider in Firebase Console → App Check

---

## 🔒 Firebase Security Checklist

Before going live, verify in Firebase Console:

- [ ] **Realtime Database rules** are NOT `allow read, write: if true`
- [ ] **App Check enforcement** is enabled for Realtime Database
- [ ] **Authorized domains** include your hosting domain
- [ ] **API key restrictions** set in Google Cloud Console

---

## 🗂️ Required Icon Files

Place these in an `icons/` folder:

| File | Size | Purpose |
|------|------|---------|
| icon-48.png | 48×48 | Android MDPI |
| icon-72.png | 72×72 | Android HDPI |
| icon-96.png | 96×96 | Android XHDPI |
| icon-144.png | 144×144 | Android XXHDPI |
| icon-192.png | 192×192 | PWA / Android XXXHDPI |
| icon-512.png | 512×512 | PWA splash / Play Store |

All icons should be square PNG with dark (`#0a0300`) background.
