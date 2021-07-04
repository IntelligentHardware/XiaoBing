"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _useLazyRender = require("../composables/use-lazy-render");

var [name, bem] = (0, _utils.createNamespace)('overlay');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    show: Boolean,
    zIndex: [Number, String],
    duration: [Number, String],
    className: _utils.unknownProp,
    lockScroll: _utils.truthProp,
    customStyle: Object
  },

  setup(props, {
    slots
  }) {
    var lazyRender = (0, _useLazyRender.useLazyRender)(() => props.show);

    var preventTouchMove = event => {
      (0, _utils.preventDefault)(event, true);
    };

    var renderOverlay = lazyRender(() => {
      var style = (0, _utils.extend)((0, _utils.getZIndexStyle)(props.zIndex), props.customStyle);

      if ((0, _utils.isDef)(props.duration)) {
        style.animationDuration = props.duration + "s";
      }

      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "style": style,
        "class": [bem(), props.className],
        "onTouchmove": props.lockScroll ? preventTouchMove : _utils.noop
      }, [slots.default == null ? void 0 : slots.default()]), [[_vue.vShow, props.show]]);
    });
    return () => (0, _vue.createVNode)(_vue.Transition, {
      "name": "van-fade"
    }, {
      default: () => [renderOverlay()]
    });
  }

});

exports.default = _default;