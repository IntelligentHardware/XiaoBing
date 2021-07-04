import { createVNode as _createVNode } from "vue";
import { watch, defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLinkField } from '../composables/use-link-field';
var [name, bem] = createNamespace('checkbox-group');
export var CHECKBOX_GROUP_KEY = Symbol(name);
var props = {
  max: [Number, String],
  disabled: Boolean,
  direction: String,
  iconSize: [Number, String],
  checkedColor: String,
  modelValue: {
    type: Array,
    default: () => []
  }
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
      children,
      linkChildren
    } = useChildren(CHECKBOX_GROUP_KEY);

    var updateValue = value => emit('update:modelValue', value);

    var toggleAll = (options = {}) => {
      if (typeof options === 'boolean') {
        options = {
          checked: options
        };
      }

      var {
        checked,
        skipDisabled
      } = options;
      var checkedChildren = children.filter(item => {
        if (!item.props.bindGroup) {
          return false;
        }

        if (item.props.disabled && skipDisabled) {
          return item.checked.value;
        }

        return checked != null ? checked : !item.checked.value;
      });
      var names = checkedChildren.map(item => item.name);
      updateValue(names);
    };

    watch(() => props.modelValue, value => emit('change', value));
    useExpose({
      toggleAll
    });
    useLinkField(() => props.modelValue);
    linkChildren({
      props,
      updateValue
    });
    return () => _createVNode("div", {
      "class": bem([props.direction])
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});