"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('divider');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    dashed: Boolean,
    hairline: _utils.truthProp,
    contentPosition: {
      type: String,
      default: 'center'
    }
  },

  setup(props, {
    slots
  }) {
    return () => (0, _vue.createVNode)("div", {
      "role": "separator",
      "class": bem({
        dashed: props.dashed,
        hairline: props.hairline,
        ["content-" + props.contentPosition]: !!slots.default
      })
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;