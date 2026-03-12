import storybook from 'eslint-plugin-storybook';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    // tseslint.configs.recommended를 직접 펼치는 대신 languageOptions를 보강합니다.
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser, // TS 파서 명시
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSX 파싱 허용
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint.plugin, // TS 플러그인 명시
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended
        .map((c) => c.rules)
        .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
      ...reactHooks.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      // React 17+ 환경이라면 이 규칙을 꺼주어야 'React is not defined' 에러가 안 납니다.
      'react/react-in-jsx-scope': 'off',
    },
  },
  ...storybook.configs['flat/recommended'],
]);
