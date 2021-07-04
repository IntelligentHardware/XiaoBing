import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { truthProp, createNamespace } from '../utils';
var [name, bem] = createNamespace('divider');
export default defineComponent({
  name,
  props: {
    dashed: Boolean,
    hairline: truthProp,
    contentPosition: {
      type: String,
      default: 'center'
    }
  },

  setup(props, {
    slots
  }) {
    return () => _createVNode("div", {
      "role": "separator",
      "class": bem({
        dashed: props.dashed,
        hairline: props.hairline,
        ["content-" + props.contentPosition]: !!slots.default
      })
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});