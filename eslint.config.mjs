import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,

  {
    "parser": "@babel/eslint-parser",
    "extends": [
      "plugin:react/recommended",
      "airbnb",
      "prettier"
    ],
    "plugins": [
      "react",
      "react-hooks",
      "prettier"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": 0,
      "import/prefer-default-export": 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    "env": {
      "browser": true,
      "es2021": true
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }  
]);