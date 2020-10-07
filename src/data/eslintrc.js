"use strict"

const eslintrc = `{
	"extends": [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"prettier",
		"prettier/react"
	],
	"rules": {
		"react/prop-types": 0,
		"no-console": 1,
		"react-hooks/rules-of-hooks": 2,
		"react-hooks/exhaustive-deps": 1
	},
	"plugins": [
		"react",
		"import",
		"jsx-a11y",
		"react-hooks"
	],
	"parserOptions": {
		"ecmaVersion": 2020,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"env": {
		"es6": true,
		"browser": true,
		"node": true
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
}
`

export default eslintrc
