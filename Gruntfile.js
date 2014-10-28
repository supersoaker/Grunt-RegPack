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
    regpack: {
      firstTask: {
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
    }
  });


  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, run regpack.
  grunt.registerTask('default', ['regpack']);

};
