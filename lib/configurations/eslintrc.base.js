module.exports = {
    rules: {
        'no-console': ['error', {allow: ['warn', 'error']}],
        indent: ['error', 4],
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        'comma-dangle': ['error', 'never'],
        'object-curly-spacing': ['warn', 'never'],
        'no-use-before-define': 'off'
    }
};
