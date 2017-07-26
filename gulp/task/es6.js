/**
 * Created by Administrator on 2017/7/7 0007.
 */
var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var $ = require('gulp-load-plugins')();

// add custom browserify options here
var customOpts = {
  entries: ['./es5/index.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
var entryArr = ['src/js/*.js'];

gulp.task('bundle', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle () {
  return b.bundle()
  // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
      // .pipe($.uglify({
    //     compress: {
    //         drop_console:true, //删除console
    //         drop_debugger: false//忽略debugger
    //     }
    // }))
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'))
      .pipe($.connect.reload());
}


function es6To5 (entryArr) {
  return gulp.src(entryArr)
    .pipe($.plumber())
    .pipe($.babel({
      // presets: ["es2015","stage-2"]
    }))
    .pipe(gulp.dest('es5/'));
}

gulp.task('es6', function () {
  return es6To5(entryArr);
});

gulp.task('server', function () {
    $.connect.server({
        root: "./dist",
        port: 8080,
        livereload: true,
        middleware: function (connect, opt) {
            return [
                // https://github.com/senchalabs/connect/#use-middleware
                function cors (req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Methods', '*');
                    next();
                }
            ];
        }
    });
});

gulp.task("default", function () {
  gulp.series('es6','bundle','server')();
  var jsWathcer = gulp.watch(entryArr);
  jsWathcer.on('change', function (path) {
    console.log(path);
    es6To5(path);
  });
});
