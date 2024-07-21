const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@apis': './src/apis',
          '@components': './src/components',
          '@hook': './src/hook',
          '@mocks': './src/mocks',
          '@page': './src/page',
          '@stories': './src/stories',
          '@styles': './src/styles',
          '@types': './src/types',
          '@util': './src/util',
        },
      },
    },
  ],
}
