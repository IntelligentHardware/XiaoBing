"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var [name, bem] = (0, _utils.createNamespace)('password-input');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    info: String,
    mask: _utils.truthProp,
    gutter: [Number, String],
    focused: Boolean,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: [Number, String],
      default: 6
    }
  },
  emits: ['focus'],

  setup(props, {
    emit
  }) {
    var onTouchStart = event => {
      event.stopPropagation();
      emit('focus', event);
    };

    var renderPoints = () => {
      var Points = [];
      var {
        mask,
        value,
        length,
        gutter,
        focused
      } = props;

      for (var i = 0; i < length; i++) {
        var char = value[i];
        var showBorder = i !== 0 && !gutter;
        var showCursor = focused && i === value.length;
        var style = void 0;

        if (i !== 0 && gutter) {
          style = {
            marginLeft: (0, _utils.addUnit)(gutter)
          };
        }

        Points.push((0, _vue.createVNode)("li", {
          "class": [{
            [_constant.BORDER_LEFT]: showBorder
          }, bem('item', {
            focus: showCursor
          })],
          "style": style
        }, [mask ? (0, _vue.createVNode)("i", {
          "style": {
            visibility: char ? 'visible' : 'hidden'
          }
        }, null) : char, showCursor && (0, _vue.createVNode)("div", {
          "class": bem('cursor')
        }, null)]));
      }

      return Points;
    };

    return () => {
      var info = props.errorInfo || props.info;
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(0, _vue.createVNode)("ul", {
        "class": [bem('security'), {
          [_constant.BORDER_SURROUND]: !props.gutter
        }],
        "onTouchstart": onTouchStart
      }, [renderPoints()]), info && (0, _vue.createVNode)("div", {
        "class": bem(props.errorInfo ? 'error-info' : 'info')
      }, [info])]);
    };
  }

});

exports.default = _default;