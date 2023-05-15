const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const PATHS = {
  source: path.join(__dirname, 'node_modules', 'katex', 'dist'),
  assets: path.join(__dirname, 'assets', 'katex'),
  fonts: path.join(__dirname, 'static', 'katex', 'fonts')
}

module.exports = {
  mode: "development",
  entry: {},
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: PATHS.source,
          globOptions: {
            ignore: ["**/fonts/*", "**/README.md"]
          },
          to: PATHS.assets 
        },
        { 
          from: path.join(PATHS.source, 'fonts'),
          globOptions: { 
            ignore: ["**/*.ttf"]
          }, 
          to: PATHS.fonts
        },
      ],
    }),
  ]
};
