const path = require('path');

module.exports = {
    root: true,
    extends: [
        'expo',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/stylistic',
        'plugin:typescript-enum/recommended',
    ],
    plugins: ['react-native', 'check-file', 'no-relative-import-paths'],
    rules: {
        curly: ['error', 'all'],
        'no-console': 2,
        'no-var': 2,
        'prefer-const': 2,
        'prettier/prettier': 0,
        'react/display-name': 'off',
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 0,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        'import/order': 'off',
        'import/no-unresolved': [
            'error',
            {
                ignore: ['geojson'],
            },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/no-require-imports': [
            'error',
            {
                allow: ['^@\\/assets\\/', '^./.storybook$', '^react-native-keyboard-controller/jest$'],
            },
        ],
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_', // Ignore unused arguments
                destructuredArrayIgnorePattern: '^_', // Ignore unused destructured arrays
            },
        ],
        '@typescript-eslint/no-misused-promises': [
            2,
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
        'check-file/filename-naming-convention': [
            'error',
            {
                '**/hooks/*.{jsx,tsx}': 'CAMEL_CASE',
                '**/!(hooks|utils)/*.{jsx,tsx}': 'PASCAL_CASE',
                '**/*.{js,ts}': 'CAMEL_CASE',
                '**/screens/*.{jsx,tsx}': '([a-zA-Z])+Screen',
            },
            { ignoreMiddleExtensions: true },
        ],
        'check-file/folder-naming-convention': [
            'error',
            {
                'src/**/': 'CAMEL_CASE',
            },
        ],
        'no-relative-import-paths/no-relative-import-paths': ['error'],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'Property[key.name="lineHeight"]',
                message:
                    'property "lineHeight" should not be change outside the Text component file. ' +
                    'It can lead to cropped text for some characters (pygqz..).' +
                    'Better defined a new fontPresets in izivia.ts file.',
            },
        ],
    },
    overrides: [
        {
            // be careful about not writing conflicting 'no-restricted-imports' rules here
            // (there can be only one 'no-restricted-imports' per files or the last declaration will override)
            files: ['src/common/ui/**/*.tsx'],
            excludedFiles: ['src/**/*.test.{ts,tsx}'],
            rules: {
                'no-restricted-imports': [
                    'error',
                    {
                        paths: [
                            {
                                name: '@/common/ui',
                                message:
                                    'Import from @/common/ui is not allowed in ui folder to avoid cyclic dependencies. Please use full path instead. E.g. import { Button } from "@/common/ui/button/Button";',
                            },
                        ],
                    },
                ],
            },
        },
        {
            // be careful about not writing conflicting 'no-restricted-imports' rules here
            // (there can be only one 'no-restricted-imports' per files or the last declaration will override)
            files: ['src/**/*.{ts,tsx}'],
            excludedFiles: [
                'src/common/ui/**/*.tsx',
                'src/common/utils/dates.ts',
                'src/common/utils/duration.ts',
                'src/**/*.test.{ts,tsx}',
            ],
            rules: {
                'no-restricted-imports': [
                    'error',
                    {
                        paths: [
                            {
                                name: 'date-fns',
                                message: 'Please add a wrapper function to "common/utils/dates.ts" instead.',
                            },
                        ],
                    },
                ],
            },
        },
        {
            // be careful about not writing conflicting 'no-restricted-imports' rules here
            // (there can be only one 'no-restricted-imports' per files or the last declaration will override)
            files: ['src/**/*.test.{ts,tsx}'],
            excludedFiles: ['src/common/ui/**/*.tsx', 'src/common/utils/dates.ts'],
            rules: {
                'no-restricted-imports': [
                    'error',
                    {
                        paths: [
                            {
                                name: '@testing-library/react-native',
                                // Motivation: https://testing-library.com/docs/react-native-testing-library/setup/#custom-render
                                message:
                                    "Import from @testing-library/react-native is not allowed for encapsulation purposes. Use tests.tsx instead. E.g. import { render } from '@/common/utils/tests'",
                            },
                        ],
                    },
                ],
                'testing-library/prefer-find-by': 'off',
                'testing-library/no-debugging-utils': 'off',
            },
            extends: ['plugin:testing-library/react'],
        },
        {
            files: ['src/locales/*.json'],
            extends: ['plugin:i18n-json/recommended'],
            rules: {
                'i18n-json/valid-message-syntax': [
                    'error',
                    {
                        syntax: 'non-empty-string',
                    },
                ],
                'i18n-json/valid-json': 2,
                'i18n-json/sorted-keys': [
                    2,
                    {
                        order: 'asc',
                        indentSpaces: 4,
                    },
                ],
                'i18n-json/identical-keys': [
                    2,
                    {
                        filePath: path.resolve('./src/locales/en.json'),
                    },
                ],
                'prettier/prettier': [
                    0,
                    {
                        singleQuote: true,
                        endOfLine: 'auto',
                        tabWidth: 4,
                    },
                ],
                '@typescript-eslint/no-unused-expressions': 'off',
            },
        },
        {
            files: ['**/Text.tsx', '**/theme.ts', '**/izivia.ts'],
            rules: {
                'no-restricted-syntax': 'off',
            },
        },
    ],
    ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'metro.config.js', 'plugins/*', '*.app/*', '.expo/'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
};
