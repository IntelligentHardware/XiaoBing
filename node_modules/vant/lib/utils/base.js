"use strict";

exports.__esModule = true;
exports.noop = noop;
exports.get = get;
exports.pick = pick;
exports.truthProp = exports.unknownProp = exports.inBrowser = exports.extend = void 0;

function noop() {}

var extend = Object.assign;
exports.extend = extend;
var inBrowser = typeof window !== 'undefined'; // PropTypes

exports.inBrowser = inBrowser;
var unknownProp = null;
exports.unknownProp = unknownProp;
var truthProp = {
  type: Boolean,
  default: true
}; // eslint-disable-next-line

exports.truthProp = truthProp;

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(key => {
    var _result$key;

    result = (_result$key = result[key]) != null ? _result$key : '';
  });
  return result;
}

function pick(obj, keys, ignoreUndefined) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      ret[key] = obj[key];
    }

    return ret;
  }, {});
}