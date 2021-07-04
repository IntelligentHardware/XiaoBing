"use strict";

exports.__esModule = true;
exports.isDef = isDef;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.isDate = isDate;
exports.isMobile = isMobile;
exports.isNumeric = isNumeric;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;

var _base = require("./base");

function isDef(val) {
  return val !== undefined && val !== null;
} // eslint-disable-next-line @typescript-eslint/ban-types


function isFunction(val) {
  return typeof val === 'function';
}

function isObject(val) {
  return val !== null && typeof val === 'object';
}

function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]' && !Number.isNaN(val.getTime());
}

function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}

function isNumeric(val) {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

function isAndroid() {
  return _base.inBrowser ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}

function isIOS() {
  return _base.inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
}