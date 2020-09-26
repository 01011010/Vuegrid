// https://github.com/michael-ciniawsky/postcss-load-config
/*
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    "tailwindcss": {'./src/tailwind.js'},
  }
};
*/

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("postcss-url")(),
    require("tailwindcss")("./src/tailwind.js")
    require("autoprefixer")(),
  ]
};
