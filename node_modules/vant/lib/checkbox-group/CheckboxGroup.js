"use strict";

exports.__esModule = true;
exports.default = exports.CHECKBOX_GROUP_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _useLinkField = require("../composables/use-link-field");

var [name, bem] = (0, _utils.createNamespace)('checkbox-group');
var CHECKBOX_GROUP_KEY = Symbol(name);
exports.CHECKBOX_GROUP_KEY = CHECKBOX_GROUP_KEY;
var props = {
  max: [Number, String],
  disabled: Boolean,
  direction: String,
  iconSize: [Number, String],
  checkedColor: String,
  modelValue: {
    type: Array,
    default: () => []
  }
};

var _default = (0, _vue.defineComponent)({
  name,
  props,
  emits: ['change', 'update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      children,
      linkChildren
    } = (0, _use.useChildren)(CHECKBOX_GROUP_KEY);

    var updateValue = value => emit('update:modelValue', value);

    var toggleAll = (options = {}) => {
      if (typeof options === 'boolean') {
        options = {
          checked: options
        };
      }

      var {
        checked,
        skipDisabled
      } = options;
      var checkedChildren = children.filter(item => {
        if (!item.props.bindGroup) {
          return false;
        }

        if (item.props.disabled && skipDisabled) {
          return item.checked.value;
        }

        return checked != null ? checked : !item.checked.value;
      });
      var names = checkedChildren.map(item => item.name);
      updateValue(names);
    };

    (0, _vue.watch)(() => props.modelValue, value => emit('change', value));
    (0, _useExpose.useExpose)({
      toggleAll
    });
    (0, _useLinkField.useLinkField)(() => props.modelValue);
    linkChildren({
      props,
      updateValue
    });
    return () => (0, _vue.createVNode)("div", {
      "class": bem([props.direction])
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;