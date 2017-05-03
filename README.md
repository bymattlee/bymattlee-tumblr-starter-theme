[![ByMattLee](http://hosted.bymattlee.com/github/bymattlee-logo.png)](http://bymattlee.com)

# ByMattLee Tumblr Starter Theme
* A starter Tumblr theme that includes base Tumblr template variables
* Theme is stripped down and does not contain any styles
* Uses Gulp as the build tool and Bower to manage front-end packages

## Installation
##### 1. Install Node: <https://nodejs.org/en/download/>
##### 2. Install all dependencies and build project
```
$ npm install
```
##### 3. Update Gulp Config
All Gulp settings can be found in `gulp/config.js`
##### 4. Enable Deployment
To enable deployment, create `hostSettings.json` and store in the `gulp` directory. This file should not be checked in as it contains sensitive information. Sample `hostSettings.json`:
```
{
	"staging": {
		"hostname": "X",
		"username": "X",
		"destination": "X"
	},
	"production": {
		"hostname": "X",
		"username": "X",
		"destination": "X"
	}
}
```

## Use
##### Initialize Gulp Watch
```
$ gulp watch
```
##### Development Build - Build Project With Local URL
```
$ gulp
```
##### Staging Build - Build Project And Remove Sourcemaps
```
$ gulp --staging
```
##### Production Build - Build Project And Remove Sourcemaps
```
$ gulp --production
```
##### Deploy `dist` Directory To Staging
```
$ gulp deploy --staging
```
##### Deploy `dist` Directory To Production
```
$ gulp deploy --production
```
##### Gzip `dist` Directory
```
$ gulp gzip
```

## General Features
* Spins up a local development environment through Browsersync. Useful when pointing the site assets to the local address (//localhost:3000) from the Tumblr theme for more efficient development
* Uses Modernizr to detect flexbox compatibility. If flexbox is not supported, a message will display asking the user to upgrade to latest version of the browser

##### Styles
* Includes linter (Stylelint), autoprefixer, minification and sourcemap creation
* SCSS files are located in `src/assets/scss`
* `main.scss` in `src/assets/scss` serves as the base that includes the other dependent SASS files
* `main.scss` gets compiled to `dist/assets/css/main.min.css`
* All vendor CSS are managed by Bower in `src/assets/vendors` and are compiled to `main.min.css`
* `.stylelintrc` contains the settings for Stylelint

##### Scripts
* Includes a custom Modernizr build (based on references in the .scss and .js files), linting (ESLint), concatenation, minification and sourcemap creation
* JS files located in the `src/assets/js` directory will be bundled into `dist/assets/js/main.min.js`
* `main.js` in `src/assets/js` serves as the main JS file that runs all modules
* All modules should be placed in `src/assets/js/modules` so they can be bundled in `main.min.js`
* All vendor JS are managed by Bower in `src/assets/vendors` and are bundled in `vendors.min.js`
* `.eslintrc` contains the settings for ESLint

##### Images
* Place all unoptimized images in the `src/assets/images` directory
* They will then be optimized and placed in `dist/assets/images`

##### SVGS
* Place all SVG files in the `src/assets/svg` directory
* They will then be optimized and added to a sprite at `dist/assets/svg/sprite.svg`

##### Other Assets
* All assets (fonts, videos, swfs, etc) under `src/assets` will be copied to `dist/assets` on build

##### Deploy
* Deploys the `dist` directory via SSH
* Use `--clean` flag to delete all files and directories that are not in the destination path

##### Gzip
* Creates a tarball of the `dist` directory and then runs through gzip
* Ideal for packaging up the files to be sent off

## References
* [ByMattLee Web Starter Files](https://github.com/bymattlee/bymattlee-web-starter-files)
* [Optica Theme](https://www.tumblr.com/theme/37310)
* [Tumblr Boilerplate 1](https://github.com/davesantos/tumblr-boilerplate)
* [Tumblr Boilerplate 2](https://github.com/hugovieilledent/tumblr-boilerplate)
* [Tumbleplate](https://github.com/justalever/tumbleplate)