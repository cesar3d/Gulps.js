var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync'),
	rename = require('gulp-rename');

var sourceJS = 'js/source/*.js';

gulp.task('scripts', function(){
	return gulp.src(sourceJS)
		.pipe(concat('todo.js'))
		.pipe(uglify())
		.pipe(rename('todo.min.js'))
		.pipe(gulp.dest('js/build'));
});

gulp.task('watch', function(){
	gulp.watch(sourceJS, ['scripts']);
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: './'
		},
		files: ['*.html', 'css/*.css'],
		open: false
	})
});

gulp.task('default',['scripts', 'watch', 'browser-sync']);