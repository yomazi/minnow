# Minnow 🐟

Minnow is a lightweight mockup tool for embedding show-specific marketing assets into a ticketing page template.  
It lets you edit a standalone HTML file (`test.html`) and see your changes rendered inside a consistent page structure without touching the surrounding design elements.

---

## Features

- Lightweight – no build tools or frameworks required.
- Instant updates – changes to `test.html` are reflected automatically every few seconds.
- Focused – isolate marketing assets from the rest of the page layout.
- Cache-busting – always fetches the latest version of your content file.

---

## How It Works

- `index.html` contains the page layout (header, footer, styles).
- `test.html` contains only the marketing asset HTML (images, copy, buttons, etc.).
- A small script in `index.html` fetches `test.html` and injects it into the page’s content area.
- Auto-refresh ensures edits to `test.html` appear without manual reloads.

---

## Project Structure

/project-root
/content
/<show-folder-1>
content.html # marketing asset HTML snippet
content.json # title: title of show (with markup if needed), date: show date, image: hero image src
index.html # Container page (main structure)
README.md # This file

---

## Usage

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Create a subfolder inside of `content` and add a `content.html` and `content.json` file containing your show-specific marketing content. Name it after your show in caterpillar case, i.e., "os-mutantes".
4. Run the command `npm run dev --content=<name of your subfolder>`.
5. Your changes will appear in the page within a couple of seconds.

---
