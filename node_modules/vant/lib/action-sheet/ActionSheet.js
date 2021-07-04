"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _icon = require("../icon");

var _popup = require("../popup");

var _loading = require("../loading");

var _shared = require("../popup/shared");

// Utils
// Components
var [name, bem] = (0, _utils.createNamespace)('action-sheet');

var _default = (0, _vue.defineComponent)({
  name,
  props: (0, _utils.extend)({}, _shared.popupSharedProps, {
    title: String,
    round: _utils.truthProp,
    actions: Array,
    closeable: _utils.truthProp,
    cancelText: String,
    description: String,
    closeOnPopstate: Boolean,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: _utils.truthProp,
    closeIcon: {
      type: String,
      default: 'cross'
    }
  }),
  emits: ['select', 'cancel', 'update:show'],

  setup(props, {
    slots,
    emit
  }) {
    var updateShow = show => emit('update:show', show);

    var onCancel = () => {
      updateShow(false);
      emit('cancel');
    };

    var renderHeader = () => {
      if (props.title) {
        return (0, _vue.createVNode)("div", {
          "class": bem('header')
        }, [props.title, props.closeable && (0, _vue.createVNode)(_icon.Icon, {
          "name": props.closeIcon,
          "class": bem('close'),
          "onClick": onCancel
        }, null)]);
      }
    };

    var renderCancel = () => {
      if (slots.cancel || props.cancelText) {
        return [(0, _vue.createVNode)("div", {
          "class": bem('gap')
        }, null), (0, _vue.createVNode)("button", {
          "type": "button",
          "class": bem('cancel'),
          "onClick": onCancel
        }, [slots.cancel ? slots.cancel() : props.cancelText])];
      }
    };

    var renderOption = (item, index) => {
      var {
        name,
        color,
        subname,
        loading,
        callback,
        disabled,
        className
      } = item;
      var Content = loading ? (0, _vue.createVNode)(_loading.Loading, {
        "class": bem('loading-icon')
      }, null) : [(0, _vue.createVNode)("span", {
        "class": bem('name')
      }, [name]), subname && (0, _vue.createVNode)("div", {
        "class": bem('subname')
      }, [subname])];

      var onClick = () => {
        if (disabled || loading) {
          return;
        }

        if (callback) {
          callback(item);
        }

        if (props.closeOnClickAction) {
          updateShow(false);
        }

        (0, _vue.nextTick)(() => emit('select', item, index));
      };

      return (0, _vue.createVNode)("button", {
        "type": "button",
        "style": {
          color
        },
        "class": [bem('item', {
          loading,
          disabled
        }), className],
        "onClick": onClick
      }, [Content]);
    };

    var renderDescription = () => {
      if (props.description || slots.description) {
        var content = slots.description ? slots.description() : props.description;
        return (0, _vue.createVNode)("div", {
          "class": bem('description')
        }, [content]);
      }
    };

    var renderOptions = () => {
      if (props.actions) {
        return props.actions.map(renderOption);
      }
    };

    return () => (0, _vue.createVNode)(_popup.Popup, (0, _vue.mergeProps)({
      "class": bem(),
      "round": props.round,
      "position": "bottom",
      "safeAreaInsetBottom": props.safeAreaInsetBottom
    }, (0, _utils.pick)(props, _shared.popupSharedPropKeys), {
      'onUpdate:show': updateShow
    }), {
      default: () => [renderHeader(), renderDescription(), (0, _vue.createVNode)("div", {
        "class": bem('content')
      }, [renderOptions(), slots.default == null ? void 0 : slots.default()]), renderCancel()]
    });
  }

});

exports.default = _default;