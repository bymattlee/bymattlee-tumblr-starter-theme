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
gulp.task('watch', function() {

	browserSync.init({
		server: config.browserSync.server,
		open: false,
		middleware: function (req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			next();
		}
	});

	gulp.watch(config.styles.src, gulp.series('styles'));
	gulp.watch(config.scripts.src, gulp.series('scripts:main'));
	gulp.watch(config.images.src, gulp.series('images'));
	gulp.watch(config.svgs.src, gulp.series('svgs'));
	gulp.watch(config.copy.src, gulp.series('copy'));

});
