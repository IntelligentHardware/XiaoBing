"use strict";

exports.__esModule = true;
exports.default = exports.checkerProps = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _icon = require("../icon");

var checkerProps = {
  name: _utils.unknownProp,
  disabled: Boolean,
  iconSize: [Number, String],
  modelValue: _utils.unknownProp,
  checkedColor: String,
  labelPosition: String,
  labelDisabled: Boolean,
  shape: {
    type: String,
    default: 'round'
  }
};
exports.checkerProps = checkerProps;

var _default = (0, _vue.defineComponent)({
  props: (0, _utils.extend)({}, checkerProps, {
    role: String,
    parent: Object,
    checked: Boolean,
    bindGroup: _utils.truthProp,
    bem: {
      type: Function,
      required: true
    }
  }),
  emits: ['click', 'toggle'],

  setup(props, {
    emit,
    slots
  }) {
    var iconRef = (0, _vue.ref)();

    var getParentProp = name => {
      if (props.parent && props.bindGroup) {
        return props.parent.props[name];
      }
    };

    var disabled = (0, _vue.computed)(() => getParentProp('disabled') || props.disabled);
    var direction = (0, _vue.computed)(() => getParentProp('direction'));
    var iconStyle = (0, _vue.computed)(() => {
      var checkedColor = props.checkedColor || getParentProp('checkedColor');

      if (checkedColor && props.checked && !disabled.value) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    });

    var onClick = event => {
      var {
        target
      } = event;
      var icon = iconRef.value;
      var iconClicked = icon === target || icon.contains(target);

      if (!disabled.value && (iconClicked || !props.labelDisabled)) {
        emit('toggle');
      }

      emit('click', event);
    };

    var renderIcon = () => {
      var {
        bem,
        shape,
        checked
      } = props;
      var iconSize = props.iconSize || getParentProp('iconSize');
      return (0, _vue.createVNode)("div", {
        "ref": iconRef,
        "class": bem('icon', [shape, {
          disabled: disabled.value,
          checked
        }]),
        "style": {
          fontSize: (0, _utils.addUnit)(iconSize)
        }
      }, [slots.icon ? slots.icon({
        checked
      }) : (0, _vue.createVNode)(_icon.Icon, {
        "name": "success",
        "style": iconStyle.value
      }, null)]);
    };

    var renderLabel = () => {
      if (slots.default) {
        return (0, _vue.createVNode)("span", {
          "class": props.bem('label', [props.labelPosition, {
            disabled: disabled.value
          }])
        }, [slots.default()]);
      }
    };

    return () => {
      var nodes = [renderIcon()];

      if (props.labelPosition === 'left') {
        nodes.unshift(renderLabel());
      } else {
        nodes.push(renderLabel());
      }

      return (0, _vue.createVNode)("div", {
        "role": props.role,
        "class": props.bem([{
          disabled: disabled.value,
          'label-disabled': props.labelDisabled
        }, direction.value]),
        "tabindex": disabled.value ? -1 : 0,
        "aria-checked": props.checked,
        "onClick": onClick
      }, [nodes]);
    };
  }

});

exports.default = _default;