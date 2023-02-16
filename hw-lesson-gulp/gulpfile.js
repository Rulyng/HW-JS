const {src, dest, parallel, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const minCss = require('gulp-clean-css');
const mode = require('gulp-mode')();

// const image = require('gulp-image'); не працює
const imagemin = require('gulp-imagemin');
const del = require('del');

//компілятор із SCSS(із src) в CSS в папку dist
function style () {
return src('./src/style/main.scss')
.pipe(sourcemaps.init())
.pipe(sass().on('error', sass.logError))  //аналог catch
.pipe(mode.production(minCss()))
.pipe(mode.development(sourcemaps.write()))
.pipe(dest('./dist'))
}

// всі файли html(із src)  в папку dist
function html(){
  return src('./src/**/*.html')
  .pipe(dest('./dist'))
}

// / всі js (із src) в папку dist
function js(){
  return src('./src/js/**/*.js')
  .pipe(dest('./dist/js'))
}

// всі img (із src) в img в папку dist ---- не працює????
function img(){
  return src('./src/img/**/*')
  .pipe(imagemin())
  .pipe(dest('./dist/img'))
}

function delet (){
  return del('./dist/*')
}


//якщо відбуваються зміни в файлі scss/html то запускай ф. style (оновлює css )
function watchAll(){
  watch('./src/style/**/*scss', style)
  watch('./src/**/*html', html)
  watch('./src/img/**/*', img)
  watch('./src/js/**/*.js', js)
}

exports.dev = parallel(delet, html, style, img, js, watchAll)
exports.build = parallel(delet, html, style, img, js)