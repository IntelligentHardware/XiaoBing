import { createVNode as _createVNode } from "vue";
import { ref, defineComponent } from 'vue'; // Utils

import { truthProp, createNamespace, getZIndexStyle } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { callInterceptor } from '../utils/interceptor'; // Composables

import { useChildren } from '@vant/use';
import { usePlaceholder } from '../composables/use-placeholder';
var [name, bem] = createNamespace('tabbar');
export var TABBAR_KEY = Symbol(name);
var props = {
  route: Boolean,
  fixed: truthProp,
  border: truthProp,
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
export default defineComponent({
  name,
  props,
  emits: ['change', 'update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var root = ref();
    var {
      linkChildren
    } = useChildren(TABBAR_KEY);
    var renderPlaceholder = usePlaceholder(root, bem); // enable safe-area-inset-bottom by default when fixed

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
      return _createVNode("div", {
        "ref": root,
        "style": getZIndexStyle(zIndex),
        "class": [bem({
          unfit: isUnfit(),
          fixed
        }), {
          [BORDER_TOP_BOTTOM]: border
        }]
      }, [slots.default == null ? void 0 : slots.default()]);
    };

    var setActive = active => {
      if (active !== props.modelValue) {
        callInterceptor({
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