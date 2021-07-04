import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace, extend, unknownProp } from '../utils';
import { Popup } from '../popup';
import { popupSharedProps } from '../popup/shared';
var [name, bem] = createNamespace('notify');
export default defineComponent({
  name,
  props: extend({}, popupSharedProps, {
    color: String,
    message: [Number, String],
    className: unknownProp,
    background: String,
    lockScroll: Boolean,
    type: {
      type: String,
      default: 'danger'
    }
  }),

  setup(props, {
    slots
  }) {
    return () => {
      var style = {
        color: props.color,
        background: props.background
      };
      return _createVNode(Popup, {
        "show": props.show,
        "class": [bem([props.type]), props.className],
        "style": style,
        "overlay": false,
        "position": "top",
        "duration": 0.2,
        "lockScroll": props.lockScroll
      }, {
        default: () => [slots.default ? slots.default() : props.message]
      });
    };
  }

});