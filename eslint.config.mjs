import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
	{ ignores: ['dist'] },
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser
			},
			parser: typescriptParser
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		rules: {
			...eslint.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			quotes: [0, 'single'],
			'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],
			semi: 1,
			'react/jsx-no-target-blank': 'off',
			'no-shadow': 0,
			'no-console': 0,
			'linebreak-style': 0,
			'object-curly-spacing': [1, 'always'],
			'object-curly-newline': 0,
			'max-len': [1, { code: 120 }],
			'react/function-component-definition': 0,
			'react/prop-types': 0,
			'react/state-in-constructor': 0,
			'react/react-in-jsx-scope': 0,
			'import/extensions': 0,
			'import/prefer-default-export': 0,
			'react/jsx-filename-extension': 0,
			'react/jsx-one-expression-per-line': 0,
			'@typescript-eslint/no-unused-vars': 0
		}
	}
];
