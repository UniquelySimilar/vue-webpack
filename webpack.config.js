const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  //mode: 'development',
  entry: {
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src")
    },
    extensions: [".js", ".vue", ".json"],
  },
};