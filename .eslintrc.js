module.exports = {
  env: {
    commonjs: true,
    node: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single']
  }
};
