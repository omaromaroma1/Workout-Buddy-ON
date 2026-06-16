# RepRise — Workout Planner 🏋️

A fast, installable **Progressive Web App** for browsing exercises by muscle group, watching a **real animated photo demo** of each movement, reading step‑by‑step instructions, and building, saving & loading your own workout plans — no account, no backend.

![RepRise](icons/icon-512.png)

## Features

- **9 muscle groups, 144 exercises** — Chest, Back, Shoulders, Biceps, Triceps, Quads, Hamstrings & Glutes, Calves, Core.
- **Animated photo demos** — every exercise plays a real start↔finish photo demonstration of the rep (like a looping GIF), with a pulsing LIVE badge and a pause control.
- **Full instructions** — numbered how‑to steps, muscles worked, equipment, difficulty, and suggested sets × reps.
- **Search & filter** by name, muscle, equipment, and difficulty.
- **Plan builder** — organize exercises into named training **days** (e.g. Push / Pull / Legs), edit sets & reps, reorder, remove.
- **Save / Load / Export / Import** — store multiple named plans in your browser; export to a `.json` file as a backup or to move between devices.
- **Installable & offline** — add it to your phone's home screen and it runs like a native app with no internet.

Everything is stored locally on your device (`localStorage`). Nothing is uploaded anywhere.

---

## 🚀 Deploy it to the internet (GitHub + Netlify)

You'll get a public URL like `https://your-app.netlify.app` that you can open and install on your phone.

### Step 1 — Put the code on GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click **New repository**, name it e.g. `reprise-workout`, keep it **Public**, and click **Create repository**.
3. Upload these files. Easiest way (no command line):
   - On the new repo page click **uploading an existing file**.
   - Drag in **everything in this folder** (`index.html`, the `css/`, `js/`, and `icons/` folders, `manifest.webmanifest`, `service-worker.js`, `netlify.toml`).
   - Click **Commit changes**.

   <details><summary>Prefer the command line? (optional)</summary>

   ```bash
   git init
   git add .
   git commit -m "RepRise workout app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/reprise-workout.git
   git push -u origin main
   ```
   </details>

> The `data/` folder is **not** needed to run the app (it was only used to generate `js/exercises.js`) and is excluded by `.gitignore`.

### Step 2 — Deploy with Netlify

1. Create a free account at [netlify.com](https://netlify.com) — sign up **with GitHub** for the smoothest setup.
2. Click **Add new site ▸ Import an existing project**.
3. Choose **GitHub**, authorize, and pick your `reprise-workout` repository.
4. Leave the build settings as they are — there's no build step. The included `netlify.toml` already sets the publish directory to the project root.
5. Click **Deploy**. After ~30 seconds you'll get a live URL.
6. (Optional) Under **Site configuration ▸ Change site name**, give it a friendlier address.

That's it — every time you push changes to GitHub, Netlify redeploys automatically.

> **Even faster (no GitHub):** go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag this whole folder onto the page. It deploys instantly. (GitHub is still recommended so you can update it later.)

---

## 📲 Add it to your home screen

Open your live Netlify URL on your phone, then:

- **iPhone / iPad (Safari):** tap the **Share** button → **Add to Home Screen** → **Add**.
- **Android (Chrome):** tap the **⋮** menu → **Install app** / **Add to Home screen**. (An **Install app** button also appears in the header.)

The app now launches full‑screen from your home screen and works offline.

---

## 🛠️ Run it locally (optional)

It's plain HTML/CSS/JS — just open `index.html` in a browser. For service‑worker / install features to work, serve it over `http://localhost` with any static server, for example:

```bash
# Python 3
python -m http.server 8080
# then visit http://localhost:8080
```

---

## 📁 Project structure

```
index.html               App shell
css/styles.css           Styling (dark, mobile-first)
js/exercises.js          Exercise database (144 exercises) — auto-generated
js/app.js                UI, navigation, plan builder, save/load, photo demos
manifest.webmanifest     PWA manifest (installable)
service-worker.js        Offline caching (app shell + demo images)
icons/                   App icons (png + svg)
netlify.toml             Netlify config (no build step)
serve.ps1                Optional zero-dependency local server (PowerShell)
```

## ✏️ Customizing exercises

Edit `js/exercises.js`. Each exercise is an object with `name`, `muscleGroup`, `equipment`, `difficulty`, `instructions`, `primaryMuscles`, `secondaryMuscles`, `sets`, `reps`, and `images` (the two demo‑photo URLs that animate the rep).

## 📡 A note on the demo photos & offline use

The demo photos are served from a CDN (jsDelivr), so the **first** time you open the app you need an internet connection. After that, the app shell **and the images you've viewed** are cached by the service worker and work offline.

## 🙏 Credits

Exercise data and demonstration photos come from the open‑source [**free‑exercise‑db**](https://github.com/yuhonas/free-exercise-db) (public domain / Unlicense), delivered via the [jsDelivr](https://www.jsdelivr.com/) CDN.

---

Made for personal training use. Always warm up, use appropriate weight, and stop if you feel pain.
