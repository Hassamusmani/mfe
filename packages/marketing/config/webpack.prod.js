const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const proConfig = {
  mode: "production",
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./marketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ]
};

module.exports = merge(commonConfig, proConfig);