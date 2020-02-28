const webpack = require('webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: require('./plugins').concat([
    new webpack.DefinePlugin({
      __DEV__: false,
    }),
    new FilterWarningsPlugin({
      exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'Hoa An',
      filepath: path.resolve('./public/static/service-worker.js'),
      staticFileGlobs: ['static/**/*'],
      minify: true,
      staticFileGlobsIgnorePatterns: [/\.next\//],
      runtimeCaching: [
        {
          handler: 'fastest',
          urlPattern: /[.](png|jpg|css|webp)/,
        },
        {
          handler: 'networkFirst',
          urlPattern: /^http.*/,
        },
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'https-calls',
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    })
  ]),
  module: {
    rules: require('./loaders').concat([]),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 60000,
      cacheGroups: {
        polyfill: {
          test: /[\\/]project[\\/]polyfill/,
        },
      },
    },
  },
};
