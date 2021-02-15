const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const plugins = [
  new ProvidePlugin({
    React: 'react',
  }),
  new WebpackManifestPlugin({
    generate: (_seed, _files, { main }) => ({
      manifest_version: 2,
      name: 'yohoho-kinopoisk',
      version: '0.1',
      description: 'yohoho',
      content_scripts: [
        { matches: ['https://*.kinopoisk.ru/*'], js: main },
      ],
    }),
  }),
];
if (process.env.NODE_ENV === 'development') plugins.push(new HtmlWebpackPlugin());

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: { '~': resolve(__dirname, 'src') },
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
