const config = {
  husky: {
    hooks: {
      'pre-commit': 'lint-staged',
      'commit-msg': 'commitlint --config .commitlintrc.js -E HUSKY_GIT_PARAMS',
    },
  },
  config: {
    commitizen: {
      path: 'node_modules/cz-customizable',
    },
  },
  'lint-staged': {
    '*.{ts,tsx,js}': ['eslint --config .eslintrc.js'],
    '*.{css,less,scss}': ['stylelint --config .stylelintrc.js'],
    '*.{ts,tsx,js,json,html,yml,css,less,scss,md}': ['prettier --write'],
  },
};

module.exports = {
  config,
};
