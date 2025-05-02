const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mf-b',

  exposes: {
    './Component': './projects/mf-b/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  skip: []

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
