import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('steps');
export var STEPS_KEY = Symbol(name);
var props = {
  iconPrefix: String,
  finishIcon: String,
  activeColor: String,
  inactiveIcon: String,
  inactiveColor: String,
  active: {
    type: [Number, String],
    default: 0
  },
  direction: {
    type: String,
    default: 'horizontal'
  },
  activeIcon: {
    type: String,
    default: 'checked'
  }
};
export default defineComponent({
  name,
  props,
  emits: ['click-step'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      linkChildren
    } = useChildren(STEPS_KEY);

    var onClickStep = index => emit('click-step', index);

    linkChildren({
      props,
      onClickStep
    });
    return () => _createVNode("div", {
      "class": bem([props.direction])
    }, [_createVNode("div", {
      "class": bem('items')
    }, [slots.default == null ? void 0 : slots.default()])]);
  }

});