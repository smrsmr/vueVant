module.exports = {
  plugins: {
    autoprefixer: {
      Browserslist: [
        "> 1%",
        "last 2 versions",
        "not ie <= 8",
        "ios >= 8",
        "android >= 4.0"
      ]
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"]
    }
  }
};
