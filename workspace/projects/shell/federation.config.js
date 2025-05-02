const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'shell',

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  generateImportMap: true,
  skip: []

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
