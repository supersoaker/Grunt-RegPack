/*
 * grunt-regpack
 * https://github.com/supersoaker/Grunt-RegPack
 *
 * Copyright (c) 2014 supersoaker
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function(grunt) {
	var packer = require('./../lib/packer');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('regpack', 'A grunt module for minifying javascript files better than UglifyJs', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      globalVariables: ''
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(file) {

      // Concat specified files.
      var src = file.orig.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join("");

      // Write the destination file.

      grunt.file.write(file.dest, packer(src, options.globalVariables, '' ));

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
