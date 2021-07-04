"use strict";

exports.__esModule = true;
exports.default = exports.GRID_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _use = require("@vant/use");

var [name, bem] = (0, _utils.createNamespace)('grid');
var GRID_KEY = Symbol(name);
exports.GRID_KEY = GRID_KEY;
var props = {
  square: Boolean,
  center: _utils.truthProp,
  border: _utils.truthProp,
  gutter: [Number, String],
  iconSize: [Number, String],
  direction: String,
  clickable: Boolean,
  columnNum: {
    type: [Number, String],
    default: 4
  }
};

var _default = (0, _vue.defineComponent)({
  name,
  props,

  setup(props, {
    slots
  }) {
    var {
      linkChildren
    } = (0, _use.useChildren)(GRID_KEY);
    linkChildren({
      props
    });
    return () => (0, _vue.createVNode)("div", {
      "style": {
        paddingLeft: (0, _utils.addUnit)(props.gutter)
      },
      "class": [bem(), {
        [_constant.BORDER_TOP]: props.border && !props.gutter
      }]
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;