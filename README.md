# பல்லாங்குழி — Pallankuzhi

Pallankuzhi is one of the oldest and most beloved traditional board games of Tamil Nadu and South India, with roots going back over 2,000 years. The name comes from Tamil — *pallam* (pit) and *kuzhi* (hole) — describing the wooden board with 14 small cups arranged in two rows of seven.

Traditionally played by women and children in households across Tamil Nadu, Kerala, and Sri Lanka, Pallankuzhi is a game of sowing and capture — simple to learn, yet deeply strategic. Players pick up shells (or tamarind seeds) from a pit and sow them one by one around the board, capturing seeds when the last shell lands just before an empty pit.

This digital version brings the ancient game to life with:

- 🐚 Beautifully animated cowrie shells
- 🎨 Traditional kolam-inspired board art
- 🎵 Authentic ambient sounds
- 🤖 Player vs AI mode
- 🎮 Player 1 vs Player 2 (pass and play)
- 🌍 Online multiplayer (PvP via PeerJS + Firebase)
- 🔢 3 shell count modes (6, 12, 24 shells)
- 📱 Works on mobile and desktop
- ⚡ Progressive Web App (installable)

Whether you grew up playing this game on your grandmother's porch or are discovering it for the first time — this is Pallankuzhi as it was meant to be played.

*Preserving Tamil heritage, one shell at a time.*

---

## 📋 Version History

### v2.0 (May 2026) — Current
- Fix #31: Cancel RAF on unmount — prevents setState on unmounted component
- Fix #32: Collect and cancel all animation timers on reset/unmount
- Fix #33: Guest rematch shows spinner + "Waiting for host" instead of broken state
- Fix #36: Orientation lock 3-state cycle fixed (auto → landscape → portrait → auto)
- Fix #37: Opponent disconnect now ends game gracefully with win awarded to remaining player
- Fix BUG15: Firebase matchmaking listener cleanup using correct query ref
- Fix: Viewport scale now accounts for both width and height for small screens
- Fix: Game room code always exactly 4 alphanumeric characters
- Fix: Music restarts correctly when unmuting on menu screens
- Fix: Connection error now shows proper error type and ends game cleanly
- Fix: Animation stopped before showing win/lose overlay in all paths
- Fix: preserveAspectRatio="none" on board SVG for correct stretch behaviour

### v1.0 (May 2026)
- Initial release with AI, PvP, online multiplayer
- PWA support, Firebase Realtime Database, PeerJS P2P

---

## 🚀 Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for full hosting instructions.

### Quick local preview
Just open `index.html` in a browser — no build step needed.

### GitHub Pages
Push to a repo, enable GitHub Pages from Settings → Pages → main branch → root.

---

## 📁 File Structure

```
Pallankuzhi/
├── index.html           ← Main game (all-in-one React app)
├── manifest.json        ← PWA manifest
├── sw.js                ← Service Worker v6.0
├── ads.txt              ← AdSense ads.txt
├── about.html           ← About page
├── contact.html         ← Contact page
├── privacy-policy.html  ← Privacy policy
├── icons/               ← App icons (add your own!)
│   ├── icon-48.png
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-144.png
│   ├── icon-192.png
│   └── icon-512.png
├── README.md
├── LICENSE
├── DEPLOYMENT_GUIDE.md
└── PLAY_STORE_LISTING.md
```

---

© 2026 Quixote Club. All Rights Reserved.
