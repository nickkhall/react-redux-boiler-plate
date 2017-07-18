import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  inject: 'body'
})

const PATHS = {
  app: path.join(__dirname, '/client'),
  build: path.join(__dirname, '/client/dist'),
}

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const base = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css|\.scss$/, loader: 'style-loader!css-loader' }
    ]
  }
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  plugins: [HtmlWebpackPluginConfig]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HtmlWebpackPluginConfig, productionPlugin]
}

console.log('LAUNCH_COMMAND npm run', LAUNCH_COMMAND)

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
)
