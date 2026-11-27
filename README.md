# Job99 ✨

**Job99** is a web application designed to help job seekers, students, and engineers curate, prioritize, and track their top 20 dream companies to work for.

---

## 🚀 Features

- **Top 20 Priority Ranking:** Select up to 20 dream companies with visual rank badges (#1, #2, #3 highlighted in gold, silver, and bronze).
- **Interactive Reordering:** Easily rearrange your priorities using drag-and-drop or the built-in `▲` / `▼` order controls.
- **Curated Catalog:** Browse and search through 99+ top tech organizations spanning AI, Cloud, Fintech, Hardware, and Big Tech.
- **Custom Additions:** Can't find your target company or startup in the catalog? Add any custom company name instantly.
- **Live Search & Filter:** Quickly filter through companies in real-time.
- **Progress Tracking:** Live progress bar and counter badge indicating how close you are to completing your top 20 list.
- **Share & Export:** One-click copy tool that formats your ranked dream list ready to share on LinkedIn, Twitter, or notes.
- **Reliable Fallbacks & Avatars:** Dynamic letter avatars automatically appear if any remote company logo fails to load.
- **Offline & Local Storage:** Persists your selected companies and custom additions to `localStorage` so your list is never lost. Works both as a full Express app and offline statically.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Modern CSS (Glassmorphism, CSS Custom Properties, Responsive Grid), Vanilla JavaScript (ES6+)
- **Backend:** Node.js, Express 5
- **Storage:** Client-side `localStorage` with server-side catalog API

---

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or open the repository:
   ```bash
   cd dream99
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

*(Alternatively, you can open `public/index.html` directly in your browser without Node.js, and the application will gracefully fall back to local offline mode.)*

---

## 🌐 Deploy to GitHub Pages (No Vercel Needed)

This site is 100% static-ready and works on GitHub Pages without any external server or Vercel configuration.

### Option 1: Automatic via GitHub Actions (Recommended)
1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages** (under "Code and automation").
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) will automatically trigger, build, and deploy your site to:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

### Option 2: Deploy from Branch
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**. Your site will be live in a couple of minutes!

---

## 📁 Project Structure

```text
├── public/
│   ├── index.html       # Semantic HTML layout and controls
│   ├── script.js        # Catalog fetching, ranking, drag-and-drop, and state
│   └── style.css        # Modern responsive dark theme styling
├── .gitignore           # Ignored dependencies and temp files
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
└── server.js            # Express server and /api/companies endpoint
```

---

## 📄 License

This project is licensed under the ISC License.
