import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
	...tseslint.configs.recommended,
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
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			quotes: ['off', 'single'],
			'no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_' }],
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],
			semi: 1,
			'react/jsx-no-target-blank': 'off',
			'no-shadow': 'off',
			'no-console': 'off',
			'linebreak-style': 'off',
			'object-curly-spacing': ['warn', 'always'],
			'object-curly-newline': 'off',
			'max-len': ['warn', { code: 120 }],
			'react/function-component-definition': 'off',
			'react/prop-types': 'off',
			'react/state-in-constructor': 'off',
			'react/react-in-jsx-scope': 'off',
			'import/extensions': 'off',
			'import/prefer-default-export': 'off',
			'react/jsx-filename-extension': 'off',
			'react/jsx-one-expression-per-line': 'off',
			'@typescript-eslint/no-unused-vars': 'off'
		}
	}
];
