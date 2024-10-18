module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './assets',
          '@storage': './src/storage',
          '@utils': './src/utils',
          '@services': './src/services',
        },
      }],
    ],
  };
};
