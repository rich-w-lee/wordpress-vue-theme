module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'no-new': [0, 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['jest'],
};
