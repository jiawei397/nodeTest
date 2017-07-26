/**
 * Created by Administrator on 2017/7/26.
 */
var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();
  //proxy = require('http-proxy-middleware'); //代理中间件 the middleware of proxy

// gulp.task('es6', function () {
//     return gulp.src(['src/js/*.js'],{
//       base:'src'
//     })
//         .pipe($.babel({
//             // presets: ['es2015']
//             plugins: ['transform-runtime']
//         }))
//         .pipe(gulp.dest('dist'));
// });

//connect任务开启一个web调试服务，访问http://localhost:8080
// gulp.task('connect', function () {
//   $.connect.server({
//     root: "./dist",
//     port: 8080,
//     livereload: true,
//     middleware: function (connect, opt) {
//       return [
//         // https://github.com/senchalabs/connect/#use-middleware
//         function cors (req, res, next) {
//           res.setHeader('Access-Control-Allow-Origin', '*');
//           res.setHeader('Access-Control-Allow-Methods', '*');
//           next();
//         }
//       ];
//     }
//   });
// });
//allJs任务，执行合并js任务
// gulp.task('allJs', function () {
//   //合并数组中所有的js文件为all.js放入www文件夹中
//   return gulp.src(['Content/app/*/*.js', 'Content/common/*.js'])
//     .pipe(concat("all.js")) //该任务调用的模块
//     .pipe(gulp.dest("dist/js"))
//     .pipe(rename({suffix: '.min'})) //重命名
//     .pipe(uglify()) //压缩
//     .pipe(gulp.dest('dist/js')) //输出
//     .pipe(notify({message: "all task ok"})); //提示
// });

// //reload任务，在执行reload之前先执行allJs和sass任务
// gulp.task('reload', ['allJs'], function () {
//   //刷新web调试服务器
//   return gulp.src(['Content/app/'])
//     .pipe(connect.reload());
// });
//watch任务，开启一个监控
// gulp.task('watch', function () {
//   //监控数组中文件的修改，如果有修改则执行reload任务
//   gulp.watch(['Content/css/*.css', 'Content/app/app.js', 'Content/app/*/*.js', 'Views/*/*.html'], ['reload']);
// });

//定义默认的gulp任务，直接执行gulp即可启动default，启动default前启动connect和watch任务
// gulp.task('default', ['watch', 'connect', 'allJs']);
