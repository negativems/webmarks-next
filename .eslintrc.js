module.exports = {
   env: {
      browser: true,
      es2021: true
   },
   extends: [
      'next/core-web-vitals',
      'standard-with-typescript'
   ],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json'
   },
   plugins: [
      'react'
   ],
   rules: {
      indent: ['error', 3],
      semi: ['error', 'always'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/indent': ['error', 3],
      '@typescript-eslint/space-before-function-paren': ['error', 'never'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off'
   }
};
