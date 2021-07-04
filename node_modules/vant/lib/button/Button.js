"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _useRoute = require("../composables/use-route");

var _icon = require("../icon");

var _loading = require("../loading");

// Utils
// Components
var [name, bem] = (0, _utils.createNamespace)('button');

var _default = (0, _vue.defineComponent)({
  name,
  props: (0, _utils.extend)({}, _useRoute.routeProps, {
    text: String,
    icon: String,
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    loadingSize: String,
    loadingText: String,
    loadingType: String,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    iconPosition: {
      type: String,
      default: 'left'
    }
  }),
  emits: ['click'],

  setup(props, {
    emit,
    slots
  }) {
    var route = (0, _useRoute.useRoute)();

    var renderLoadingIcon = () => {
      if (slots.loading) {
        return slots.loading();
      }

      return (0, _vue.createVNode)(_loading.Loading, {
        "size": props.loadingSize,
        "type": props.loadingType,
        "class": bem('loading')
      }, null);
    };

    var renderIcon = () => {
      if (props.loading) {
        return renderLoadingIcon();
      }

      if (props.icon) {
        return (0, _vue.createVNode)(_icon.Icon, {
          "name": props.icon,
          "class": bem('icon'),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };

    var renderText = () => {
      var text;

      if (props.loading) {
        text = props.loadingText;
      } else {
        text = slots.default ? slots.default() : props.text;
      }

      if (text) {
        return (0, _vue.createVNode)("span", {
          "class": bem('text')
        }, [text]);
      }
    };

    var getStyle = () => {
      var {
        color,
        plain
      } = props;

      if (color) {
        var style = {
          color: plain ? color : 'white'
        };

        if (!plain) {
          // Use background instead of backgroundColor to make linear-gradient work
          style.background = color;
        } // hide border when color is linear-gradient


        if (color.includes('gradient')) {
          style.border = 0;
        } else {
          style.borderColor = color;
        }

        return style;
      }
    };

    var onClick = event => {
      if (props.loading) {
        event.preventDefault();
      } else if (!props.disabled) {
        emit('click', event);
        route();
      }
    };

    return () => {
      var {
        tag,
        type,
        size,
        block,
        round,
        plain,
        square,
        loading,
        disabled,
        hairline,
        nativeType,
        iconPosition
      } = props;
      var classes = [bem([type, size, {
        plain,
        block,
        round,
        square,
        loading,
        disabled,
        hairline
      }]), {
        [_constant.BORDER_SURROUND]: hairline
      }];
      return (0, _vue.createVNode)(tag, {
        "type": nativeType,
        "class": classes,
        "style": getStyle(),
        "disabled": disabled,
        "onClick": onClick
      }, {
        default: () => [(0, _vue.createVNode)("div", {
          "class": bem('content')
        }, [iconPosition === 'left' && renderIcon(), renderText(), iconPosition === 'right' && renderIcon()])]
      });
    };
  }

});

exports.default = _default;