import { createVNode as _createVNode } from "vue";
import { watch, defineComponent } from 'vue';
import { unknownProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';
import { useLinkField } from '../composables/use-link-field';
var [name, bem] = createNamespace('radio-group');
export var RADIO_KEY = Symbol(name);
var props = {
  disabled: Boolean,
  iconSize: [Number, String],
  direction: String,
  modelValue: unknownProp,
  checkedColor: String
};
export default defineComponent({
  name,
  props,
  emits: ['change', 'update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      linkChildren
    } = useChildren(RADIO_KEY);

    var updateValue = value => emit('update:modelValue', value);

    watch(() => props.modelValue, value => emit('change', value));
    linkChildren({
      props,
      updateValue
    });
    useLinkField(() => props.modelValue);
    return () => _createVNode("div", {
      "class": bem([props.direction]),
      "role": "radiogroup"
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});