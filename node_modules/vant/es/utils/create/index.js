import { createBEM } from './bem';
import { createTranslate } from './translate';
export function createNamespace(name) {
  var prefixedName = "van-" + name;
  return [prefixedName, createBEM(prefixedName), createTranslate(prefixedName)];
}