# Developer Portfolio

A game-style developer portfolio built with React, Vite and React Router. Pixel fonts for big text, a title-screen hero with hidden coins, a HUD with an XP bar, and achievement pop-ups. Night level (dark) by default, with a day level (light) toggle.

## Run it in VS Code

1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open this folder in VS Code (File > Open Folder)
3. Open the terminal (Ctrl + `) and run:

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). Edits show up instantly.

## Edit your content (no component changes needed)

| What | File |
| --- | --- |
| Name, title, tagline, bio, skills, links, education | `src/data/profile.js` |
| Projects (add, edit, remove) | `src/data/projects.js` |
| Project screenshots | import the image at the top of `projects.js` (like the existing ones), or put it in `public/projects/` and use `image: '/projects/name.png'` |
| Avatar (ID card image) and all pixel sprites | `src/data/sprites.js` |
| Achievements, coin count, sound effects | `src/game/GameContext.jsx` |
| Coin positions, clouds, ground props | `src/components/Scene.jsx` |
| Colours, fonts, widths (both themes) | top of `src/styles/global.css` |

### Add a project

Copy an object in `src/data/projects.js`, change the fields, save. The filter buttons on the Projects page update automatically from your `tags`.

### Contact form

By default the form opens the visitor's email app. To receive messages directly, create a free form at https://formspree.io and paste its ID into `formspreeId` in `src/data/profile.js`.

## Build and deploy

```bash
npm run build     # creates the dist/ folder
npm run preview   # test the production build locally
```

Deploy `dist/` to Vercel or Netlify (both handle React Router links automatically). For GitHub Pages, switch `BrowserRouter` to `HashRouter` in `src/main.jsx` and set `base` in `vite.config.js` to your repository name.
