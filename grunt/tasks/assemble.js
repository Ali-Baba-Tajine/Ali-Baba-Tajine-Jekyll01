/**
 * assemble.js
 * Starts up a development server that watches for local file changes and automatically reloads them to the browser.
 */
'use strict';

module.exports = function (grunt) {
    grunt.registerTask('serve', 'test assemble task', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'assemble:server',
            'watch'
        ]);
    });
};