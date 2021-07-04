import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace, addUnit, truthProp } from '../utils';
import { BORDER_TOP } from '../utils/constant';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('grid');
export var GRID_KEY = Symbol(name);
var props = {
  square: Boolean,
  center: truthProp,
  border: truthProp,
  gutter: [Number, String],
  iconSize: [Number, String],
  direction: String,
  clickable: Boolean,
  columnNum: {
    type: [Number, String],
    default: 4
  }
};
export default defineComponent({
  name,
  props,

  setup(props, {
    slots
  }) {
    var {
      linkChildren
    } = useChildren(GRID_KEY);
    linkChildren({
      props
    });
    return () => _createVNode("div", {
      "style": {
        paddingLeft: addUnit(props.gutter)
      },
      "class": [bem(), {
        [BORDER_TOP]: props.border && !props.gutter
      }]
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});