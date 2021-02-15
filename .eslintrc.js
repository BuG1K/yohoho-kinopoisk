module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-unresolved': 0,
    'linebreak-style': ['error', 'windows'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 0,
    'import/extensions': 'off',
    'class-methods-use-this': 0,
    'react/prop-types': [0],
    'react-hooks/exhaustive-deps': [0],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'implicit-arrow-linebreak': [0],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
