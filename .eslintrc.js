module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {}
}
