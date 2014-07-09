/**
 * build.js
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('build', 'Build a production ready version of your site.', [
        'clean:dist',
        'copy:dist',
        'concurrent:optimise',
        'exorcise:dist',
        'useminPrepare',
        'concat:generated',
        'usemin',
        'htmlmin:dist',
        'concurrent:uglify',
        'clean:temp'
    ]);
};