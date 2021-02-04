/**
 * @fileoverview eslint plugin demo
 * @author bowen-wu
 */
'use strict';

module.exports = {
    configs: {
        baseLint: require('../lib/configurations/eslintrc.base'),
        importLint: require('../lib/configurations/eslintrc.import'),
        reactLint: require('../lib/configurations/eslintrc.react'),
        vueLint: require('../lib/configurations/eslintrc.vue'),
        prettierLint: require('../lib/configurations/eslintrc.prettier'),
    }
};



