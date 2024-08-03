import globals from "globals";
import pluginJs from "@eslint/js";


export default [

  {
    files: ["**/*.js"],
    languageOptions: { // Config
      sourceType: "commonjs"
    }
  },
  {
    languageOptions: {
      globals: {
        test: globals.jest.test,
        expect: globals.jest.expect
      }
    }
  },
  {languageOptions: { globals: globals.browser }}, // Config

  pluginJs.configs.recommended,// Config
];
