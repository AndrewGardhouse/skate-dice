module.exports = {
  publicPath: 'https://sk8diceapp.com',
  outputDir: 'docs',
  pwa: {
    themeColor: '#000000',
    msTileColor: '#000000',
    display: 'fullscreen',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [
        /\.map$/,
        /CNAME$/,
        /manifest\.json$/,
      ],
    },
  },
};
