"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _useLinkField = require("../composables/use-link-field");

var _loading = require("../loading");

var [name, bem] = (0, _utils.createNamespace)('switch');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    size: [Number, String],
    loading: Boolean,
    disabled: Boolean,
    modelValue: _utils.unknownProp,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: _utils.unknownProp,
      default: true
    },
    inactiveValue: {
      type: _utils.unknownProp,
      default: false
    }
  },
  emits: ['change', 'update:modelValue'],

  setup(props, {
    emit
  }) {
    var isChecked = () => props.modelValue === props.activeValue;

    var onClick = () => {
      if (!props.disabled && !props.loading) {
        var newValue = isChecked() ? props.inactiveValue : props.activeValue;
        emit('update:modelValue', newValue);
        emit('change', newValue);
      }
    };

    var renderLoading = () => {
      if (props.loading) {
        var color = isChecked() ? props.activeColor : props.inactiveColor;
        return (0, _vue.createVNode)(_loading.Loading, {
          "class": bem('loading'),
          "color": color
        }, null);
      }
    };

    (0, _useLinkField.useLinkField)(() => props.modelValue);
    return () => {
      var {
        size,
        loading,
        disabled,
        activeColor,
        inactiveColor
      } = props;
      var checked = isChecked();
      var style = {
        fontSize: (0, _utils.addUnit)(size),
        backgroundColor: checked ? activeColor : inactiveColor
      };
      return (0, _vue.createVNode)("div", {
        "role": "switch",
        "class": bem({
          on: checked,
          loading,
          disabled
        }),
        "style": style,
        "aria-checked": checked,
        "onClick": onClick
      }, [(0, _vue.createVNode)("div", {
        "class": bem('node')
      }, [renderLoading()])]);
    };
  }

});

exports.default = _default;