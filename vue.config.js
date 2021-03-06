const path = require("path");
/**
 * 去除生产环境console.log()
 * 压缩js 和 css
 */
// eslint-disable-next-line no-unused-vars
const CompressionWebpackPlugin = require("compression-webpack-plugin");
// eslint-disable-next-line no-unused-vars
const productionGzipExtensions = ["js", "css"];

function resolve(dir) {
  return path.join(__dirname, dir);
}
let env = process.env.NODE_ENV;
module.exports = {
  lintOnSave: undefined,
  // 基本路径
  publicPath: env === "production" ? "./" : "",
  //设置打包之后是否打包.map文件
  productionSourceMap: env === "production" ? false : true,
  // 输出文件目录
  outputDir: "dist",
  configureWebpack: config => {
    config.resolve = {
      extensions: [".js", ".vue", ".json", ".css"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src")
      }
    };
    /* if (env==="production") {
			config.plugins.push(new CompressionWebpackPlugin({
					algorithm: 'gzip',
					test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
					threshold: 10240,
					minRatio: 0.8
				})
			)
		} */
    // webpack-dev-server 相关配置
    config.devServer = {
      port: 8081
    };
  }
};
