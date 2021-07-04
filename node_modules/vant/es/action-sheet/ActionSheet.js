import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { nextTick, defineComponent } from 'vue'; // Utils

import { pick, extend, truthProp, createNamespace } from '../utils'; // Components

import { Icon } from '../icon';
import { Popup } from '../popup';
import { Loading } from '../loading';
import { popupSharedProps, popupSharedPropKeys } from '../popup/shared';
var [name, bem] = createNamespace('action-sheet');
export default defineComponent({
  name,
  props: extend({}, popupSharedProps, {
    title: String,
    round: truthProp,
    actions: Array,
    closeable: truthProp,
    cancelText: String,
    description: String,
    closeOnPopstate: Boolean,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: truthProp,
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
        return _createVNode("div", {
          "class": bem('header')
        }, [props.title, props.closeable && _createVNode(Icon, {
          "name": props.closeIcon,
          "class": bem('close'),
          "onClick": onCancel
        }, null)]);
      }
    };

    var renderCancel = () => {
      if (slots.cancel || props.cancelText) {
        return [_createVNode("div", {
          "class": bem('gap')
        }, null), _createVNode("button", {
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
      var Content = loading ? _createVNode(Loading, {
        "class": bem('loading-icon')
      }, null) : [_createVNode("span", {
        "class": bem('name')
      }, [name]), subname && _createVNode("div", {
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

        nextTick(() => emit('select', item, index));
      };

      return _createVNode("button", {
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
        return _createVNode("div", {
          "class": bem('description')
        }, [content]);
      }
    };

    var renderOptions = () => {
      if (props.actions) {
        return props.actions.map(renderOption);
      }
    };

    return () => _createVNode(Popup, _mergeProps({
      "class": bem(),
      "round": props.round,
      "position": "bottom",
      "safeAreaInsetBottom": props.safeAreaInsetBottom
    }, pick(props, popupSharedPropKeys), {
      'onUpdate:show': updateShow
    }), {
      default: () => [renderHeader(), renderDescription(), _createVNode("div", {
        "class": bem('content')
      }, [renderOptions(), slots.default == null ? void 0 : slots.default()]), renderCancel()]
    });
  }

});