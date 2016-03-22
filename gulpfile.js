'use strict';

var gulp = require('gulp');
var Server = require('karma').server;
var minify = require('gulp-minify');

/**
 * Run test once and exit
 */
gulp.task('test', function(done) {
	Server.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, function() {
		done();
	});
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
	Server.start({
		configFile: __dirname + '/karma.conf.js'
	}, function() {
		done();
	});
});

gulp.task('minify', function() {
	return gulp
		.src([
			'src/js/angular-filereader.js'
		])
		.pipe(minify())
		.pipe(gulp.dest(__dirname + '/dist'));
});

gulp.task('default', ['tdd']);