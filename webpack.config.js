var config = {
   entry: __dirname+'/main.js',
   output: {
      path:__dirname,
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8181
   },
   module: {
      loaders: [
         {
            test: [/\.jsx?$/,/\.js?$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;
