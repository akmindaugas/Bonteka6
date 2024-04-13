const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return src("style/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("style"));
}

function watchFiles() {
  watch("style/**/*.scss", compileSass);
}

exports.default = watchFiles;
