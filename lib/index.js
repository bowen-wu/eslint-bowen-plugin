/**
 * @fileoverview eslint plugin demo
 * @author bowen-wu
 */
'use strict';

module.exports = {
    // Base Layer
    extends: [require('../lib/configurations/eslintrc.base'), require('../lib/configurations/eslintrc.import')],
    configs: {
        // Frame Layer
        reactLint: require('../lib/configurations/eslintrc.react'),
        vueLint: require('../lib/configurations/eslintrc.vue'),

        // Typescript Layer
        tsLint: require('../lib/configurations/eslintrc.typescript.base'),

        // Adapt Layer
        prettierLint: require('../lib/configurations/eslintrc.prettier')
    }
};



