// eslint.config.js
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import tsParser from '@typescript-eslint/parser';

export default [
	stylistic.configs['recommended-flat'],
	{
		name: 'stylistic',
		plugins: {
			'@stylistic': stylistic,
			'@stylistic/ts': stylisticTs,
			'@stylistic/jsx': stylisticJsx,
		},
		languageOptions: {
			parser: tsParser,
		},
		rules: {
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/jsx-indent-props': [1, 'tab'],
			'@stylistic/jsx-indent': [1, 'tab'],
			'@stylistic/indent-binary-ops': [1, 'tab'],
			'@stylistic/semi': [1, 'always'],
			'@stylistic/arrow-parens': [1, 'as-needed'],
			'@stylistic/brace-style': [1, '1tbs', { allowSingleLine: false }],
			'@stylistic/quote-props': [1, 'as-needed'],
			'@stylistic/member-delimiter-style': 0,
			'@stylistic/jsx-first-prop-new-line': 0,
			'@stylistic/jsx-one-expression-per-line': 0,
			'@stylistic/max-statements-per-line': 0,
			'@stylistic/multiline-ternary': 0,
			'@stylistic/no-tabs': 0,
		},
		files: ['src/**/*.{ts,tsx}', 'eslint.config.js'],
	},
	{
		ignores: [
			'dist/',
			'node_modules/',
		],
	},
];
