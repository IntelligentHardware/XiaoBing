"use strict";

exports.__esModule = true;
exports.default = exports.TABBAR_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _interceptor = require("../utils/interceptor");

var _use = require("@vant/use");

var _usePlaceholder = require("../composables/use-placeholder");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('tabbar');
var TABBAR_KEY = Symbol(name);
exports.TABBAR_KEY = TABBAR_KEY;
var props = {
  route: Boolean,
  fixed: _utils.truthProp,
  border: _utils.truthProp,
  zIndex: [Number, String],
  placeholder: Boolean,
  activeColor: String,
  beforeChange: Function,
  inactiveColor: String,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: null
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
    var root = (0, _vue.ref)();
    var {
      linkChildren
    } = (0, _use.useChildren)(TABBAR_KEY);
    var renderPlaceholder = (0, _usePlaceholder.usePlaceholder)(root, bem); // enable safe-area-inset-bottom by default when fixed

    var isUnfit = () => {
      var _props$safeAreaInsetB;

      return !((_props$safeAreaInsetB = props.safeAreaInsetBottom) != null ? _props$safeAreaInsetB : props.fixed);
    };

    var renderTabbar = () => {
      var {
        fixed,
        zIndex,
        border
      } = props;
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "style": (0, _utils.getZIndexStyle)(zIndex),
        "class": [bem({
          unfit: isUnfit(),
          fixed
        }), {
          [_constant.BORDER_TOP_BOTTOM]: border
        }]
      }, [slots.default == null ? void 0 : slots.default()]);
    };

    var setActive = active => {
      if (active !== props.modelValue) {
        (0, _interceptor.callInterceptor)({
          interceptor: props.beforeChange,
          args: [active],

          done() {
            emit('update:modelValue', active);
            emit('change', active);
          }

        });
      }
    };

    linkChildren({
      props,
      setActive
    });
    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderTabbar);
      }

      return renderTabbar();
    };
  }

});

exports.default = _default;