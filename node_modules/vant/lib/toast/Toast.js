"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _lockClick = require("./lock-click");

var _icon = require("../icon");

var _popup = require("../popup");

var _loading = require("../loading");

// Utils
// Components
var [name, bem] = (0, _utils.createNamespace)('toast');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    icon: String,
    show: Boolean,
    overlay: Boolean,
    message: [Number, String],
    iconSize: [Number, String],
    className: _utils.unknownProp,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: _utils.unknownProp,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    duration: {
      type: Number,
      default: 2000
    },
    position: {
      type: String,
      default: 'middle'
    },
    transition: {
      type: String,
      default: 'van-fade'
    }
  },
  emits: ['update:show'],

  setup(props, {
    emit
  }) {
    var timer;
    var clickable = false;

    var toggleClickable = () => {
      var newValue = props.show && props.forbidClick;

      if (clickable !== newValue) {
        clickable = newValue;
        (0, _lockClick.lockClick)(clickable);
      }
    };

    var updateShow = show => emit('update:show', show);

    var onClick = () => {
      if (props.closeOnClick) {
        updateShow(false);
      }
    };

    var clearTimer = () => {
      clearTimeout(timer);
    };

    var renderIcon = () => {
      var {
        icon,
        type,
        iconSize,
        iconPrefix,
        loadingType
      } = props;
      var hasIcon = icon || type === 'success' || type === 'fail';

      if (hasIcon) {
        return (0, _vue.createVNode)(_icon.Icon, {
          "name": icon || type,
          "size": iconSize,
          "class": bem('icon'),
          "classPrefix": iconPrefix
        }, null);
      }

      if (type === 'loading') {
        return (0, _vue.createVNode)(_loading.Loading, {
          "class": bem('loading'),
          "size": iconSize,
          "type": loadingType
        }, null);
      }
    };

    var renderMessage = () => {
      var {
        type,
        message
      } = props;

      if ((0, _utils.isDef)(message) && message !== '') {
        return type === 'html' ? (0, _vue.createVNode)("div", {
          "class": bem('text'),
          "innerHTML": String(message)
        }, null) : (0, _vue.createVNode)("div", {
          "class": bem('text')
        }, [message]);
      }
    };

    (0, _vue.watch)(() => [props.show, props.forbidClick], toggleClickable);
    (0, _vue.watch)(() => [props.show, props.duration], () => {
      clearTimer();

      if (props.show && props.duration > 0) {
        timer = setTimeout(() => {
          updateShow(false);
        }, props.duration);
      }
    });
    (0, _vue.onMounted)(toggleClickable);
    (0, _vue.onUnmounted)(toggleClickable);
    return () => (0, _vue.createVNode)(_popup.Popup, (0, _vue.mergeProps)({
      "show": props.show,
      "class": [bem([props.position, {
        [props.type]: !props.icon
      }]), props.className],
      "overlay": props.overlay,
      "lockScroll": false,
      "transition": props.transition,
      "overlayClass": props.overlayClass,
      "overlayStyle": props.overlayStyle,
      "closeOnClickOverlay": props.closeOnClickOverlay,
      "onClick": onClick,
      "onClosed": clearTimer
    }, {
      'onUpdate:show': updateShow
    }), {
      default: () => [renderIcon(), renderMessage()]
    });
  }

});

exports.default = _default;