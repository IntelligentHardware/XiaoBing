"use strict";

exports.__esModule = true;
exports.createNamespace = createNamespace;

var _bem = require("./bem");

var _translate = require("./translate");

function createNamespace(name) {
  var prefixedName = "van-" + name;
  return [prefixedName, (0, _bem.createBEM)(prefixedName), (0, _translate.createTranslate)(prefixedName)];
}