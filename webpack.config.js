var path = require('path');
var TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  entry: './index.tsx', // входная точка - исходный файл
  //    resolve: {extensions: ['.js','.jsx']},
  output: {
    path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
    publicPath: '/public/',
    filename: 'bundle.js' // название создаваемого файла
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=favicon.ico'
      }
    ]
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, './app/actions'),
      dbApi: path.resolve(__dirname, './app/dbApi/'),
      components: path.resolve(__dirname, './app/components'),
      config: path.resolve(__dirname, './config/'),
      containers: path.resolve(__dirname, './app/containers/'),
      constants: path.resolve(__dirname, './constants/'),
      helpers: path.resolve(__dirname, './app/helpers/'),
      models: path.resolve(__dirname, './app/models/'),
      utilities: path.resolve(__dirname, './app/components/utilities/'),
      table: path.resolve(__dirname, './app/components/table'),
      sharedStyles: path.resolve(__dirname, './app/sharedStyles/'),
      store: path.resolve(__dirname, './app/store')
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
  },
  mode: 'development',
  plugins: [
    new TSLintPlugin({
      files: ['./app/**/*.ts','./app/**/*.tsx']
    })
  ]
};
