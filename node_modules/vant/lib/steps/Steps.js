"use strict";

exports.__esModule = true;
exports.default = exports.STEPS_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var [name, bem] = (0, _utils.createNamespace)('steps');
var STEPS_KEY = Symbol(name);
exports.STEPS_KEY = STEPS_KEY;
var props = {
  iconPrefix: String,
  finishIcon: String,
  activeColor: String,
  inactiveIcon: String,
  inactiveColor: String,
  active: {
    type: [Number, String],
    default: 0
  },
  direction: {
    type: String,
    default: 'horizontal'
  },
  activeIcon: {
    type: String,
    default: 'checked'
  }
};

var _default = (0, _vue.defineComponent)({
  name,
  props,
  emits: ['click-step'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      linkChildren
    } = (0, _use.useChildren)(STEPS_KEY);

    var onClickStep = index => emit('click-step', index);

    linkChildren({
      props,
      onClickStep
    });
    return () => (0, _vue.createVNode)("div", {
      "class": bem([props.direction])
    }, [(0, _vue.createVNode)("div", {
      "class": bem('items')
    }, [slots.default == null ? void 0 : slots.default()])]);
  }

});

exports.default = _default;