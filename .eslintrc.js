module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "legacyDecorators": true,
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
