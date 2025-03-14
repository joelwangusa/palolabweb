import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  // baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: ['eslint:recommended', 'next/core-web-vitals', "next/typescript",],
  }),
  {
    files: ['**/*.js', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      "@typescript-eslint/no-unused-vars": ["warn"],
      '@next/next/no-img-element': 'off', // Since we're using next/image in most places
    },
  },
];

export default eslintConfig;