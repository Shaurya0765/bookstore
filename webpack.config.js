const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // Use [name] to differentiate chunks
    chunkFilename: '[name].[contenthash].js', // Ensure dynamic imports are handled correctly
    clean: true, // Clean the output directory before each build
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolving JavaScript and JSX files
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // For .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // For CSS files
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // For image files
        type: 'asset/resource', // Handles images as resources
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/, // For font files
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template file
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from /public
    },
    historyApiFallback: true, // Fallback to index.html for single-page apps
    port: 3000, // Server port
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Code splitting for vendor and app code
    },
  },
};
