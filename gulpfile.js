// Generated by CoffeeScript 2.0.0-beta3

/* Gulp File by Ivan Vinogradov */
var coffee, gulp, mincss, minjs, rename, stylus;

gulp = require('gulp');

stylus = require('gulp-stylus');

coffee = require('gulp-coffeescript');

mincss = require('gulp-csso');

minjs = require('gulp-uglify');

rename = require('gulp-rename');

gulp.task('minjs', function() {
  gulp.src('./public/script.js').pipe(minjs()).on('error', function(err) {
    console.error('\n\n\n*** JS Compress Error occurred *** \n\n\n');
    console.log(err);
    return console.error('\n\n\n*** JS Compress Error backtrace ended *** \n\n\n');
  }).pipe(rename(function(file) {
    return file.basename += '.min';
  })).pipe(gulp.dest('./public'));
  return console.log("----===**  Compressing JS file  **===----");
});

gulp.task('mincss', function() {
  gulp.src('./public/stylesheet.css').pipe(mincss()).on('error', function(err) {
    console.error('\n\n\n*** CSS Compress Error occurred *** \n\n\n');
    console.log(err);
    return console.error('\n\n\n*** CSS Compress Error backtrace ended *** \n\n\n');
  }).pipe(rename(function(file) {
    return file.basename += '.min';
  })).pipe(gulp.dest('./public'));
  return console.log("----===**  Compressing CSS file  **===----");
});

gulp.task('coffee', function() {
  gulp.src('./source/script.coffee').pipe(coffee()).on('error', function(err) {
    console.error('\n\n*** COFFEE Compile Error occurred *** \n\n');
    console.log(err);
    return console.error('\n\n*** COFFEE Compile Error backtrace ended *** \n\n');
  }).pipe(gulp.dest('./public'));
  console.log("----===**  Compiling COFFEE file  **===----");
  return gulp.start('minjs');
});

gulp.task('stylus', function() {
  gulp.src('./source/stylesheet.styl').pipe(stylus()).on('error', function(err) {
    console.error('\n\n\n*** STYLUS Compile Error occurred *** \n\n\n');
    console.log(err);
    return console.error('\n\n\n*** STYLUS Compile Error backtrace ended *** \n\n\n');
  }).pipe(gulp.dest('./public'));
  console.log("----===**  Compiling STYLUS file  **===----");
  return gulp.start('mincss');
});

gulp.task('coffee:watch', function() {
  gulp.watch('./source/script.coffee', ['coffee']);
  return console.log("----===**  Watching to COFFEE file  **===----");
});

gulp.task('stylus:watch', function() {
  gulp.watch('./source/stylesheet.styl', ['stylus']);
  return console.log("----===**  Watching to STYLUS file  **===----");
});

gulp.task('minjs:watch', function() {
  gulp.watch('./public/script.js', ['minjs']);
  return console.log("----===** Watching to JS file **===----");
});

gulp.task('mincss:watch', function() {
  gulp.watch('./public/stylesheet.css', ['mincss']);
  return console.log("----===** Watching to CSS file **===----");
});

gulp.task('watch', function() {
  gulp.start('coffee:watch');
  gulp.start('stylus:watch');
  return console.log("----===**  WATCHING IS STARTED  **===----");
});

gulp.task('default', function() {
  gulp.start('watch');
  return console.log("----===**  DEFAULT TASK IS STARTED  **===----");
});
