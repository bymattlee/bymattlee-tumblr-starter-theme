/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Watch
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var browserSync = require('browser-sync'),
	config = require('../config'),
	gulp = require('gulp'),
	watch = require('gulp-watch');

/*
** -- Initialize BrowserSync
** -- Initialize watch for styles, scripts, images, svgs and asset files
** -- Force browser reload when changes are made to images, svgs and asset files
*/
gulp.task('watch', ['browserSync'], function() {

	gulp.watch(config.styles.src, ['styles']);
	gulp.watch(config.scripts.src, ['scripts:main']);
	gulp.watch(config.images.src, ['images']);
	gulp.watch(config.svgs.src, ['svgs']);
	gulp.watch(config.copy.src, ['copy']);

});
