module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'prettier/prettier': true,
  },
}
