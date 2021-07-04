import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { isDef, addUnit, isNumeric, truthProp, createNamespace } from '../utils';
var [name, bem] = createNamespace('badge');
export default defineComponent({
  name,
  props: {
    dot: Boolean,
    max: [Number, String],
    color: String,
    offset: Array,
    content: [Number, String],
    showZero: truthProp,
    tag: {
      type: String,
      default: 'div'
    }
  },

  setup(props, {
    slots
  }) {
    var hasContent = () => {
      if (slots.content) {
        return true;
      }

      var {
        content,
        showZero
      } = props;
      return isDef(content) && content !== '' && (showZero || content !== 0);
    };

    var renderContent = () => {
      var {
        dot,
        max,
        content
      } = props;

      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content();
        }

        if (isDef(max) && isNumeric(content) && +content > max) {
          return max + "+";
        }

        return content;
      }
    };

    var renderBadge = () => {
      if (hasContent() || props.dot) {
        var style = {
          background: props.color
        };

        if (props.offset) {
          var [x, y] = props.offset;

          if (slots.default) {
            style.top = addUnit(y);
            style.right = "-" + addUnit(x);
          } else {
            style.marginTop = addUnit(y);
            style.marginLeft = addUnit(x);
          }
        }

        return _createVNode("div", {
          "class": bem({
            dot: props.dot,
            fixed: !!slots.default
          }),
          "style": style
        }, [renderContent()]);
      }
    };

    return () => {
      if (slots.default) {
        var {
          tag
        } = props;
        return _createVNode(tag, {
          "class": bem('wrapper')
        }, {
          default: () => [slots.default(), renderBadge()]
        });
      }

      return renderBadge();
    };
  }

});