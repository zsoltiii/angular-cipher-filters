
module.exports = function(config) {
    'use strict';

    config.set({
        basePath: '../',
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'common/module.js',
            'src/**/*.js',
            'test/**/*.spec.js'
        ],
        port: 9876,
        colors: true,
        autoWatch: true,
        singleRun: false,
        plugins: [
          require('karma-jasmine'),
          require('karma-phantomjs-launcher')
        ],
        frameworks: ['jasmine'],
        reporters: ['progress'],
        browsers: ['PhantomJS', 'PhantomJS_flags'],
        captureTimeout: 60000,
        customLaunchers: {
          'PhantomJS_flags': {
            base: 'PhantomJS',
            flags: ['--load-images=false']
          }
        },
        phantomjsLauncher: {
          exitOnResourceError: true
        }
    });
};
