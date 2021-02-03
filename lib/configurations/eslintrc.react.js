module.exports = {
    plugins: ['react'],
    extends: [
        'plugin:react/recommended',
    ],
    rules: {
        'react/jsx-filename-extension': [
            'warn',
            {extensions: ['.js', '.jsx']}
        ],
        'react/jsx-indent-props': ['off', 'tab'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'allow',
                afterOpening: 'never',
                beforeClosing: 'allow'
            }
        ]
    }
};
