const path = require("path");

module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "."
  },
  plugins: ["prettier"],
  extends: [
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "import/named": "off",
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    "import/export": "off",
    "import/prefer-default-export": "off", // Allow single Named-export
    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ]
  }
};
