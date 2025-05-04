const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
config.resolver.extraNodeModules = {
  assert: require.resolve('assert'),
  buffer: require.resolve('buffer'),
  process: require.resolve('process')
};
config.resolver.blacklistRE = [
  /node_modules\/.*\/node_modules\/(@expo\/config-plugins\/build\/plugins\/withPlugins)/,
  /node_modules\/expo-dev-launcher\/expo-dev-launcher-gradle-plugin\/build\.gradle\.kts/
];

module.exports = withNativeWind(config, { input: './global.css' });
