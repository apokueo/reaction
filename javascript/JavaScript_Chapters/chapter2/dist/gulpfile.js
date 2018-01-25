const gulp = require('gulp');
	// Gulp  dependencies go here

gulp.task('default', function() {
	// Gulp tasks go here
});

const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('default', function() {
	// Node source
gulp.src("es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("dist"));
// browser source
gulp.src("public/es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("public/dist"));
})

const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
	// Run ESLint
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	// Node source
	gulp.src("es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));
	// browser source
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
});
