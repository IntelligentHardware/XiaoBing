"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var [name, bem] = (0, _utils.createNamespace)('cell-group');

var _default = (0, _vue.defineComponent)({
  name,
  inheritAttrs: false,
  props: {
    title: String,
    border: _utils.truthProp
  },

  setup(props, {
    slots,
    attrs
  }) {
    var renderGroup = () => (0, _vue.createVNode)("div", (0, _vue.mergeProps)({
      "class": [bem(), {
        [_constant.BORDER_TOP_BOTTOM]: props.border
      }]
    }, attrs), [slots.default == null ? void 0 : slots.default()]);

    var renderTitle = () => (0, _vue.createVNode)("div", {
      "class": bem('title')
    }, [slots.title ? slots.title() : props.title]);

    return () => {
      if (props.title || slots.title) {
        return (0, _vue.createVNode)(_vue.Fragment, null, [renderTitle(), renderGroup()]);
      }

      return renderGroup();
    };
  }

});

exports.default = _default;