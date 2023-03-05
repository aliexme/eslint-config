module.exports = {
  "overrides": [
    {
      "files": ["**/*.{jsx,tsx}"],
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true,
        },
      },
      "plugins": ["react", "react-hooks"],
      "extends": ["plugin:import/react", "plugin:react/recommended", "plugin:react-hooks/recommended"],
      "rules": {
        "react/jsx-tag-spacing": [
          "error",
          {
            "closingSlash": "never",
            "beforeSelfClosing": "proportional-always",
            "afterOpening": "never",
            "beforeClosing": "never",
          },
        ],
        "react/jsx-max-props-per-line": ["error", { "when": "multiline" }],
        "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
        "react/jsx-curly-brace-presence": ["error", "never"],
        "react/jsx-closing-bracket-location": "error",
        "react/self-closing-comp": "error",
        "react/no-unused-prop-types": "error",
      },
    },
  ],
}
