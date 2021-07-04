"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _badge = require("../badge");

var [name, bem] = (0, _utils.createNamespace)('icon');

function isImage(name) {
  return name ? name.includes('/') : false;
}

var _default = (0, _vue.defineComponent)({
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
      return (0, _vue.createVNode)(_badge.Badge, {
        "dot": dot,
        "tag": tag,
        "content": badge,
        "class": [classPrefix, isImageIcon ? '' : classPrefix + "-" + name],
        "style": {
          color,
          fontSize: (0, _utils.addUnit)(size)
        }
      }, {
        default: () => [slots.default == null ? void 0 : slots.default(), isImageIcon && (0, _vue.createVNode)("img", {
          "class": bem('image'),
          "src": name
        }, null)]
      });
    };
  }

});

exports.default = _default;