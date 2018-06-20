// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential', 'airbnb-base'],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    rules: {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        'linebreak-style': 'off',
        'no-trailing-spaces': 'off',
        'indent': 'off',
        'vue/script-indent': "off",
        "no-unused-vars":'off',
        "no-console":'off',
        "no-alert":'off',
        "no-param-reassign":'off',
        "max-len":'off',
        "no-case-declarations":'off',
        "consistent-return":'off',
        // "no-tabs":'off',
        "no-mixed-spaces-and-tabs":'off',
        "no-plusplus":'off',
        "object-shorthand":'off',
        "prefer-const":'off',
        "no-var":'off',
    }
};
