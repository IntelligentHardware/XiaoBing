import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
import { ref, defineComponent } from 'vue';
import { pick, createNamespace, extend } from '../utils';
import { useExpose } from '../composables/use-expose';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';
var [name, bem] = createNamespace('datetime-picker');
var timePickerProps = Object.keys(TimePicker.props);
var datePickerProps = Object.keys(DatePicker.props);
export default defineComponent({
  name,
  props: extend({}, TimePicker.props, DatePicker.props, {
    modelValue: [String, Date]
  }),

  setup(props, {
    attrs,
    slots
  }) {
    var root = ref();
    useExpose({
      getPicker: () => {
        var _root$value;

        return (_root$value = root.value) == null ? void 0 : _root$value.getPicker();
      }
    });
    return () => {
      var isTimePicker = props.type === 'time';
      var Component = isTimePicker ? TimePicker : DatePicker;
      var inheritProps = pick(props, isTimePicker ? timePickerProps : datePickerProps);
      return _createVNode(Component, _mergeProps({
        "ref": root,
        "class": bem()
      }, inheritProps, attrs), slots);
    };
  }

});