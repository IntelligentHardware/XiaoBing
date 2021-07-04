import { resolveDirective as _resolveDirective, createTextVNode as _createTextVNode, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { ref, watch, provide, computed, nextTick, reactive, onMounted, defineComponent } from 'vue'; // Utils

import { isDef, extend, addUnit, unknownProp, resetScroll, formatNumber, preventDefault, createNamespace } from '../utils';
import { runSyncRule, endComposing, mapInputType, startComposing, getRuleMessage, resizeTextarea, runRuleValidator } from './utils';
import { cellProps } from '../cell/Cell'; // Composables

import { useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { FORM_KEY, FIELD_KEY } from '../composables/use-link-field'; // Components

import { Icon } from '../icon';
import { Cell } from '../cell'; // Types

var [name, bem] = createNamespace('field'); // provide to Search component to inherit

export var fieldProps = {
  formatter: Function,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: [Number, String],
  inputAlign: String,
  placeholder: String,
  errorMessage: String,
  error: {
    type: Boolean,
    default: null
  },
  disabled: {
    type: Boolean,
    default: null
  },
  readonly: {
    type: Boolean,
    default: null
  },
  clearIcon: {
    type: String,
    default: 'clear'
  },
  modelValue: {
    type: [Number, String],
    default: ''
  },
  clearTrigger: {
    type: String,
    default: 'focus'
  },
  formatTrigger: {
    type: String,
    default: 'onChange'
  }
};
export default defineComponent({
  name,
  props: extend({}, cellProps, fieldProps, {
    rows: [Number, String],
    name: String,
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: [Number, String],
    labelClass: unknownProp,
    labelAlign: String,
    autocomplete: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    type: {
      type: String,
      default: 'text'
    },
    colon: {
      type: Boolean,
      default: null
    }
  }),
  emits: ['blur', 'focus', 'clear', 'keypress', 'click-input', 'click-left-icon', 'click-right-icon', 'update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var state = reactive({
      focused: false,
      validateFailed: false,
      validateMessage: ''
    });
    var inputRef = ref();
    var childFieldValue = ref();
    var {
      parent: form
    } = useParent(FORM_KEY);

    var getModelValue = () => {
      var _props$modelValue;

      return String((_props$modelValue = props.modelValue) != null ? _props$modelValue : '');
    };

    var getProp = key => {
      if (isDef(props[key])) {
        return props[key];
      }

      if (form && isDef(form.props[key])) {
        return form.props[key];
      }
    };

    var showClear = computed(() => {
      var readonly = getProp('readonly');

      if (props.clearable && !readonly) {
        var hasValue = getModelValue() !== '';
        var trigger = props.clearTrigger === 'always' || props.clearTrigger === 'focus' && state.focused;
        return hasValue && trigger;
      }

      return false;
    });
    var formValue = computed(() => {
      if (childFieldValue.value && slots.input) {
        return childFieldValue.value();
      }

      return props.modelValue;
    });

    var runRules = rules => rules.reduce((promise, rule) => promise.then(() => {
      if (state.validateFailed) {
        return;
      }

      var {
        value
      } = formValue;

      if (rule.formatter) {
        value = rule.formatter(value, rule);
      }

      if (!runSyncRule(value, rule)) {
        state.validateFailed = true;
        state.validateMessage = getRuleMessage(value, rule);
        return;
      }

      if (rule.validator) {
        return runRuleValidator(value, rule).then(result => {
          if (result && typeof result === 'string') {
            state.validateFailed = true;
            state.validateMessage = result;
          } else if (result === false) {
            state.validateFailed = true;
            state.validateMessage = getRuleMessage(value, rule);
          }
        });
      }
    }), Promise.resolve());

    var resetValidation = () => {
      if (state.validateFailed) {
        state.validateFailed = false;
        state.validateMessage = '';
      }
    };

    var validate = (rules = props.rules) => new Promise(resolve => {
      resetValidation();

      if (rules) {
        runRules(rules).then(() => {
          if (state.validateFailed) {
            resolve({
              name: props.name,
              message: state.validateMessage
            });
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });

    var validateWithTrigger = trigger => {
      if (form && props.rules) {
        var defaultTrigger = form.props.validateTrigger === trigger;
        var rules = props.rules.filter(rule => {
          if (rule.trigger) {
            return rule.trigger === trigger;
          }

          return defaultTrigger;
        });

        if (rules.length) {
          validate(rules);
        }
      }
    }; // native maxlength have incorrect line-break counting
    // see: https://github.com/youzan/vant/issues/5033


    var limitValueLength = value => {
      var {
        maxlength
      } = props;

      if (isDef(maxlength) && value.length > maxlength) {
        var modelValue = getModelValue();

        if (modelValue && modelValue.length === +maxlength) {
          return modelValue;
        }

        return value.slice(0, +maxlength);
      }

      return value;
    };

    var updateValue = (value, trigger = 'onChange') => {
      value = limitValueLength(value);

      if (props.type === 'number' || props.type === 'digit') {
        var isNumber = props.type === 'number';
        value = formatNumber(value, isNumber, isNumber);
      }

      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }

      if (inputRef.value && inputRef.value.value !== value) {
        inputRef.value.value = value;
      }

      if (value !== props.modelValue) {
        emit('update:modelValue', value);
      }
    };

    var onInput = event => {
      // skip update value when composing
      if (!event.target.composing) {
        updateValue(event.target.value);
      }
    };

    var blur = () => {
      var _inputRef$value;

      return (_inputRef$value = inputRef.value) == null ? void 0 : _inputRef$value.blur();
    };

    var focus = () => {
      var _inputRef$value2;

      return (_inputRef$value2 = inputRef.value) == null ? void 0 : _inputRef$value2.focus();
    };

    var onFocus = event => {
      state.focused = true;
      emit('focus', event); // readonly not work in legacy mobile safari

      var readonly = getProp('readonly');

      if (readonly) {
        blur();
      }
    };

    var onBlur = event => {
      state.focused = false;
      updateValue(getModelValue(), 'onBlur');
      emit('blur', event);
      validateWithTrigger('onBlur');
      resetScroll();
    };

    var onClickInput = event => emit('click-input', event);

    var onClickLeftIcon = event => emit('click-left-icon', event);

    var onClickRightIcon = event => emit('click-right-icon', event);

    var onClear = event => {
      preventDefault(event);
      emit('update:modelValue', '');
      emit('clear', event);
    };

    var showError = computed(() => {
      if (typeof props.error === 'boolean') {
        return props.error;
      }

      if (form && form.props.showError && state.validateFailed) {
        return true;
      }
    });
    var labelStyle = computed(() => {
      var labelWidth = getProp('labelWidth');

      if (labelWidth) {
        return {
          width: addUnit(labelWidth)
        };
      }
    });

    var onKeypress = event => {
      var ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        var submitOnEnter = form && form.props.submitOnEnter;

        if (!submitOnEnter && props.type !== 'textarea') {
          preventDefault(event);
        } // trigger blur after click keyboard search button


        if (props.type === 'search') {
          blur();
        }
      }

      emit('keypress', event);
    };

    var adjustTextareaSize = () => {
      var input = inputRef.value;

      if (props.type === 'textarea' && props.autosize && input) {
        resizeTextarea(input, props.autosize);
      }
    };

    var renderInput = () => {
      var inputAlign = getProp('inputAlign');

      if (slots.input) {
        return _createVNode("div", {
          "class": bem('control', [inputAlign, 'custom']),
          "onClick": onClickInput
        }, [slots.input()]);
      }

      var inputAttrs = {
        ref: inputRef,
        name: props.name,
        rows: props.rows !== undefined ? +props.rows : undefined,
        class: bem('control', inputAlign),
        value: props.modelValue,
        disabled: getProp('disabled'),
        readonly: getProp('readonly'),
        autofocus: props.autofocus,
        placeholder: props.placeholder,
        autocomplete: props.autocomplete,
        onBlur,
        onFocus,
        onInput,
        onClick: onClickInput,
        onChange: endComposing,
        onKeypress,
        onCompositionend: endComposing,
        onCompositionstart: startComposing
      };

      if (props.type === 'textarea') {
        return _createVNode("textarea", inputAttrs, null);
      }

      return _createVNode("input", _mergeProps(mapInputType(props.type), inputAttrs), null);
    };

    var renderLeftIcon = () => {
      var leftIconSlot = slots['left-icon'];

      if (props.leftIcon || leftIconSlot) {
        return _createVNode("div", {
          "class": bem('left-icon'),
          "onClick": onClickLeftIcon
        }, [leftIconSlot ? leftIconSlot() : _createVNode(Icon, {
          "name": props.leftIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };

    var renderRightIcon = () => {
      var rightIconSlot = slots['right-icon'];

      if (props.rightIcon || rightIconSlot) {
        return _createVNode("div", {
          "class": bem('right-icon'),
          "onClick": onClickRightIcon
        }, [rightIconSlot ? rightIconSlot() : _createVNode(Icon, {
          "name": props.rightIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };

    var renderWordLimit = () => {
      if (props.showWordLimit && props.maxlength) {
        var count = getModelValue().length;
        return _createVNode("div", {
          "class": bem('word-limit')
        }, [_createVNode("span", {
          "class": bem('word-num')
        }, [count]), _createTextVNode("/"), props.maxlength]);
      }
    };

    var renderMessage = () => {
      if (form && form.props.showErrorMessage === false) {
        return;
      }

      var message = props.errorMessage || state.validateMessage;

      if (message) {
        var errorMessageAlign = getProp('errorMessageAlign');
        return _createVNode("div", {
          "class": bem('error-message', errorMessageAlign)
        }, [message]);
      }
    };

    var renderLabel = () => {
      var colon = getProp('colon') ? ':' : '';

      if (slots.label) {
        return [slots.label(), colon];
      }

      if (props.label) {
        return _createVNode("span", null, [props.label + colon]);
      }
    };

    useExpose({
      blur,
      focus,
      validate,
      formValue,
      resetValidation
    });
    provide(FIELD_KEY, {
      childFieldValue,
      resetValidation,
      validateWithTrigger
    });
    watch(() => props.modelValue, () => {
      updateValue(getModelValue());
      resetValidation();
      validateWithTrigger('onChange');
      nextTick(adjustTextareaSize);
    });
    onMounted(() => {
      updateValue(getModelValue(), props.formatTrigger);
      nextTick(adjustTextareaSize);
    });
    return () => {
      var disabled = getProp('disabled');
      var labelAlign = getProp('labelAlign');
      var Label = renderLabel();
      var LeftIcon = renderLeftIcon();
      return _createVNode(Cell, {
        "size": props.size,
        "icon": props.leftIcon,
        "class": bem({
          error: showError.value,
          disabled,
          ["label-" + labelAlign]: labelAlign,
          'min-height': props.type === 'textarea' && !props.autosize
        }),
        "center": props.center,
        "border": props.border,
        "isLink": props.isLink,
        "required": props.required,
        "clickable": props.clickable,
        "titleStyle": labelStyle.value,
        "valueClass": bem('value'),
        "titleClass": [bem('label', labelAlign), props.labelClass],
        "arrowDirection": props.arrowDirection
      }, {
        default: () => [_createVNode("div", {
          "class": bem('body')
        }, [renderInput(), showClear.value && _createVNode(Icon, {
          "name": props.clearIcon,
          "class": bem('clear'),
          "onTouchstart": onClear
        }, null), renderRightIcon(), slots.button && _createVNode("div", {
          "class": bem('button')
        }, [slots.button()])]), renderWordLimit(), renderMessage()],
        icon: LeftIcon ? () => LeftIcon : null,
        title: Label ? () => Label : null,
        extra: slots.extra
      });
    };
  }

});