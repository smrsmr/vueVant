module.exports = {
  env: {
    development: {
      sourceMaps: true,
      retainLines: true
    }
  },
  presets: [
    [
      "@vue/app",
      {
        polyfills: ["es6.promise", "es6.symbol"],
        useBuiltIns: "entry"
      }
    ]
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true //上图中我是配置了定制主题的
      },
      "vant"
    ]
  ]
};
