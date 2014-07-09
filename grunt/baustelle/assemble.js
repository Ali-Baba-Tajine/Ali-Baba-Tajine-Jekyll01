/**
 * assemble.js
 * Configuration for Assemble task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('assemble', {
        server: {
            options: {
                    flatten: true,
                    production: false,
                    assets: '<%= site.assets %>',
                    postprocess: require('pretty'),
            
             
            
                    // Templates
                    partials: '<%= site.includes %>',
                    layoutdir: '<%= site.layouts %>',
                    layout: '<%= site.layout %>',
            
                    // Extensions
                    helpers: '<%= site.helpers %>',
                    plugins: '<%= site.plugins %>'
                  },
                  example: {
                    files: {'<%= site.dest %>/': ['<%= site.templates %>/*.hbs']}
                  }
                  },
            
        dist: {
            options: {
                    flatten: true,
                    production: false,
                    assets: '<%= site.assets %>',
                    postprocess: require('pretty'),
            
             
            
                    // Templates
                    partials: '<%= site.includes %>',
                    layoutdir: '<%= site.layouts %>',
                    layout: '<%= site.layout %>',
            
                    // Extensions
                    helpers: '<%= site.helpers %>',
                    plugins: '<%= site.plugins %>'
                  },
                  example: {
                    files: {'<%= site.dest %>/': ['<%= site.templates %>/*.hbs']}
                  }

    // grunt.loadNpmTasks('assemble');
};

 