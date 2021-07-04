"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _interceptor = require("../utils/interceptor");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _icon = require("../icon");

var _swipe = require("../swipe");

var _popup = require("../popup");

var _ImagePreviewItem = _interopRequireDefault(require("./ImagePreviewItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('image-preview');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    show: Boolean,
    loop: _utils.truthProp,
    overlay: _utils.truthProp,
    closeable: Boolean,
    showIndex: _utils.truthProp,
    className: _utils.unknownProp,
    transition: String,
    beforeClose: Function,
    overlayStyle: Object,
    showIndicators: Boolean,
    closeOnPopstate: _utils.truthProp,
    images: {
      type: Array,
      default: () => []
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3
    },
    maxZoom: {
      type: [Number, String],
      default: 3
    },
    swipeDuration: {
      type: [Number, String],
      default: 300
    },
    startPosition: {
      type: [Number, String],
      default: 0
    },
    closeIcon: {
      type: String,
      default: 'clear'
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    }
  },
  emits: ['scale', 'close', 'closed', 'change', 'update:show'],

  setup(props, {
    emit,
    slots
  }) {
    var swipeRef = (0, _vue.ref)();
    var windowSize = (0, _use.useWindowSize)();
    var state = (0, _vue.reactive)({
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    });

    var resize = () => {
      if (swipeRef.value) {
        var rect = swipeRef.value.$el.getBoundingClientRect();
        state.rootWidth = rect.width;
        state.rootHeight = rect.height;
        swipeRef.value.resize();
      }
    };

    var emitScale = args => emit('scale', args);

    var updateShow = show => emit('update:show', show);

    var emitClose = () => {
      (0, _interceptor.callInterceptor)({
        interceptor: props.beforeClose,
        args: [state.active],
        done: () => updateShow(false)
      });
    };

    var setActive = active => {
      if (active !== state.active) {
        state.active = active;
        emit('change', active);
      }
    };

    var renderIndex = () => {
      if (props.showIndex) {
        return (0, _vue.createVNode)("div", {
          "class": bem('index')
        }, [slots.index ? slots.index({
          index: state.active
        }) : state.active + 1 + " / " + props.images.length]);
      }
    };

    var renderCover = () => {
      if (slots.cover) {
        return (0, _vue.createVNode)("div", {
          "class": bem('cover')
        }, [slots.cover()]);
      }
    };

    var renderImages = () => (0, _vue.createVNode)(_swipe.Swipe, {
      "ref": swipeRef,
      "lazyRender": true,
      "loop": props.loop,
      "class": bem('swipe'),
      "duration": props.swipeDuration,
      "initialSwipe": props.startPosition,
      "showIndicators": props.showIndicators,
      "indicatorColor": "white",
      "onChange": setActive
    }, {
      default: () => [props.images.map(image => (0, _vue.createVNode)(_ImagePreviewItem.default, {
        "src": image,
        "show": props.show,
        "active": state.active,
        "maxZoom": props.maxZoom,
        "minZoom": props.minZoom,
        "rootWidth": state.rootWidth,
        "rootHeight": state.rootHeight,
        "onScale": emitScale,
        "onClose": emitClose
      }, null))]
    });

    var renderClose = () => {
      if (props.closeable) {
        return (0, _vue.createVNode)(_icon.Icon, {
          "role": "button",
          "name": props.closeIcon,
          "class": bem('close-icon', props.closeIconPosition),
          "onClick": emitClose
        }, null);
      }
    };

    var onClosed = () => emit('closed');

    var swipeTo = (index, options) => {
      var _swipeRef$value;

      return (_swipeRef$value = swipeRef.value) == null ? void 0 : _swipeRef$value.swipeTo(index, options);
    };

    (0, _useExpose.useExpose)({
      swipeTo
    });
    (0, _vue.onMounted)(resize);
    (0, _vue.watch)([windowSize.width, windowSize.height], resize);
    (0, _vue.watch)(() => props.startPosition, value => setActive(+value));
    (0, _vue.watch)(() => props.show, value => {
      var {
        images,
        startPosition
      } = props;

      if (value) {
        setActive(+startPosition);
        (0, _vue.nextTick)(() => {
          resize();
          swipeTo(+startPosition, {
            immediate: true
          });
        });
      } else {
        emit('close', {
          index: state.active,
          url: images[state.active]
        });
      }
    });
    return () => (0, _vue.createVNode)(_popup.Popup, (0, _vue.mergeProps)({
      "class": [bem(), props.className],
      "overlayClass": bem('overlay'),
      "onClosed": onClosed
    }, (0, _utils.pick)(props, ['show', 'transition', 'overlayStyle', 'closeOnPopstate']), {
      'onUpdate:show': updateShow
    }), {
      default: () => [renderClose(), renderImages(), renderIndex(), renderCover()]
    });
  }

});

exports.default = _default;