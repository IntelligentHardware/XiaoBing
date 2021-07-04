import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('sidebar');
export var SIDEBAR_KEY = Symbol(name);
export default defineComponent({
  name,
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['change', 'update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      linkChildren
    } = useChildren(SIDEBAR_KEY);

    var getActive = () => +props.modelValue;

    var setActive = value => {
      if (value !== getActive()) {
        emit('update:modelValue', value);
        emit('change', value);
      }
    };

    linkChildren({
      getActive,
      setActive
    });
    return () => _createVNode("div", {
      "class": bem()
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});