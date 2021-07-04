import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { ref, watch, nextTick, defineComponent } from 'vue'; // Utils

import { createNamespace, extend, unknownProp } from '../utils';
import { TABS_KEY } from '../tabs/Tabs'; // Composables

import { useParent } from '@vant/use';
import { routeProps } from '../composables/use-route'; // Components

import { SwipeItem } from '../swipe-item';
var [name, bem] = createNamespace('tab');
export default defineComponent({
  name,
  props: extend({}, routeProps, {
    dot: Boolean,
    name: [Number, String],
    badge: [Number, String],
    title: String,
    disabled: Boolean,
    titleClass: unknownProp,
    titleStyle: [String, Object]
  }),

  setup(props, {
    slots
  }) {
    var inited = ref(false);
    var {
      parent,
      index
    } = useParent(TABS_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <Tab> must be a child component of <Tabs>.');
      }

      return;
    }

    var getName = () => {
      var _props$name;

      return (_props$name = props.name) != null ? _props$name : index.value;
    };

    var init = () => {
      inited.value = true;

      if (parent.props.lazyRender) {
        nextTick(() => {
          parent.onRendered(getName(), props.title);
        });
      }
    };

    var isActive = () => {
      var active = getName() === parent.currentName.value;

      if (active && !inited.value) {
        init();
      }

      return active;
    };

    watch(() => props.title, () => {
      parent.setLine();
      parent.scrollIntoView();
    });
    return () => {
      var {
        animated,
        swipeable,
        scrollspy,
        lazyRender
      } = parent.props;

      if (!slots.default && !animated) {
        return;
      }

      var active = isActive();
      var show = scrollspy || active;

      if (animated || swipeable) {
        return _createVNode(SwipeItem, {
          "role": "tabpanel",
          "aria-hidden": !active,
          "class": bem('pane-wrapper', {
            inactive: !active
          })
        }, {
          default: () => [_createVNode("div", {
            "class": bem('pane')
          }, [slots.default == null ? void 0 : slots.default()])]
        });
      }

      var shouldRender = inited.value || scrollspy || !lazyRender;
      var Content = shouldRender ? slots.default == null ? void 0 : slots.default() : null;
      return _withDirectives(_createVNode("div", {
        "role": "tabpanel",
        "class": bem('pane')
      }, [Content]), [[_vShow, show]]);
    };
  }

});