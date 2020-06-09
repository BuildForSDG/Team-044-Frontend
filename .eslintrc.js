module.exports = {
  env: {
    browser: true,
    es6: true,

    jest: true
  },

    jest: true,
  },

  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",


  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',

  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],


    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],


    ecmaVersion: 11,
    ecmaVersion: 2018,

    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {

    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

  },
};
