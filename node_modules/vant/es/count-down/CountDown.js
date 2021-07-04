import { createVNode as _createVNode } from "vue";
import { watch, computed, defineComponent } from 'vue'; // Utils

import { truthProp, createNamespace } from '../utils';
import { parseFormat } from './utils'; // Composables

import { useCountDown } from '@vant/use';
import { useExpose } from '../composables/use-expose';
var [name, bem] = createNamespace('count-down');
export default defineComponent({
  name,
  props: {
    autoStart: truthProp,
    millisecond: Boolean,
    time: {
      type: [Number, String],
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  emits: ['change', 'finish'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      start,
      pause,
      reset,
      current
    } = useCountDown({
      time: +props.time,
      millisecond: props.millisecond,
      onChange: current => emit('change', current),
      onFinish: () => emit('finish')
    });
    var timeText = computed(() => parseFormat(props.format, current.value));

    var resetTime = () => {
      reset(+props.time);

      if (props.autoStart) {
        start();
      }
    };

    watch(() => props.time, resetTime, {
      immediate: true
    });
    useExpose({
      start,
      pause,
      reset: resetTime
    });
    return () => _createVNode("div", {
      "class": bem()
    }, [slots.default ? slots.default(current.value) : timeText.value]);
  }

});