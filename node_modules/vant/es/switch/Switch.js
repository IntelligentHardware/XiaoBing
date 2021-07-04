import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace, addUnit, unknownProp } from '../utils';
import { useLinkField } from '../composables/use-link-field';
import { Loading } from '../loading';
var [name, bem] = createNamespace('switch');
export default defineComponent({
  name,
  props: {
    size: [Number, String],
    loading: Boolean,
    disabled: Boolean,
    modelValue: unknownProp,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: unknownProp,
      default: true
    },
    inactiveValue: {
      type: unknownProp,
      default: false
    }
  },
  emits: ['change', 'update:modelValue'],

  setup(props, {
    emit
  }) {
    var isChecked = () => props.modelValue === props.activeValue;

    var onClick = () => {
      if (!props.disabled && !props.loading) {
        var newValue = isChecked() ? props.inactiveValue : props.activeValue;
        emit('update:modelValue', newValue);
        emit('change', newValue);
      }
    };

    var renderLoading = () => {
      if (props.loading) {
        var color = isChecked() ? props.activeColor : props.inactiveColor;
        return _createVNode(Loading, {
          "class": bem('loading'),
          "color": color
        }, null);
      }
    };

    useLinkField(() => props.modelValue);
    return () => {
      var {
        size,
        loading,
        disabled,
        activeColor,
        inactiveColor
      } = props;
      var checked = isChecked();
      var style = {
        fontSize: addUnit(size),
        backgroundColor: checked ? activeColor : inactiveColor
      };
      return _createVNode("div", {
        "role": "switch",
        "class": bem({
          on: checked,
          loading,
          disabled
        }),
        "style": style,
        "aria-checked": checked,
        "onClick": onClick
      }, [_createVNode("div", {
        "class": bem('node')
      }, [renderLoading()])]);
    };
  }

});