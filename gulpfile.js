const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

sass.compiler = require("node-sass");

gulp.task("sass:watch", function() {
  gulp.watch("./stylesheet/**/*.scss", gulp.series("sass"));
});

gulp.task("sass", function() {
  return gulp
    .src("./stylesheet/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./stylesheet/css"));
});

gulp.task("libs", function() {
  return gulp
    .src([
      "./node_modules/angular/angular.min.js",
      "./node_modules/angular-route/angular-route.min.js"
    ])
    .pipe(concat("lib.js"))
    .pipe(gulp.dest("./lib/"));
});

gulp.task("scripts", function() {
  return gulp
    .src(["./app/app.js", "./app/controller/*.js"])
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("./app/"));
});

gulp.task("build", gulp.series("sass", "libs", "scripts"));
