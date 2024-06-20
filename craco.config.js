const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
};
