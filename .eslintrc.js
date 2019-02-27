module.exports = {
  extends: 'airbnb',
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
  parser: 'babel-eslint',
};
