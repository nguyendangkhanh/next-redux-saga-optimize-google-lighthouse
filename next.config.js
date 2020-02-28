const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
});
const path = require('path');
const _ = require('lodash');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withPlugins([
  withCSS(
    withSass({
      webpack: (config, { dev }) => {
        const base = dev ? require('./webpack/webpack.config.dev') : require('./webpack/webpack.config.prod');
        if (base.plugins) {
          config.plugins = config.plugins.concat(base.plugins);
        }

        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

        // const oldEntry = config.entry;
        // config.entry = () =>
        //   oldEntry().then(entry => {
        //     if (_.has(entry, 'main.js')) {
        //       entry['main.js'].push(path.resolve('./utils/offline'));
        //     }
        //     return entry;
        //   });

        // let testPattern = /\.(woff|woff2|eot|ttf|otf|svg)$/;
        // config.module.rules.push({
        //   test: testPattern,
        //   use: [
        //     {
        //       loader: require.resolve('url-loader'),
        //       options: {
        //         limit: 1,
        //         fallback: require.resolve('file-loader'),
        //         publicPath: `/_next/static/chunks/fonts/`,
        //         outputPath: `${!dev ? '../' : ''}static/chunks/fonts/`,
        //         name: '[name].[ext]',
        //       },
        //     },
        //   ],
        // });
        return config;
      },
    }),
  ),
  // [
  //   withBundleAnalyzer,
  //   {
  //     analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  //     analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  //     bundleAnalyzerConfig: {
  //       server: {
  //         analyzerMode: 'static',
  //         reportFilename: '../bundles/server.html',
  //       },
  //       browser: {
  //         analyzerMode: 'static',
  //         reportFilename: '../bundles/client.html',
  //       },
  //     },
  //   },
  // ],
  // [
  //   withOffline,
  //   {
  //     swDest: 'static/service-worker.js',
  //     runtimeCaching: [
  //       {
  //         urlPattern: /^https?.*/,
  //         handler: 'NetworkFirst',
  //         options: {
  //           cacheName: 'https-calls',
  //           networkTimeoutSeconds: 15,
  //           expiration: {
  //             maxEntries: 150,
  //             maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
  //           },
  //           cacheableResponse: {
  //             statuses: [0, 200],
  //           },
  //         },
  //       },
  //       {
  //         urlPattern: /[.](png|jpg|css|webp)/,
  //         handler: 'CacheFirst',
  //       },
  //       {
  //         urlPattern: /^https?.*/,
  //         handler: 'NetworkFirst',
  //         options: {
  //           cacheName: 'offlineCache',
  //           expiration: {
  //             maxEntries: 200,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // ],
  withFonts,
]);
