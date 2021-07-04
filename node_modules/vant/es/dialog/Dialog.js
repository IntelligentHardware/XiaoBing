import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { reactive, defineComponent } from 'vue'; // Utils

import { callInterceptor } from '../utils/interceptor';
import { pick, extend, addUnit, truthProp, isFunction, unknownProp, createNamespace } from '../utils';
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant';
import { popupSharedProps, popupSharedPropKeys } from '../popup/shared'; // Components

import { Popup } from '../popup';
import { Button } from '../button';
import { ActionBar } from '../action-bar';
import { ActionBarButton } from '../action-bar-button';
var [name, bem, t] = createNamespace('dialog');
var popupKeys = [...popupSharedPropKeys, 'transition', 'closeOnPopstate'];
export default defineComponent({
  name,
  props: extend({}, popupSharedProps, {
    title: String,
    theme: String,
    width: [Number, String],
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: unknownProp,
    beforeClose: Function,
    messageAlign: String,
    closeOnPopstate: truthProp,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showConfirmButton: truthProp,
    closeOnClickOverlay: Boolean,
    transition: {
      type: String,
      default: 'van-dialog-bounce'
    }
  }),
  emits: ['confirm', 'cancel', 'update:show'],

  setup(props, {
    emit,
    slots
  }) {
    var loading = reactive({
      confirm: false,
      cancel: false
    });

    var updateShow = value => emit('update:show', value);

    var close = action => {
      updateShow(false);

      if (props.callback) {
        props.callback(action);
      }
    };

    var getActionHandler = action => () => {
      // should not trigger close event when hidden
      if (!props.show) {
        return;
      }

      emit(action);

      if (props.beforeClose) {
        loading[action] = true;
        callInterceptor({
          interceptor: props.beforeClose,
          args: [action],

          done() {
            close(action);
            loading[action] = false;
          },

          canceled() {
            loading[action] = false;
          }

        });
      } else {
        close(action);
      }
    };

    var onCancel = getActionHandler('cancel');
    var onConfirm = getActionHandler('confirm');

    var renderTitle = () => {
      var title = slots.title ? slots.title() : props.title;

      if (title) {
        return _createVNode("div", {
          "class": bem('header', {
            isolated: !props.message && !slots.default
          })
        }, [title]);
      }
    };

    var renderMessage = hasTitle => {
      var {
        message,
        allowHtml,
        messageAlign
      } = props;
      var classNames = bem('message', {
        'has-title': hasTitle,
        [messageAlign]: messageAlign
      });

      if (allowHtml && typeof message === 'string') {
        return _createVNode("div", {
          "class": classNames,
          "innerHTML": message
        }, null);
      }

      return _createVNode("div", {
        "class": classNames
      }, [isFunction(message) ? message() : message]);
    };

    var renderContent = () => {
      if (slots.default) {
        return _createVNode("div", {
          "class": bem('content')
        }, [slots.default()]);
      }

      var {
        title,
        message,
        allowHtml
      } = props;

      if (message) {
        var hasTitle = !!(title || slots.title);
        return _createVNode("div", {
          "key": allowHtml ? 1 : 0,
          "class": bem('content', {
            isolated: !hasTitle
          })
        }, [renderMessage(hasTitle)]);
      }
    };

    var renderButtons = () => _createVNode("div", {
      "class": [BORDER_TOP, bem('footer')]
    }, [props.showCancelButton && _createVNode(Button, {
      "size": "large",
      "text": props.cancelButtonText || t('cancel'),
      "class": bem('cancel'),
      "style": {
        color: props.cancelButtonColor
      },
      "loading": loading.cancel,
      "onClick": onCancel
    }, null), props.showConfirmButton && _createVNode(Button, {
      "size": "large",
      "text": props.confirmButtonText || t('confirm'),
      "class": [bem('confirm'), {
        [BORDER_LEFT]: props.showCancelButton
      }],
      "style": {
        color: props.confirmButtonColor
      },
      "loading": loading.confirm,
      "onClick": onConfirm
    }, null)]);

    var renderRoundButtons = () => _createVNode(ActionBar, {
      "class": bem('footer')
    }, {
      default: () => [props.showCancelButton && _createVNode(ActionBarButton, {
        "type": "warning",
        "text": props.cancelButtonText || t('cancel'),
        "class": bem('cancel'),
        "color": props.cancelButtonColor,
        "loading": loading.cancel,
        "onClick": onCancel
      }, null), props.showConfirmButton && _createVNode(ActionBarButton, {
        "type": "danger",
        "text": props.confirmButtonText || t('confirm'),
        "class": bem('confirm'),
        "color": props.confirmButtonColor,
        "loading": loading.confirm,
        "onClick": onConfirm
      }, null)]
    });

    var renderFooter = () => {
      if (slots.footer) {
        return slots.footer();
      }

      return props.theme === 'round-button' ? renderRoundButtons() : renderButtons();
    };

    return () => {
      var {
        width,
        title,
        theme,
        message,
        className
      } = props;
      return _createVNode(Popup, _mergeProps({
        "role": "dialog",
        "class": [bem([theme]), className],
        "style": {
          width: addUnit(width)
        },
        "aria-labelledby": title || message
      }, pick(props, popupKeys), {
        'onUpdate:show': updateShow
      }), {
        default: () => [renderTitle(), renderContent(), renderFooter()]
      });
    };
  }

});