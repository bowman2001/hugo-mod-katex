const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const PATHS = {
  source: path.join(__dirname, 'node_modules', 'katex', 'dist'),
  target: path.join(__dirname, 'assets', 'katex')
}

module.exports = {
  mode: "development",
  entry: {},
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(PATHS.source, 'katex.*'), to: PATHS.target },
        { from: path.join(PATHS.source, 'contrib'), to: path.join(PATHS.target, 'contrib') },
        { from: path.join(PATHS.source, 'fonts'), to: path.join(PATHS.target, 'fonts') },
      ],
    }),
  ]
};
