var gulp = require('gulp')
var nib = require('nib')
var stylus = require('gulp-stylus')
var browserify = require('browserify')
var babel = require('babelify')
var source = require('vinyl-source-stream')
var uglify = require('gulp-uglify')
var pump = require('pump')

gulp.task('stylus', function(){
	return gulp.src('assets/styles/style.styl')
		.pipe(stylus({
			use: nib(),
			compress: true,
			'include css': true,
		}))
		.pipe(gulp.dest('public/style/'))
})

gulp.task('images', function(){
	gulp
		.src('assets/images/*')
		.pipe(gulp.dest('public/images'))
})

gulp.task('build', function(){
	return browserify('src/index.js', {debug: true})
		.transform(babel, {presets: ['es2015'], plugins: ['syntax-async-functions', 'transform-regenerator']})
		.bundle()
		.pipe(source('index.js'))
		.pipe(gulp.dest('public/js'))
})

gulp.task('compress', function(){
	pump([
			gulp.src('public/js/index.js'),
			uglify(),
			gulp.dest('public/js/')
		]
	)
})

gulp.task('default', ['stylus', 'build', 'images', 'compress'])