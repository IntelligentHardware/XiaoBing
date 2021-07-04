import { mergeProps as _mergeProps, Fragment as _Fragment, createVNode as _createVNode } from "vue";
import { ref, watch, nextTick, onMounted, onBeforeUnmount, defineComponent } from 'vue';
import { createPopper, offsetModifier } from '@vant/popperjs'; // Utils

import { pick, extend, truthProp, unknownProp, createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant'; // Composables

import { useClickAway } from '@vant/use'; // Components

import { Icon } from '../icon';
import { Popup } from '../popup';
var [name, bem] = createNamespace('popover');
var popupProps = ['show', 'overlay', 'duration', 'teleport', 'overlayStyle', 'overlayClass', 'closeOnClickOverlay'];
export default defineComponent({
  name,
  props: {
    show: Boolean,
    overlay: Boolean,
    duration: [Number, String],
    overlayClass: unknownProp,
    overlayStyle: Object,
    closeOnClickAction: truthProp,
    closeOnClickOverlay: truthProp,
    closeOnClickOutside: truthProp,
    offset: {
      type: Array,
      default: () => [0, 8]
    },
    theme: {
      type: String,
      default: 'light'
    },
    trigger: {
      type: String,
      default: 'click'
    },
    actions: {
      type: Array,
      default: () => []
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    teleport: {
      type: [String, Object],
      default: 'body'
    }
  },
  emits: ['select', 'touchstart', 'update:show'],

  setup(props, {
    emit,
    slots,
    attrs
  }) {
    var popper;
    var wrapperRef = ref();
    var popoverRef = ref();

    var createPopperInstance = () => {
      return createPopper(wrapperRef.value, popoverRef.value.popupRef.value, {
        placement: props.placement,
        modifiers: [{
          name: 'computeStyles',
          options: {
            adaptive: false,
            gpuAcceleration: false
          }
        }, extend({}, offsetModifier, {
          options: {
            offset: props.offset
          }
        })]
      });
    };

    var updateLocation = () => {
      nextTick(() => {
        if (!props.show) {
          return;
        }

        if (!popper) {
          popper = createPopperInstance();
        } else {
          popper.setOptions({
            placement: props.placement
          });
        }
      });
    };

    var updateShow = value => emit('update:show', value);

    var onClickWrapper = () => {
      if (props.trigger === 'click') {
        updateShow(!props.show);
      }
    };

    var onTouchstart = event => {
      event.stopPropagation();
      emit('touchstart', event);
    };

    var onClickAction = (action, index) => {
      if (action.disabled) {
        return;
      }

      emit('select', action, index);

      if (props.closeOnClickAction) {
        updateShow(false);
      }
    };

    var onClickAway = () => {
      if (props.closeOnClickOutside && (!props.overlay || props.closeOnClickOverlay)) {
        updateShow(false);
      }
    };

    var renderAction = (action, index) => {
      var {
        icon,
        text,
        color,
        disabled,
        className
      } = action;
      return _createVNode("div", {
        "role": "menuitem",
        "class": [bem('action', {
          disabled,
          'with-icon': icon
        }), className],
        "style": {
          color
        },
        "onClick": () => onClickAction(action, index)
      }, [icon && _createVNode(Icon, {
        "name": icon,
        "class": bem('action-icon')
      }, null), _createVNode("div", {
        "class": [bem('action-text'), BORDER_BOTTOM]
      }, [text])]);
    };

    onMounted(updateLocation);
    onBeforeUnmount(() => {
      if (popper) {
        popper.destroy();
        popper = null;
      }
    });
    watch(() => [props.show, props.placement], updateLocation);
    useClickAway(wrapperRef, onClickAway, {
      eventName: 'touchstart'
    });
    return () => _createVNode(_Fragment, null, [_createVNode("span", {
      "ref": wrapperRef,
      "class": bem('wrapper'),
      "onClick": onClickWrapper
    }, [slots.reference == null ? void 0 : slots.reference()]), _createVNode(Popup, _mergeProps({
      "ref": popoverRef,
      "class": bem([props.theme]),
      "position": '',
      "transition": "van-popover-zoom",
      "lockScroll": false,
      "onTouchstart": onTouchstart
    }, attrs, pick(props, popupProps), {
      'onUpdate:show': updateShow
    }), {
      default: () => [_createVNode("div", {
        "class": bem('arrow')
      }, null), _createVNode("div", {
        "role": "menu",
        "class": bem('content')
      }, [slots.default ? slots.default() : props.actions.map(renderAction)])]
    })]);
  }

});