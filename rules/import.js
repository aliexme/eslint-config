module.exports = {
  "plugins": [
    "import",
  ],
  "extends": [
    "plugin:import/recommended",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".cjs", ".mjs", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["src/", "node_modules"],
      },
    },
    "import/ignore": [
      "node_modules",
    ],
  },
  "rules": {
    "import/no-useless-path-segments": ["error", { "noUselessIndex": false }],
    "import/order": ["error", {
      "groups": [["builtin", "external"], "internal", ["parent", "sibling"], "index", "object"],
      "newlines-between": "always-and-inside-groups",
      "warnOnUnassignedImports": true,
    }],
    "import/no-self-import": "error",
    "import/no-mutable-exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/namespace": "off",
  },
}
