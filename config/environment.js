'use strict';

module.exports = function(environment) {

    let ENV = {

        modulePrefix: 'bamboo11',
        environment,
        rootURL: '/',
        locationType: 'auto',

        APP: {
            content: "http://localhost:9999/content/",
        },

        fastboot: {
            hostWhitelist: [/bamboo11/, /localhost/],
        },

    };

    ENV.contentSecurityPolicy = {
         'default-src': "'self'",
         'script-src': "'unsafe-inline' *",
         'frame-src': "'unsafe-inline' *",
         'font-src': "'self' data: *",
         'connect-src': "'self' *",
         'img-src': "'unsafe-inline' data: *",
         'style-src': "'unsafe-inline' *",
         'media-src': "'self'"
     };

     if (environment === 'production') {

         ENV.APP.content = "http://bamboo11.herokuapp.com/content/";

     }

     return ENV;

};
