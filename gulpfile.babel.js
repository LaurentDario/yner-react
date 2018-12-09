'use strict'

import gulp from 'gulp'
import connect from 'gulp-connect' //Runs a local dev server
import history from 'connect-history-api-fallback'
import open from 'gulp-open' //Opens the web browser
import browserify from 'browserify' //Bundles JS
import babelify from 'babelify' //Transforms React JSX to JS
import source from 'vinyl-source-stream' //Uses conventional text streams with Gulp
import concat from 'gulp-concat' //Concatenates files
import lint from 'gulp-eslint' //Lint JS files, including JSX
import { gzip } from 'zlib';

const config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    mainJs: './src/main.js',
    images: './src/images/*',
    css: [
      './src/css/*.css',
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    dist: './dist'
  }
}

//Start a local dev server
gulp.task('connect', () => {
  connect
  .server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true,
    middleware: function(connect, opt) {
      return [
        history({})
      ]
    }
  })
})

gulp.task('open', ['connect'], () => {
  gulp.src('dist/index.html')
    .pipe(open({ uri: `${config.devBaseUrl}:${config.port}/` }))
})

gulp.task('html', () => {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
})

gulp.task('js', () => {
  browserify(config.paths.mainJs)
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(`${config.paths.dist}/scripts`))
    .pipe(connect.reload())
})

gulp.task('css', () => {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(`${config.paths.dist}/css`))
})

gulp.task('images', () => {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(`${config.paths.dist}/images`))
    .pipe(connect.reload())
  
  gulp.src('./src/favicon.jpg')
    .pipe(gulp.dest(config.paths.dist))
})

gulp.task('watch', () => {
  gulp.watch(config.paths.html, ['html']),
  gulp.watch(config.paths.mainJs, ['js', 'lint'])
})

gulp.task('lint', () =>
	gulp.src(config.paths.js)
		.pipe(lint({configFile: 'eslint.config.json'}))
		.pipe(lint.format())
)


gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch'])