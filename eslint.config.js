import antfu from '@antfu/eslint-config'

export default antfu(
  /* configures for antfu's config */
  {
    vue: true,
    pnpm: true,
    formatters: {
      css: true,
    },
    ignores: [
      'dist/**',
      '**/node_modules/**',
      'pnpm-workspace.yaml',
    ],
  },
  /* From the second arguments they are ESLint Flat Configs */
  {
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'no-unused-vars': [
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
  {
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/no-unused-vars': 'warn',
      'vue/max-attributes-per-line': 'error',
      'vue/html-self-closing': ['error', {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'warn',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'node/prefer-global/process': 'off',
      'ts/no-unused-vars': [
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
)
