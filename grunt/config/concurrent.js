/**
 * concurrent.js
 * Configuration for concurrent task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('concurrent', {
        optimise: [
            'newer:imagemin:dist',
            'newer:svgmin:dist',
            'jade:dist',
            'less:dist',
            'less:distPrint',
            'browserify:dist'
        ],
        uglify: ['uglify'],
        build: [
            'test',
            'build'
        ]
    });

    // grunt.loadNpmTasks('grunt-concurrent');
};