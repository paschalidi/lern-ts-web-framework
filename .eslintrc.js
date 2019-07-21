module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true
  },
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
    "no-console": 0,
    "import/named": "off",
    "import/export": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ]
  }
};
