"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _popup = require("../popup");

var _shared = require("../popup/shared");

var [name, bem] = (0, _utils.createNamespace)('notify');

var _default = (0, _vue.defineComponent)({
  name,
  props: (0, _utils.extend)({}, _shared.popupSharedProps, {
    color: String,
    message: [Number, String],
    className: _utils.unknownProp,
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
      return (0, _vue.createVNode)(_popup.Popup, {
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

exports.default = _default;