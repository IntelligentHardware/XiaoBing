"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('badge');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    dot: Boolean,
    max: [Number, String],
    color: String,
    offset: Array,
    content: [Number, String],
    showZero: _utils.truthProp,
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
      return (0, _utils.isDef)(content) && content !== '' && (showZero || content !== 0);
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

        if ((0, _utils.isDef)(max) && (0, _utils.isNumeric)(content) && +content > max) {
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
            style.top = (0, _utils.addUnit)(y);
            style.right = "-" + (0, _utils.addUnit)(x);
          } else {
            style.marginTop = (0, _utils.addUnit)(y);
            style.marginLeft = (0, _utils.addUnit)(x);
          }
        }

        return (0, _vue.createVNode)("div", {
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
        return (0, _vue.createVNode)(tag, {
          "class": bem('wrapper')
        }, {
          default: () => [slots.default(), renderBadge()]
        });
      }

      return renderBadge();
    };
  }

});

exports.default = _default;