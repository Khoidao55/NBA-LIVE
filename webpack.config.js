module.exports = {
  mode: 'development',
  entry: __dirname + '/client/src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        // use: {
        //   loader: 'ts-loader',
        //   options: {
        //     presets: ['@babel/preset-react', '@babel/preset-env'],
        //     "plugins": ["@babel/plugin-transform-runtime"]
        //   }
        // }
      },
      // {
      //   test: /\.(ts|js)x?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-react', '@babel/preset-env'],
      //       "plugins": ["@babel/plugin-transform-runtime"]
      //     }
      //   }
      // },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    historyApiFallback: true
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
    publicPath: '/'
  }
};