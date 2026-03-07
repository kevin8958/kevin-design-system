import storybook from "eslint-plugin-storybook";
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier' // 1. 추가

export default defineConfig([
  globalIgnores(['dist']), 
  {
    files: ['**/*.{ts,tsx}'],
    // extends 내부의 규칙들을 펼쳐서 넣고, 마지막에 Prettier 설정을 넣습니다.
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules, // Flat config 구조에 따라 참조 방식이 다를 수 있음
      ...reactHooks.configs.recommended.rules,
      // ... 필요한 다른 규칙들
      ...eslintConfigPrettier.rules, // 2. 핵심: Prettier와 충돌하는 규칙들을 끕니다.
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  }, 
  ...storybook.configs["flat/recommended"]
])