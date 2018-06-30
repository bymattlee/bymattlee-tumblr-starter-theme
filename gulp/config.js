/* ***** ----------------------------------------------- ***** **
/* ***** Gulp Config
/* ***** ----------------------------------------------- ***** */

// Global variables
var src = 'src',
	dest = 'dist', 
	srcAssets = src + '/assets',
	destAssets = dest + '/assets',
	timestamp = Math.floor(Date.now() / 1000);

// Contains all main configurations for Gulp
module.exports = {
	fileHeader: [
		'/*',
		'**',
		'**',
		'**',
		'**',
		'**',
		'**              {{ @bymattlee }}',
		'**              {{ bymattlee.com }}',
		'**              {{ creative_developer }}',
		'**',
		'**',
		'**',
		'**',
		'**',
		'*/\n'
	],
	styles: {
		src: srcAssets + '/scss/**/*.scss',
		dest: destAssets + '/css'
	},
	scripts: {
		src: [
			srcAssets + '/js/define.js',
			srcAssets + '/js/modules/**/*.js',
			srcAssets + '/js/main.js'
		],
		srcVendors: srcAssets + '/js/vendors/*.js',
		dest:  destAssets + '/js',
		modernizr: {
			src: [
				srcAssets + '/scss/**/*',
				srcAssets + '/js/**/*',
			],
			options: {
				'options' : [
					'setClasses'
				]
			}
		}
	},
	images: {
		src: srcAssets + '/images/**/*',
		dest:  destAssets + '/images'
	},
	svgs: {
		src: srcAssets + '/svgs/*.svg',
		dest:  destAssets + '/svgs',
		sprite: 'sprite.svg'
	},
	copy: {
		src: [
			srcAssets + '/**/*.+(eot|svg|ttf|woff|woff2|swf|mp4|mp3)',
			'!' + srcAssets + '/svgs/*.svg',
			'!' + srcAssets + '/vendors/**/*'
		],
		dest:  destAssets
	},
	clean: {
		dest:  dest
	},
	browserSync: {
		server: './' + dest
	},
	deploy: {
		src: dest + '/',
		root: dest,
		exclude: [
			srcAssets + '/vendors/**/*'
		]
	},
	gzip: {
		src: dest + '/**/*',
		dest: './',
		filename: 'Project.Assets.' + timestamp + '.tar'
	}
};
