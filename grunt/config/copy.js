/**
 * copy.js
 * Configuration for copy task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('copy', {
        server: {
            files: [{
                expand: true,
                cwd: '<%= yeogurt.dev %>/',
                dest: '<%= yeogurt.server %>/',
                src: [
                    'scripts/{,*/}{,*/}*.js',
                    '!scripts/app.js',
                    '!scripts/main.js'
                ]
            },{
                expand: true,
                cwd: '<%= yeogurt.dev %>/',
                dest: '<%= yeogurt.server %>/',
                src: [
                    'images/**'
                ]
            }, {
                expand: true,
                cwd: '<%= yeogurt.dev %>/',
                dest: '<%= yeogurt.server %>/',
                src: [
                    'bower_components/**/*.js',
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',
                    'bower_components/jquery/*.map'
                ]
            },]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeogurt.dev %>/',
                dest: '<%= yeogurt.dist %>/',
                src: [
                    
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/{,*/}{,*/}*.{woff,otf,ttf,eot,svg}',
                    'bower_components/jquery/jquery.min.*'
                ]
            },{
                expand: true,
                cwd: '<%= yeogurt.dev %>/scripts',
                dest: '<%= yeogurt.dist %>/scripts',
                src: [
                    'scripts/modules/inline-*.*', '!*.js'
                ]
            }, {
                expand: true,
                cwd: '<%= yeogurt.dev %>/',
                dest: '<%= yeogurt.dist %>/',
                src: [
                    '*.{ico,png,txt,html}',
                    '.htaccess',
                    'images/{,*/}*.{webp}',
                    'styles/fonts/{,*/}*.*'
                ]
            }]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-copy');
};