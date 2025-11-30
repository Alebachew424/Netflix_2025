// ========================= DEPLOYMENT MANUAL (GITHUB PAGES) =========================
// This manual explains how to deploy the Netflix_2025 React project using GitHub Pages.
// Keep this for future projects.

// -----------------------------------------------------------------------------
// 1. INSTALL GITHUB-PAGES PACKAGE  
// -----------------------------------------------------------------------------
// - Install the gh-pages package as a dev dependency.
//   Command:
//      npm install --save-dev gh-pages

// This allows automatic deployment of the /dist folder to GitHub Pages.


// -----------------------------------------------------------------------------
// 2. UPDATE package.json  
// -----------------------------------------------------------------------------
// Add these two things:
//   (1) "homepage" field
//   (2) "predeploy" and "deploy" scripts

// Example:
// ----------------------------------------------------------------------------------
// {
//   "name": "netflix-clone",
//   "version": "0.0.0",
//   "homepage": "https://Alebachew424.github.io/Netflix_2025",
//   "scripts": {
//       "dev": "vite",
//       "build": "vite build",
//       "predeploy": "npm run build",
//       "deploy": "gh-pages -d dist"
//   },
//   "devDependencies": {
//       "gh-pages": "^6.0.0"
//   }
// }
// ----------------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// 3. CREATE A PRODUCTION BUILD  
// -----------------------------------------------------------------------------
// Command:
//      npm run build
//
// - This generates the "dist/" folder.
// - This folder contains the optimized production version of your React app.


// -----------------------------------------------------------------------------
// 4. DEPLOY TO GITHUB PAGES  
// -----------------------------------------------------------------------------
// Command:
//      npm run deploy
//
// - The 'gh-pages' tool uploads the dist/ folder to a special branch: gh-pages
// - GitHub will automatically host your site from that branch.


// -----------------------------------------------------------------------------
// 5. ENABLE GITHUB PAGES IN REPOSITORY SETTINGS  
// -----------------------------------------------------------------------------
// - Go to your repository on GitHub
// - Go to Settings → Pages
// - Under "Branch", choose: gh-pages
// - Save settings
// - Wait 1–3 minutes

// Your site will be live at:
//     https://Alebachew424.github.io/Netflix_2025


// -----------------------------------------------------------------------------
// 6. COMMON TROUBLESHOOTING  
// -----------------------------------------------------------------------------
// - If assets not loading: ensure "homepage" field matches your repo URL.
// - If blank screen: check that Router uses correct basename or remove strict paths.
// - If 404 error on refresh: GitHub Pages does not support SPA routing.
//   Use HashRouter or fallback page if needed.


// -----------------------------------------------------------------------------
// 7. REDEPLOY WHENEVER YOU UPDATE CODE  
// -----------------------------------------------------------------------------
// Always run:
//      npm run build
//      npm run deploy
//
// This will update your live site with new changes.


// -----------------------------------------------------------------------------
// END OF DEPLOYMENT MANUAL
// =============================================================================
