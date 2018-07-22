module.exports = {
  entry: ['./main.jsx','./boot.js'],
  // entry: ['./boot.js'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};
