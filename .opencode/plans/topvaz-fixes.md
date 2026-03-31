# Plan: Fix topVAZ Games Site for GitHub Pages

## Critical Issues Found

### 1. car.html - Local file:// paths (WILL NOT WORK remotely)
All CSS, JS, and image paths use file:///D:/Game-Store/... - must change to relative /assets/...

### 2. index.html - Broken favicon path
/database/topvaz.com/favicon.png > /assets/images/favicon.png

### 3. index.html - Game links missing .html extension
/play/slope > /play/slope.html (GitHub Pages needs explicit extensions)
Also: /playe is broken (should be /play/earn-to-die.html)

### 4. index.html - Duplicate retro-bowl entry (lines 931-942)

### 5. style.css - Dead background URL (/content/themes/... doesn't exist)

### 6. script.js - Server-side AJAX calls to /includes/*.php (no PHP on GitHub Pages)

## Color Scheme Change
Dark green theme: #0d1117 background, #2ea043 accents

## Steps to Execute
1. Fix car.html file:/// paths > relative paths
2. Fix index.html (favicon, links, duplicates, add custom.css)
3. Fix style.css (remove dead URL)
4. Create custom.css (green theme overrides)
5. Fix script.js (remove server calls)
6. Create .gitignore
7. Init git, commit, push to GitHub
8. Enable GitHub Pages
