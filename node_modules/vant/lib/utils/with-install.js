"use strict";

exports.__esModule = true;
exports.withInstall = withInstall;

var _string = require("./format/string");

// using any here because tsc will generate some weird results when using generics
function withInstall(options) {
  options.install = app => {
    var {
      name
    } = options;
    app.component(name, options);
    app.component((0, _string.camelize)("-" + name), options);
  };

  return options;
}