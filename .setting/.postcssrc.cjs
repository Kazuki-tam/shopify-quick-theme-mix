module.exports = () => ({
  map: false,
  plugins: [
    require("autoprefixer"),
  ],
  autoprefixer: {
    browsers: "last 2 versions"
  },
})
