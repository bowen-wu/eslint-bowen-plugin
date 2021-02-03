/**
 * @fileoverview eslint plugin demo
 * @author bowen-wu
 */
'use strict';

module.exports = {
    configs: {
        baseLint: require('../lib/configurations/eslintrc.base'),
        reactLint: require('../lib/configurations/eslintrc.react'),
        airbnbLint: {
            extends: ['airbnb']
        }
    }
};



