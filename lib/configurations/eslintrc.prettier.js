module.exports = {
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended', 'prettier/flowtype', 'prettier/react'],
    rules: {
        'prettier/prettier': 'error'
    }
};
