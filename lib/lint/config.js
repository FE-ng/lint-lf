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
  javascript: [{ eslint: '^7.22.0' }, { 'babel-eslint': 'least' }],
  typescript: [{ typescript: '^4.2.3' }],
  react: [{ 'eslint-plugin-react': '^7.21.2' }, { 'eslint-plugin-react-hooks': '^4.1.2' }],
  vue: ['eslint-plugin-vue', 'vue-eslint-parser'],
  base: [{ husky: '^4.3.0' }, { 'lint-staged': '^10.5.4' }, { prettier: '^2.2.1' }],
  eslint: [
    { eslint: '^7.22.0' },
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
  commitlint: [
    { '@commitlint/cli': '^12.0.1' },
    { '@commitlint/config-conventional': '^12.0.1' },
    { 'conventional-changelog-cli': '^2.1.1' },
    { 'cz-customizable': '^6.3.0' },
  ],
  stylelint: [
    { stylelint: '^13.6.1' },
    { 'stylelint-config-rational-order': '^0.1.2' },
    { 'stylelint-config-standard': '^20.0.0' },
    { 'stylelint-declaration-block-no-ignored-properties': '^2.3.0' },
    { 'stylelint-order': '^4.1.0' },
  ],
  prettier: [
    { prettier: '^2.2.1' },
    { 'eslint-config-prettier': '^6.12.0' },
    { 'stylelint-config-prettier': '^8.0.2' },
  ],
  all: [
    // typescript
    { typescript: '^4.2.3' },

    // commitlint
    { '@commitlint/cli': '^12.0.1' },
    { '@commitlint/config-conventional': '^12.0.1' },
    { 'conventional-changelog-cli': '^2.1.1' },
    { 'cz-customizable': '^6.3.0' },

    // eslint
    { eslint: '^7.22.0' },
    { '@typescript-eslint/eslint-plugin': '^4.19.0' },
    { '@typescript-eslint/parser': '^4.19.0' },
    { 'eslint-config-airbnb': '^18.2.0' },
    { 'eslint-import-resolver-typescript': '^2.3.0' },
    { 'eslint-plugin-import': '^2.22.1' },
    { 'eslint-plugin-jsx-a11y': '^6.3.1' },
    { 'eslint-plugin-promise': '^4.2.1' },
    { 'eslint-plugin-react': '^7.21.2' },
    { 'eslint-plugin-react-hooks': '^4.1.2' },
    { 'eslint-plugin-unicorn': '^22.0.0' },

    // stylelint
    { stylelint: '^13.6.1' },
    { 'stylelint-config-rational-order': '^0.1.2' },
    { 'stylelint-config-standard': '^20.0.0' },
    { 'stylelint-declaration-block-no-ignored-properties': '^2.3.0' },
    { 'stylelint-order': '^4.1.0' },

    // prettier
    { prettier: '^2.2.1' },
    { 'eslint-config-prettier': '^6.12.0' },
    { 'stylelint-config-prettier': '^8.0.2' },

    // lint-staged
    { husky: '^4.3.0' },
    { 'lint-staged': '^10.5.4' },
  ],
};

const eslintrcConfig = (type) => ({
  extends: path.join(configPkgName, configPkgPath[type]),
});

module.exports = {
  needDeps,
};
