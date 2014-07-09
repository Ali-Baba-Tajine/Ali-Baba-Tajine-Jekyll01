/**
 * diene.js
 * Starts up a development server that watches for local file changes and automatically reloads them to the browser.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('diene', 'Open a development server within your browser with assemble-handlebars', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'copy:server',
            'jshint:test',
            'browserify:server',
            'exorcise:server',
            'assemble:server',
            'less:server',
            'less:serverPrint',
            'clean:temp',
            'connect:livereload',
            'watch'
        ]);
    });
};