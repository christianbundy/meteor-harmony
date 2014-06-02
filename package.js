var traceurVersion = {
  'traceur': '0.0.42'
};

Package.describe({
  summary: "JavaScript.next-to-JavaScript-of-today compiler",
  version: "1.0.0-0.0.42"
});

Package._transitional_registerBuildPlugin({
  name: "compileHarmony",
  use: [],
  sources: [
    "plugin/compile-harmony.js"
  ],
  npmDependencies: traceurVersion
});

Npm.depends(traceurVersion);

Package.on_use(function (api) {
  api.add_files(Npm.require('traceur').RUNTIME_PATH);
});

// Issue #7 reminder
// Package.on_test(function (api) {
//   api.use(["harmony", "tinytest"]);
//   api.add_files("tests/test.js", ["client"]);
//   api.add_files([
//   ], ["client", "server"]);
// });
