import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { createNamespace, extend } from '../utils';
import { SIDEBAR_KEY } from '../sidebar/Sidebar'; // Composables

import { useParent } from '@vant/use';
import { useRoute, routeProps } from '../composables/use-route'; // Components

import { Badge } from '../badge';
var [name, bem] = createNamespace('sidebar-item');
export default defineComponent({
  name,
  props: extend({}, routeProps, {
    dot: Boolean,
    title: String,
    badge: [Number, String],
    disabled: Boolean
  }),
  emits: ['click'],

  setup(props, {
    emit,
    slots
  }) {
    var route = useRoute();
    var {
      parent,
      index
    } = useParent(SIDEBAR_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <SidebarItem> must be a child component of <Sidebar>.');
      }

      return;
    }

    var onClick = () => {
      if (props.disabled) {
        return;
      }

      emit('click', index.value);
      parent.setActive(index.value);
      route();
    };

    return () => {
      var {
        dot,
        badge,
        title,
        disabled
      } = props;
      var selected = index.value === parent.getActive();
      return _createVNode("a", {
        "class": bem({
          select: selected,
          disabled
        }),
        "onClick": onClick
      }, [_createVNode(Badge, {
        "dot": dot,
        "content": badge,
        "class": bem('text')
      }, {
        default: () => [slots.title ? slots.title() : title]
      })]);
    };
  }

});