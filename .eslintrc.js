module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        jest: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
        createDefaultProgram: true,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'promise', 'unicorn'],
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jest/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    rules: {
        // indent: ["error", 4],
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
