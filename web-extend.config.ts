import { defineConfig } from 'web-extend';

export default defineConfig({
  entriesDir: './src', // Entries directory (default: "src")
  outDir: '.output', // Output directory (default: "dist")
  manifest: {}, // Custom manifest overrides (default: {})
  target: 'firefox-mv2', // Browser target (default: "chrome-mv3")
  webExt: {}, // Customize web-ext configurations
  rsbuild: {}, // Customize Rsbuild configurations
});
