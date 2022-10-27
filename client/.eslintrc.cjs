module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", {
      "ignoreRestSiblings": true
    }],
    "@typescript-eslint/no-use-before-define": "off",
    "no-debugger": "warn",
    "no-console": ["warn", {
      "allow": ["warn", "error"]
    }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
};
