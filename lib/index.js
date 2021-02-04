/**
 * @fileoverview eslint plugin demo
 * @author bowen-wu
 */
'use strict';

module.exports = {
    configs: {
        baseLint: require('../lib/configurations/eslintrc.base'),
        reactLint: require('../lib/configurations/eslintrc.react'),
        importLint: require('../lib/configurations/eslintrc.import'),
        prettierLint: require('../lib/configurations/eslintrc.prettier'),
    }
};



