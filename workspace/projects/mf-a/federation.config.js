const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mf-a',

  exposes: {
    './Component': './projects/mf-a/src/app/app.component.ts',
  },

  shared: {
  },
  skip: []

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
