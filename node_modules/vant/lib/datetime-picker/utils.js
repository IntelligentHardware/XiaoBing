"use strict";

exports.__esModule = true;
exports.times = times;
exports.getTrueValue = getTrueValue;
exports.getMonthEndDay = getMonthEndDay;
exports.pickerKeys = exports.sharedProps = void 0;

var _utils = require("../utils");

var _Picker = require("../picker/Picker");

var sharedProps = (0, _utils.extend)({}, _Picker.pickerProps, {
  filter: Function,
  columnsOrder: Array,
  formatter: {
    type: Function,
    default: (type, value) => value
  }
});
exports.sharedProps = sharedProps;
var pickerKeys = Object.keys(_Picker.pickerProps);
exports.pickerKeys = pickerKeys;

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

function getTrueValue(value) {
  if (!value) {
    return 0;
  }

  while (Number.isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(value, 10);
}

function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}