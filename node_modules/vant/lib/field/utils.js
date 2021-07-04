"use strict";

exports.__esModule = true;
exports.runSyncRule = runSyncRule;
exports.runRuleValidator = runRuleValidator;
exports.getRuleMessage = getRuleMessage;
exports.startComposing = startComposing;
exports.endComposing = endComposing;
exports.resizeTextarea = resizeTextarea;
exports.mapInputType = mapInputType;

var _utils = require("../utils");

function isEmptyValue(value) {
  if (Array.isArray(value)) {
    return !value.length;
  }

  if (value === 0) {
    return false;
  }

  return !value;
}

function runSyncRule(value, rule) {
  if (rule.required && isEmptyValue(value)) {
    return false;
  }

  if (rule.pattern && !rule.pattern.test(String(value))) {
    return false;
  }

  return true;
}

function runRuleValidator(value, rule) {
  return new Promise(resolve => {
    var returnVal = rule.validator(value, rule);

    if ((0, _utils.isPromise)(returnVal)) {
      return returnVal.then(resolve);
    }

    resolve(returnVal);
  });
}

function getRuleMessage(value, rule) {
  var {
    message
  } = rule;

  if ((0, _utils.isFunction)(message)) {
    return message(value, rule);
  }

  return message || '';
}

function startComposing(event) {
  event.target.composing = true;
}

function endComposing(event) {
  var {
    target
  } = event;

  if (target.composing) {
    target.composing = false;
    (0, _utils.trigger)(target, 'input');
  }
}

function resizeTextarea(input, autosize) {
  input.style.height = 'auto';
  var height = input.scrollHeight;

  if ((0, _utils.isObject)(autosize)) {
    var {
      maxHeight,
      minHeight
    } = autosize;

    if (maxHeight !== undefined) {
      height = Math.min(height, maxHeight);
    }

    if (minHeight !== undefined) {
      height = Math.max(height, minHeight);
    }
  }

  if (height) {
    input.style.height = height + "px";
  }
}

function mapInputType(type) {
  // type="number" is weird in iOS, and can't prevent dot in Android
  // so use inputmode to set keyboard in modern browsers
  if (type === 'number') {
    return {
      type: 'text',
      inputmode: 'decimal'
    };
  }

  if (type === 'digit') {
    return {
      type: 'tel',
      inputmode: 'numeric'
    };
  }

  return {
    type
  };
}