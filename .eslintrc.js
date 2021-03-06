const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  //  ESLint 默认使用 Espree 无法识别 TypeScript 的一些语法，所以需要ts中的解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true, // 严格模式
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/unicorn',
  ],
  plugins: ['react', 'unicorn', 'promise', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      typescript: {},
    },
  },
  rules: {
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
      },
    ],
    'import/no-unresolved': ERROR,
    '@typescript-eslint/no-var-requires': OFF,
    'unicorn/prevent-abbreviations': OFF,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: true },
    ],
    'unicorn/import-style': [
      ERROR,
      {
        styles: {
          util: false,
          path: {
            named: true,
          },
        },
      },
    ],
    'unicorn/filename-case': [
      ERROR,
      {
        cases: {
          // 中划线
          kebabCase: true,
          // 小驼峰
          camelCase: true,
          // 下划线
          snakeCase: false,
          // 大驼峰
          pascalCase: true,
        },
      },
    ],
    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', 'ts', '.jsx', 'js'] }],
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': [ERROR, 'interface'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'no-console': WARN,
    'global-require': OFF,
    'no-use-before-define': OFF,
    'no-restricted-syntax': OFF,
    'consistent-return': OFF,
    'unicorn/no-null': OFF,
    'jsx-a11y/no-static-element-interactions': [
      OFF,
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    // 强制onClick至少包含以下一种:onKeyUp, onKeyDown, onKeyPress。对于不能使用鼠标的身体残疾用户、兼容性和屏幕阅读器用户来说很重要。不适用于交互式或隐藏元素。
    'jsx-a11y/click-events-have-key-events': OFF,
    'react/require-default-props': OFF,
    'import/prefer-default-export': OFF,
    // 'import/no-extraneous-dependencies': OFF,
    // 'no-plusplus': OFF,
  },
};
