module.exports = {
  plugins: [
    require("precss"),
    require("tailwindcss")("./src/tailwind.js"),
    require("autoprefixer")
  ]
};
