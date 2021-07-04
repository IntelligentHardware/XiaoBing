import { watch, inject } from 'vue';
export var FORM_KEY = Symbol('van-form');
export var FIELD_KEY = Symbol('van-field');
export function useLinkField(getValue) {
  var field = inject(FIELD_KEY, null);

  if (field && !field.childFieldValue.value) {
    field.childFieldValue.value = getValue;
    watch(getValue, () => {
      field.resetValidation();
      field.validateWithTrigger('onChange');
    });
  }
}