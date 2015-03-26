var gulp = require("gulp"),
    mocha = require("gulp-mocha"),
    jade = require("gulp-jade"),
    browserify = require("browserify"),
    connect = require("gulp-connect"),
    flatten = require("gulp-flatten"),
    source = require("vinyl-source-stream");

gulp.task("templates",function(){
    gulp.src("./app/**/*.jade")
        .pipe(jade({pretty:true}))
        .pipe(flatten())
        .pipe(connect.reload())
        .pipe(gulp.dest("./dist/"))
});

gulp.task("js",function(){
    browserify("./app/app.js",{debug:true,transform:['debowerify','uglifyify']}).bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./dist/scripts"));
});

gulp.task("unit-test",function(){
    gulp.src("./unit/*.js")
        .pipe(mocha({reporter:'spec'}))
});

gulp.task("watch",function(){
    gulp.watch("./app/**/*.js",["js"]);
    gulp.watch("./app/**/*.jade",["templates"])
});

gulp.task("serve",["build"],function(){
    connect.server({
        root:"./dist/",
        livereload:true,
        port:8080
    });
})

gulp.task("build",["templates","js"]);

gulp.task("default",["build","watch"]);