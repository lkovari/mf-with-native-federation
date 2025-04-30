const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mf-b',

  exposes: {
    './Component': './projects/mf-b/src/app/app.component.ts',
  },

  shared: {
  },
  skip: []

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
