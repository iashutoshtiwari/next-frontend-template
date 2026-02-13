import { fixupPluginRules } from '@eslint/compat'
import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import prettierConfig from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import ts from 'typescript-eslint'

export default ts.config(
  // 1. GLOBAL IGNORES
  {
    ignores: [
      '.next/*',
      'out/*',
      'build/*',
      'dist/*',
      'node_modules/*',
      '*.config.js',
      '*.config.mjs',
    ],
  },

  // 2. BASE CONFIGS
  js.configs.recommended,
  ...ts.configs.recommended,

  // 3. REACT (Native Flat Config Support)
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],
    settings: {
      react: { version: 'detect' },
    },
  },

  // 4. REACT HOOKS (Patched for Flat Config)
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      'react-hooks': fixupPluginRules(hooksPlugin),
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
    },
  },

  // 5. NEXT.JS (Manual Rules Injection)
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // Relax Next.js specific strictness if needed
      '@next/next/no-html-link-for-pages': 'off',
    },
  },

  // 6. "ZEN MODE" STRICTNESS (Your Custom Rules)
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      // Import Sorting
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^next'],
            ['^@?\\w'],
            ['^@/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(css|scss|sass|less)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Clean Code
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  // 7. PRETTIER (Must be last to override formatting rules)
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
)
