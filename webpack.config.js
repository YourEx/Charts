module.exports = {
  entry: './src/App.ts',
  devtool: 'inline-source-map',
  output: {
    filename: './built/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.html']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: "html-loader" }
    ]
  }
}
