module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@assets': './src/assets',
            '@routes': './src/routes',
            '@utils': './src/utils',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@config': './src/config',
            '@mappers': './src/mappers',
            '@types': './src/@types',
            '@contexts': './src/contexts',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  }
}
