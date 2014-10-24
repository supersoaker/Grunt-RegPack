/*
 * grunt-regpack
 * https://github.com/mruescher/test
 *
 * Copyright (c) 2014 supersoaker
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    regpack: {
        minify: {
	        src: "src.js",
	        dest:"dest.js"
        }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');


  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'regpack', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['regpack']);

};
