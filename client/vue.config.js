const fs = require('fs')
module.exports = {
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json', '.css', 'scss', '.gql', '.graphql']
    }
  },
  css: {
    loaderOptions: {
      scss: {
        data: [
          // Credit to https://stackoverflow.com/a/49114763/7569308
          // 😉
          './src/assets/shared_styles/variables-base.scss',
          './src/assets/shared_styles/variables-main.scss',
          './src/assets/shared_styles/mixins.scss'
        ].map(fileName => fs.readFileSync(fileName, 'utf-8')).join('\n')
      }
    }
  },
  devServer: {
    proxy: 'https://devgx-portal.bluex.trade'
  },
  // Removes service worker plugin
  // https://stackoverflow.com/a/55559575
  pwa: {
    serviceWorker: false,
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './app/sw.js' /* Empty file. */
    }
  }
}
