// webpack.config.js
module.exports = {
    // ... other configurations
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
  };
  