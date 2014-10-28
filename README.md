# grunt-regpack

> A grunt module for minifying javascript files better than UglifyJs
> Based on the packer from https://github.com/Siorki/RegPack

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-regpack --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-regpack');
```

## The "regpack" task

### Overview
In your project's Gruntfile, add a section named `regpack` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  regpack: {
    firstTask: {
	    options: {
	      globalVariables: '',
	      separator: ''
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
});
```

### Options

#### options.globalVariables
Type: `String`
Default value: `''`
Example: `'jQuery Angular AnotherFramework'`

A string value that is used to do define the variables which must not be modified.

#### options.separator
Type: `String`
Default value: `''`
Example: `';'`

A string value that is used separate the source files.

### Usage Examples

#### Custom Options
In this example, the files in that source array are going to be packed into the destination file "test/fw-min.js".
You can run each specific task with `grunt regpack:{{taskName}}`, in this example with `grunt regpack:firstTask`.

```js
grunt.initConfig({
  regpack: {
    firstTask: {
	    options: {
	      globalVariables: ''
	      separator: ''
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
});
```


## Release History
_(Nothing yet)_
