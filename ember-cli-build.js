'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {

    var app = new EmberApp(defaults, {

        autoprefixer: {
            browsers: ['last 2 versions']
        },

        'ember-cli-babel': {
            includePolyfill: true
        },

        prember: {
            urls: [
              '/',
            ]
        },

    });

    return app.toTree();

};
