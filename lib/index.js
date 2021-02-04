/**
 * @fileoverview eslint plugin demo
 * @author bowen-wu
 */
'use strict';

module.exports = {
    configs: {
        // Base Layer
        baseLint: require('../lib/configurations/eslintrc.base'),
        importLint: require('../lib/configurations/eslintrc.import'),

        // Frame Layer
        reactLint: require('../lib/configurations/eslintrc.react'),
        vueLint: require('../lib/configurations/eslintrc.vue'),

        // Typescript Layer
        tsLint: require('../lib/configurations/eslintrc.typescript.base'),

        // Adapt Layer
        prettierLint: require('../lib/configurations/eslintrc.prettier'),
    }
};



