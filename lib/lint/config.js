const path = require('path');

const configPkgName = 'eslint-config-lf';

const configPkgPath = {
  javascript: '',
  'javascript/vue': 'vue',
  'javascript/react': 'react',
  typescript: 'typescript',
  'typescript/vue': 'typescript/vue',
  'typescript/react': 'typescript/react',
};

const needDeps = {
  javascript: ['eslint', 'babel-eslint'],
  typescript: [
    { typescript: '^4.2.3' },
    { '@typescript-eslint/eslint-plugin': '^4.19.0' },
    { '@typescript-eslint/parser': '^4.19.0' },
    { 'eslint-config-airbnb': '^18.2.0' },
    { 'eslint-config-prettier': '^6.12.0' },
    { 'eslint-import-resolver-typescript': '^2.3.0' },
    { 'eslint-plugin-import': '^2.22.1' },
    { 'eslint-plugin-jsx-a11y': '^6.3.1' },
    { 'eslint-plugin-promise': '^4.2.1' },
    { 'eslint-plugin-react': '^7.21.2' },
    { 'eslint-plugin-react-hooks': '^4.1.2' },
    { 'eslint-plugin-unicorn': '^22.0.0' },
  ],
  react: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],
  vue: ['eslint-plugin-vue', 'vue-eslint-parser'],
  all: [
    { typescript: '^4.2.3' },
    { prettier: '^2.2.1' },
    { '@commitlint/cli': '^12.0.1' },
    { '@commitlint/config-conventional': '^12.0.1' },
    { '@typescript-eslint/eslint-plugin': '^4.19.0' },
    { '@typescript-eslint/parser': '^4.19.0' },
    { 'conventional-changelog-cli': '^2.1.1' },
    { 'cz-customizable': '^6.3.0' },
    { eslint: '^7.22.0' },
    { 'eslint-config-airbnb': '^18.2.0' },
    { 'eslint-config-prettier': '^6.12.0' },
    { 'eslint-import-resolver-typescript': '^2.3.0' },
    { 'eslint-plugin-import': '^2.22.1' },
    { 'eslint-plugin-jsx-a11y': '^6.3.1' },
    { 'eslint-plugin-promise': '^4.2.1' },
    { 'eslint-plugin-react': '^7.21.2' },
    { 'eslint-plugin-react-hooks': '^4.1.2' },
    { 'eslint-plugin-unicorn': '^22.0.0' },
    { husky: '^4.3.0' },
    { 'lint-staged': '^10.5.4' },
    { stylelint: '^13.6.1' },
    { 'stylelint-config-prettier': '^8.0.2' },
    { 'stylelint-config-rational-order': '^0.1.2' },
    { 'stylelint-config-standard': '^20.0.0' },
    { 'stylelint-declaration-block-no-ignored-properties': '^2.3.0' },
    { 'stylelint-order': '^4.1.0' },
  ],
};

const eslintrcConfig = (type) => ({
  extends: path.join(configPkgName, configPkgPath[type]),
});

module.exports = {
  eslintrcConfig,
  needDeps,
};
