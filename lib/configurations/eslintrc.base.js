module.exports = {
    plugins: ["bowenLint"],
    env: ["browser"],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
    }
}
