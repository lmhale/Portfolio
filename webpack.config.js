const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
let mode = "development"

if(process.env.NODE_ENV === "production"){
    mode= "production";
}
module.exports = {
  mode: mode,

  module: {
    rules: [
        {
            test:/\.css$/i,
            use:[MiniCssExtractPlugin.loader, "css-loader"],
        },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins:[new MiniCssExtractPlugin(), new Dotenv()],

  resolve:{
      extensions:[".js", ".jsx"],
  },
  devtool:"source-map",
  devServer: {
    static: "./dist",
    hot:true,
    historyApiFallback: true,
  },
};
