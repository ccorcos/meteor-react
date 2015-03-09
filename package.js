Package.describe({
  name: 'ccorcos:react',
  summary: 'React + JSX + ES6 transforms (--harmony) + CJSX for Meteor',
  version: '0.0.1',
  git: 'https://github.com/ccorcos/meteor-react'
});

var meteorVersion = '1.0.3.1';
var reactVersion = '0.12.2';
var reactAddonsVersion = '0.9.0';
var coffeeReactVersion = "2.4.1";

Npm.depends({
  'react': reactVersion,
  'react-addons': reactAddonsVersion
});


Package._transitional_registerBuildPlugin({
  name: 'compileJSX',
  use: [],
  sources: [
    'plugin/compile-jsx.js'
  ],
  npmDependencies: {
    'react': reactVersion,
    'react-tools': reactVersion
  }
});


Package.registerBuildPlugin({
  name: "compileCJSX",
  use: [],
  sources: [
    'plugin/compile-cjsx.js'
  ],
  npmDependencies: {
    'coffee-react-transform': coffeeReactVersion, 
    'coffee-script': "1.7.1", 
    'source-map': "0.1.32"
  }
});


Package.on_use(function (api) {
  api.versionsFrom('METEOR@1');

  // CDN react for the client
  api.add_files('vendor/react.js', 'client');

  // NPM react for the server
  api.add_files('src/require-packages.js', 'server');
  api.export('React', 'server');
});