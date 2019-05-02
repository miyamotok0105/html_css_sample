var gulp = require('gulp');

var htmlhint = require("gulp-htmlhint");
gulp.task('html', function() {
    gulp.src('files/temp/*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter());
});

var csslint = require('gulp-csslint');
gulp.task('css', function() {
    gulp.src('files/temp/*.css')
        .pipe(csslint({
            "adjoining-classes": false,
            "box-model": false,
            "box-sizing": false,
            "bulletproof-font-face": false,
            "compatible-vendor-prefixes": false,
            "empty-rules": false,
            "display-property-grouping": false,
            "duplicate-background-images": false,
            "duplicate-properties": false,
            "fallback-colors": false,
            "floats": false,
            "font-faces": false,
            "font-sizes": false,
            "gradients": false,
            "ids": false,
            "import": false,
            "important": false,
            "known-properties": false,
            "outline-none": false,
            "overqualified-elements": false,
            "qualified-headings": false,
            "regex-selectors": false,
            "shorthand": false,
            "star-property-hack": false,
            "text-indent": false,
            "underscore-property-hack": false,
            "unique-headings": false,
            "universal-selector": false,
            "unqualified-attributes": false,
            "vendor-prefix": false,
            "zero-units": false
        }))
        // .pipe(csslint.reporter());
        .pipe(csslint.formatter("compact"));
});

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
gulp.task('browser', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        reloadOnRestart: true
    });

    //ここは　ちゃんとフォルダまで指定しないと動かないよ。
    // .**.htmlはダメだよ。
    // gulp.watch(".**.html").on("change", reload);
    // gulp.watch(".**.css").on("change", reload);
    gulp.watch("files/temp/*.html").on("change", reload);
    gulp.watch("files/temp/*.css").on("change", reload);
    gulp.watch("files/ch01/*.html").on("change", reload);
    gulp.watch("files/ch01/*.css").on("change", reload);
    gulp.watch("files/ch02/*.html").on("change", reload);
    gulp.watch("files/ch02/*.css").on("change", reload);
    gulp.watch("files/ch03/*.html").on("change", reload);
    gulp.watch("files/ch03/*.css").on("change", reload);
    gulp.watch("files/ch04/*.html").on("change", reload);
    gulp.watch("files/ch04/*.css").on("change", reload);
});


//下の書き方もダメ。2回目以降動かない。
// var browserSync = require("browser-sync");
// gulp.task("browser", function () {
//     browserSync({
//         server: {
//             baseDir: "./"
//         }
//     });

//     gulp.watch("files/*.html", function() { browserSync.reload(); });
//     gulp.watch("files/*.css", function() { browserSync.reload(); });
// });
