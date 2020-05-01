const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');

const faviconImage = path.resolve(__dirname, './project-logo.png');
const projectImage = path.resolve(__dirname, './project-logo.png');

const faviconPluginOptions = {
  logo: faviconImage,
  cache: true,
  inject: true,
  mode: 'webapp',
  devMode: 'webapp',
  prefix: 'favicon/',
  background: '#ffffff',
  theme_color: '#ffffff',
  favicons: {
    appName: 'CarRent',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      favicons: true,
      firefox: true,
      coast: true,
      windows: true,
      yandex: true,
    },
  },
};

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  pluginOptions: {
    notifier: {
      title: 'CarRent project',
      alwaysNotify: true,
      contentImage: projectImage,
    },
  },
  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin(faviconPluginOptions),
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('~', path.resolve(__dirname));
  },
};
