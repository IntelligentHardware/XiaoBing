import { get } from '../base';
import { camelize } from '../format/string';
import { isFunction } from '../validate';
import locale from '../../locale';
export function createTranslate(name) {
  var prefix = camelize(name) + '.';
  return function (path, ...args) {
    var messages = locale.messages();
    var message = get(messages, prefix + path) || get(messages, path);
    return isFunction(message) ? message(...args) : message;
  };
}