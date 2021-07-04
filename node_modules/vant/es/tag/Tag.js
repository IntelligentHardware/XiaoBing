import { createVNode as _createVNode } from "vue";
import { Transition, defineComponent } from 'vue';
import { truthProp, createNamespace } from '../utils';
import { Icon } from '../icon';
var [name, bem] = createNamespace('tag');
export default defineComponent({
  name,
  props: {
    size: String,
    mark: Boolean,
    show: truthProp,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean,
    type: {
      type: String,
      default: 'default'
    }
  },
  emits: ['close'],

  setup(props, {
    slots,
    emit
  }) {
    var onClose = event => {
      event.stopPropagation();
      emit('close', event);
    };

    var getStyle = () => {
      if (props.plain) {
        return {
          color: props.textColor || props.color,
          borderColor: props.color
        };
      }

      return {
        color: props.textColor,
        background: props.color
      };
    };

    var renderTag = () => {
      var {
        type,
        mark,
        plain,
        round,
        size,
        closeable
      } = props;
      var classes = {
        mark,
        plain,
        round
      };

      if (size) {
        classes[size] = size;
      }

      var CloseIcon = closeable && _createVNode(Icon, {
        "name": "cross",
        "class": bem('close'),
        "onClick": onClose
      }, null);

      return _createVNode("span", {
        "style": getStyle(),
        "class": bem([classes, type])
      }, [slots.default == null ? void 0 : slots.default(), CloseIcon]);
    };

    return () => _createVNode(Transition, {
      "name": props.closeable ? 'van-fade' : undefined
    }, {
      default: () => [props.show ? renderTag() : null]
    });
  }

});