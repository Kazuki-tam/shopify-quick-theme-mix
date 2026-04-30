import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@rspack/cli";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const assetsPath = path.resolve(currentDir, "../assets/");

// Set production or development via NODE_ENV
const MODE = process.env.NODE_ENV || 'development';
// Source map setting
const enabledSourceMap = MODE === 'development';

export default defineConfig({
  watchOptions: {
    ignored: /node_modules/,
  },
  // Entry point
  entry: {
    "custom-script": "./src/ts/main.ts",
  },
  // Output files
  output: {
    path: assetsPath,
    filename: "[name].js",
  },
  devtool: enabledSourceMap ? "source-map" : "eval-source-map",
});
