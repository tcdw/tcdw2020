module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'airbnb-base',
    ],
    rules: {
        indent: ['error', 4],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                ts: 'never',
            },
        ],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'prefer-destructuring': 'off',
        'no-continue': 'off',
        'no-constant-condition': 'off',
        'lines-between-class-members': 'off',
        'no-console': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js'],
            },
        },
    },
};
