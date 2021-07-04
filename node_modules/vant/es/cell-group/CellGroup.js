import { Fragment as _Fragment, createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
import { defineComponent } from 'vue';
import { truthProp, createNamespace } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
var [name, bem] = createNamespace('cell-group');
export default defineComponent({
  name,
  inheritAttrs: false,
  props: {
    title: String,
    border: truthProp
  },

  setup(props, {
    slots,
    attrs
  }) {
    var renderGroup = () => _createVNode("div", _mergeProps({
      "class": [bem(), {
        [BORDER_TOP_BOTTOM]: props.border
      }]
    }, attrs), [slots.default == null ? void 0 : slots.default()]);

    var renderTitle = () => _createVNode("div", {
      "class": bem('title')
    }, [slots.title ? slots.title() : props.title]);

    return () => {
      if (props.title || slots.title) {
        return _createVNode(_Fragment, null, [renderTitle(), renderGroup()]);
      }

      return renderGroup();
    };
  }

});