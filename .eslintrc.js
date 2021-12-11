module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        jest: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        sourceType: 'module'
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    plugins: [
        'editorconfig',
        'promise',
        'import',
        'eslint-comments',
        'jest',
        'eslint-plugin-jest',
        'simple-import-sort',
        'eslint-plugin-unicorn',
        '@typescript-eslint'
    ],
    extends: [
        'plugin:editorconfig/all',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:promise/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:unicorn/recommended'
    ],
    rules: {
        'no-restricted-syntax': 'off',
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        // Use function hoisting to improve code readability
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            { allowExpressions: true, allowTypedFunctionExpressions: true }
        ],
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, classes: true, variables: true, typedefs: true }
        ],
        // Common abbreviations are known and readable
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true
                }
            }
        ]
    }
};
