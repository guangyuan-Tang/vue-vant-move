const Autoprefixer = require("autoprefixer");
const Pxtorem = require('postcss-pxtorem');
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const Path = require("path");
const Resolve = dir => Path.resolve(__dirname, dir);

const IsPro = process.env.NODE_ENV === "production";
const Timestamp = new Date().getTime();

// 以下文件作为外部依赖单独引入
const Externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  vant: 'vant',
  axios: 'axios',
}

const CDN = {
  pro: {
    css: ["./css/vant.css"],
    js: [
      "./js/vue.min.js",
      "./js/vuex.min.js",
      "./js/vant.min.js",
      "./js/axios.min.js",
      "./js/vue-router.min.js",
    ]
  },
  dev: {
    css: [],
    js: []
  }
};


module.exports = {
  // 基本路径
  // baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 输出文件目录
  outputDir: 'dist', // 默认dist
  // 用于嵌套生成的静态资产（js,css,img,fonts）目录
  // assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath: 'index.html', // Default: 'index.html'
  filenameHashing: true,
  // 构建多页时使用
  pages: undefined,
  // eslint-loader是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  configureWebpack: config => {
    let plugins = [];

    // 为生产环境修改配置...
    if (IsPro) {

      // 开启 Gzip 压缩
      plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(js|css)$/,
          // 只处理大于xx字节 的文件，默认：0
          threshold: 10240,
          // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
          minRatio: 0.8, // 默认: 0.8
          // 是否删除源文件，默认: false
          deleteOriginalAssets: false
        })
      );
    }

    config.plugins = [...config.plugins, ...plugins];
  },
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {

    config.plugin("html").tap(args => {
      if (IsPro) {
        args[0].cdn = CDN.pro;
      } else {
        args[0].cdn = CDN.dev;
      }
      return args;
    });

    // 热更新
    config.resolve.symlinks(true);


    if (IsPro) {
      // 启用压缩
      config.optimization.minimize(true);

      // 分割代码
      config.optimization.splitChunks({
        chunks: "all"
      });
      
      // externals里的模块不打包
      config.externals(Externals);
    }

  },
  // css相关配置
  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用css分离插件
    extract: IsPro,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          Autoprefixer(),
          Pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['van-circle__layer']
          })
        ]
      }
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    proxy: null, // 设置代理
    before: app => {},
  },
  // PWA 插件相关配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
  // ...
  }
}