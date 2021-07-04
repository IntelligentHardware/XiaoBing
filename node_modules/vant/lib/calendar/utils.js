"use strict";

exports.__esModule = true;
exports.formatMonthTitle = formatMonthTitle;
exports.compareMonth = compareMonth;
exports.compareDay = compareDay;
exports.getDayByOffset = getDayByOffset;
exports.calcDateNum = calcDateNum;
exports.getNextDay = exports.getPrevDay = exports.cloneDates = exports.cloneDate = exports.t = exports.bem = exports.name = void 0;

var _utils = require("../utils");

var [name, bem, t] = (0, _utils.createNamespace)('calendar');
exports.t = t;
exports.bem = bem;
exports.name = name;

function formatMonthTitle(date) {
  return t('monthTitle', date.getFullYear(), date.getMonth() + 1);
}

function compareMonth(date1, date2) {
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();

  if (year1 === year2) {
    var month1 = date1.getMonth();
    var month2 = date2.getMonth();
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}

function compareDay(day1, day2) {
  var compareMonthResult = compareMonth(day1, day2);

  if (compareMonthResult === 0) {
    var date1 = day1.getDate();
    var date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }

  return compareMonthResult;
}

var cloneDate = date => new Date(date);

exports.cloneDate = cloneDate;

var cloneDates = dates => Array.isArray(dates) ? dates.map(cloneDate) : cloneDate(dates);

exports.cloneDates = cloneDates;

function getDayByOffset(date, offset) {
  var cloned = cloneDate(date);
  cloned.setDate(cloned.getDate() + offset);
  return cloned;
}

var getPrevDay = date => getDayByOffset(date, -1);

exports.getPrevDay = getPrevDay;

var getNextDay = date => getDayByOffset(date, 1);

exports.getNextDay = getNextDay;

function calcDateNum(date) {
  var day1 = date[0].getTime();
  var day2 = date[1].getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}