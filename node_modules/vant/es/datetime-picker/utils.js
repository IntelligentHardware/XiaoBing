import { extend } from '../utils';
import { pickerProps } from '../picker/Picker';
export var sharedProps = extend({}, pickerProps, {
  filter: Function,
  columnsOrder: Array,
  formatter: {
    type: Function,
    default: (type, value) => value
  }
});
export var pickerKeys = Object.keys(pickerProps);
export function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
export function getTrueValue(value) {
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
export function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}