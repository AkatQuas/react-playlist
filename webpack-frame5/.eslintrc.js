module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'semi': ['error', 'never'],
        'no-console': ['warn', { 'allow': ['log', 'info', 'error'] }],
        'no-unused-vars': 'off'
    }
}

