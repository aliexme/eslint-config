module.exports = {
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "quotes": ["error", "single"],
    "quote-props": ["error", "as-needed"],
    "semi": ["error", "never"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "max-len": ["error", 120],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "key-spacing": "error",
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never", { "enforceForClassMembers": true }],
    "arrow-spacing": "error",
    "switch-colon-spacing": ["error", { "after": true, "before": false }],
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always",
      },
    ],
    "space-before-blocks": ["error", "always"],
    "no-constant-condition": ["error", { "checkLoops": false }],
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "eol-last": "error",
    "arrow-parens": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-new-object": "error",
    "object-shorthand": "error",
    "prefer-object-spread": "error",
    "no-array-constructor": "error",
    "array-callback-return": ["error", { "checkForEach": true }],
    "prefer-destructuring": ["error", { "array": false, "object": true }, { "enforceForRenamedProperties": false }],
    "prefer-template": "error",
    "template-curly-spacing": ["error", "never"],
    "no-eval": "error",
    "wrap-iife": ["error", "inside", { "functionPrototypeMethods": true }],
    "no-loop-func": "error",
    "prefer-rest-params": "error",
    "default-param-last": "error",
    "no-new-func": "error",
    "no-param-reassign": ["error", { "props": true }],
    "prefer-spread": "error",
    "space-infix-ops": ["error", { "int32Hint": true }],
    "function-paren-newline": ["error", "multiline-arguments"],
    "object-curly-newline": ["error", { "consistent": true }],
    "prefer-arrow-callback": "error",
    "no-empty-function": "error",
    "no-useless-constructor": "error",
    "dot-notation": "error",
    "one-var": ["error", "never"],
    "no-multi-assign": "error",
    "operator-linebreak": [
      "error",
      "before",
      {
        "overrides": { "=": "after" },
      },
    ],
    "eqeqeq": "error",
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    "no-nested-ternary": "error",
    "no-mixed-operators": "error",
    "brace-style": ["error", "1tbs"],
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": ["!", "?"],
      },
    ],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "no-whitespace-before-property": "error",
    "padded-blocks": ["error", "never"],
    "block-spacing": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "no-new-wrappers": "error",
    "radix": ["error", "as-needed"],
    "id-length": [
      "error",
      {
        "min": 2,
        "exceptions": ["i", "e"],
        "exceptionPatterns": ["[x-z]"],
      },
    ],
    "new-cap": "error",
    "no-restricted-globals": [
      "error",
      {
        "name": "isNaN",
        "message": "Use Number.isNaN instead.",
      },
      {
        "name": "isFinite",
        "message": "Use Number.isFinite instead.",
      },
    ],
    "no-console": "warn",
  },
}
