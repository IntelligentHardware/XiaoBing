import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { watch, onMounted, onUnmounted, defineComponent } from 'vue'; // Utils

import { createNamespace, isDef, unknownProp } from '../utils';
import { lockClick } from './lock-click'; // Components

import { Icon } from '../icon';
import { Popup } from '../popup';
import { Loading } from '../loading';
var [name, bem] = createNamespace('toast');
export default defineComponent({
  name,
  props: {
    icon: String,
    show: Boolean,
    overlay: Boolean,
    message: [Number, String],
    iconSize: [Number, String],
    className: unknownProp,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: unknownProp,
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
        lockClick(clickable);
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
        return _createVNode(Icon, {
          "name": icon || type,
          "size": iconSize,
          "class": bem('icon'),
          "classPrefix": iconPrefix
        }, null);
      }

      if (type === 'loading') {
        return _createVNode(Loading, {
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

      if (isDef(message) && message !== '') {
        return type === 'html' ? _createVNode("div", {
          "class": bem('text'),
          "innerHTML": String(message)
        }, null) : _createVNode("div", {
          "class": bem('text')
        }, [message]);
      }
    };

    watch(() => [props.show, props.forbidClick], toggleClickable);
    watch(() => [props.show, props.duration], () => {
      clearTimer();

      if (props.show && props.duration > 0) {
        timer = setTimeout(() => {
          updateShow(false);
        }, props.duration);
      }
    });
    onMounted(toggleClickable);
    onUnmounted(toggleClickable);
    return () => _createVNode(Popup, _mergeProps({
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