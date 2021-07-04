import { mergeProps as _mergeProps, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { ref, defineComponent } from 'vue'; // Utils

import { pick, extend, truthProp, createNamespace, preventDefault } from '../utils';
import { fieldProps } from '../field/Field'; // Composables

import { useExpose } from '../composables/use-expose'; // Components

import { Field } from '../field';
var [name, bem, t] = createNamespace('search');
export default defineComponent({
  name,
  props: extend({}, fieldProps, {
    label: String,
    clearable: truthProp,
    actionText: String,
    background: String,
    showAction: Boolean,
    shape: {
      type: String,
      default: 'square'
    },
    leftIcon: {
      type: String,
      default: 'search'
    }
  }),
  emits: ['search', 'cancel', 'update:modelValue'],

  setup(props, {
    emit,
    slots,
    attrs
  }) {
    var filedRef = ref();

    var onCancel = () => {
      if (!slots.action) {
        emit('update:modelValue', '');
        emit('cancel');
      }
    };

    var onKeypress = event => {
      var ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        preventDefault(event);
        emit('search', props.modelValue);
      }
    };

    var renderLabel = () => {
      if (slots.label || props.label) {
        return _createVNode("div", {
          "class": bem('label')
        }, [slots.label ? slots.label() : props.label]);
      }
    };

    var renderAction = () => {
      if (props.showAction) {
        var text = props.actionText || t('cancel');
        return _createVNode("div", {
          "class": bem('action'),
          "role": "button",
          "tabindex": 0,
          "onClick": onCancel
        }, [slots.action ? slots.action() : text]);
      }
    };

    var blur = () => {
      var _filedRef$value;

      return (_filedRef$value = filedRef.value) == null ? void 0 : _filedRef$value.blur();
    };

    var focus = () => {
      var _filedRef$value2;

      return (_filedRef$value2 = filedRef.value) == null ? void 0 : _filedRef$value2.focus();
    };

    var fieldPropNames = Object.keys(fieldProps);

    var renderField = () => {
      var fieldAttrs = extend({}, attrs, pick(props, fieldPropNames));

      var onInput = value => emit('update:modelValue', value);

      return _createVNode(Field, _mergeProps({
        "ref": filedRef,
        "type": "search",
        "border": false,
        "onKeypress": onKeypress
      }, fieldAttrs, {
        'onUpdate:modelValue': onInput
      }), pick(slots, ['left-icon', 'right-icon']));
    };

    useExpose({
      focus,
      blur
    });
    return () => _createVNode("div", {
      "class": bem({
        'show-action': props.showAction
      }),
      "style": {
        background: props.background
      }
    }, [slots.left == null ? void 0 : slots.left(), _createVNode("div", {
      "class": bem('content', props.shape)
    }, [renderLabel(), renderField()]), renderAction()]);
  }

});