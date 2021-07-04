import { withDirectives as _withDirectives, createVNode as _createVNode, vShow as _vShow } from "vue";
import { Transition, defineComponent } from 'vue';
import { noop, isDef, extend, truthProp, unknownProp, preventDefault, createNamespace, getZIndexStyle } from '../utils';
import { useLazyRender } from '../composables/use-lazy-render';
var [name, bem] = createNamespace('overlay');
export default defineComponent({
  name,
  props: {
    show: Boolean,
    zIndex: [Number, String],
    duration: [Number, String],
    className: unknownProp,
    lockScroll: truthProp,
    customStyle: Object
  },

  setup(props, {
    slots
  }) {
    var lazyRender = useLazyRender(() => props.show);

    var preventTouchMove = event => {
      preventDefault(event, true);
    };

    var renderOverlay = lazyRender(() => {
      var style = extend(getZIndexStyle(props.zIndex), props.customStyle);

      if (isDef(props.duration)) {
        style.animationDuration = props.duration + "s";
      }

      return _withDirectives(_createVNode("div", {
        "style": style,
        "class": [bem(), props.className],
        "onTouchmove": props.lockScroll ? preventTouchMove : noop
      }, [slots.default == null ? void 0 : slots.default()]), [[_vShow, props.show]]);
    });
    return () => _createVNode(Transition, {
      "name": "van-fade"
    }, {
      default: () => [renderOverlay()]
    });
  }

});