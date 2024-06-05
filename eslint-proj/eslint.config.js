import airbnbBase from "eslint-config-airbnb-base";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  airbnbBase,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      node: true,
    },
    rules: {
      "no-console": "off", // Allow console statements for Node.js
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message: "for...in loops are not allowed",
        },
        {
          selector: "LabeledStatement",
          message: "Labeled statements are not allowed",
        },
        {
          selector: "WithStatement",
          message: "with statements are not allowed",
        },
      ],
    },
  },
];
