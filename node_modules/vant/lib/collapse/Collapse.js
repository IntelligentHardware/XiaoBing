"use strict";

exports.__esModule = true;
exports.default = exports.COLLAPSE_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _use = require("@vant/use");

var [name, bem] = (0, _utils.createNamespace)('collapse');
var COLLAPSE_KEY = Symbol(name);
exports.COLLAPSE_KEY = COLLAPSE_KEY;

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    border: _utils.truthProp,
    accordion: Boolean,
    modelValue: {
      type: [String, Number, Array],
      default: ''
    }
  },
  emits: ['change', 'update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      linkChildren
    } = (0, _use.useChildren)(COLLAPSE_KEY);

    var updateName = name => {
      emit('change', name);
      emit('update:modelValue', name);
    };

    var toggle = (name, expanded) => {
      var {
        accordion,
        modelValue
      } = props;

      if (accordion) {
        updateName(name === modelValue ? '' : name);
      } else if (expanded) {
        updateName(modelValue.concat(name));
      } else {
        updateName(modelValue.filter(activeName => activeName !== name));
      }
    };

    var isExpanded = name => {
      var {
        accordion,
        modelValue
      } = props;

      if (process.env.NODE_ENV !== 'production') {
        if (accordion && Array.isArray(modelValue)) {
          console.error('[Vant] Collapse: "v-model" should not be Array in accordion mode');
          return false;
        }

        if (!accordion && !Array.isArray(modelValue)) {
          console.error('[Vant] Collapse: "v-model" should be Array in non-accordion mode');
          return false;
        }
      }

      return accordion ? modelValue === name : modelValue.includes(name);
    };

    linkChildren({
      toggle,
      isExpanded
    });
    return () => (0, _vue.createVNode)("div", {
      "class": [bem(), {
        [_constant.BORDER_TOP_BOTTOM]: props.border
      }]
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;