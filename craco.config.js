const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@page': path.resolve(__dirname, 'src/page'),
      '@util': path.resolve(__dirname, 'src/util'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
}
