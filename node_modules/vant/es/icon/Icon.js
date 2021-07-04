import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { addUnit, createNamespace } from '../utils';
import { Badge } from '../badge';
var [name, bem] = createNamespace('icon');

function isImage(name) {
  return name ? name.includes('/') : false;
}

export default defineComponent({
  name,
  props: {
    dot: Boolean,
    name: String,
    size: [Number, String],
    badge: [Number, String],
    color: String,
    tag: {
      type: String,
      default: 'i'
    },
    classPrefix: {
      type: String,
      default: bem()
    }
  },

  setup(props, {
    slots
  }) {
    return () => {
      var {
        tag,
        dot,
        name,
        size,
        badge,
        color,
        classPrefix
      } = props;
      var isImageIcon = isImage(name);
      return _createVNode(Badge, {
        "dot": dot,
        "tag": tag,
        "content": badge,
        "class": [classPrefix, isImageIcon ? '' : classPrefix + "-" + name],
        "style": {
          color,
          fontSize: addUnit(size)
        }
      }, {
        default: () => [slots.default == null ? void 0 : slots.default(), isImageIcon && _createVNode("img", {
          "class": bem('image'),
          "src": name
        }, null)]
      });
    };
  }

});