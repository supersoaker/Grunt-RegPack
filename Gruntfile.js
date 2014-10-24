/*
 * grunt-regpack
 * https://github.com/supersoaker/Grunt-RegPack
 *
 * Copyright (c) 2014 supersoaker
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    regpack: {
      //firstRun: {
      //  options: {
      //  },
      //  files: {
      //    'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
      //  }
      //},
      secondRun: {
        options: {
          globalVariables: ''
        },
        files: [
	        {
		        src: [
			        'test/fwTest/frameWreck.js',
			        'test/fwTest/fw-css.js',
			        'test/fwTest/fw-data.js',
			        'test/fwTest/fw-dom.js'
		        ],
		        dest: "test/fw-min.js"
	        }
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'regpack', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['regpack']);

};
