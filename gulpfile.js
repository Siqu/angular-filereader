'use strict';

var gulp = require('gulp');
var Server = require('karma').server;
var minify = require('gulp-uglify');
var concat = require('gulp-concat');

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

gulp.task('concat', function () {
	return gulp
		.src([
			'src/js/angular-filereader.js',
			'src/js/file-reader.factory.js'
		])
		.pipe(concat('angular-filereader.js'))
		.pipe(gulp.dest(__dirname + '/dist'));
});

gulp.task('minify', function() {
	return gulp
		.src([
			'src/js/angular-filereader.js',
			'src/js/file-reader.factory.js'
		])
		.pipe(minify())
		.pipe(concat('angular-filereader.min.js'))
		.pipe(gulp.dest(__dirname + '/dist'));
});

gulp.task('default', ['tdd']);

gulp.task('build', ['concat', 'minify']);