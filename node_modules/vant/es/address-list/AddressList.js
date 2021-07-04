import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent } from 'vue'; // Utils

import { truthProp, createNamespace } from '../utils'; // Components

import { Button } from '../button';
import { RadioGroup } from '../radio-group';
import AddressListItem from './AddressListItem';
var [name, bem, t] = createNamespace('address-list');
export default defineComponent({
  name,
  props: {
    modelValue: [Number, String],
    switchable: truthProp,
    disabledText: String,
    addButtonText: String,
    defaultTagText: String,
    list: {
      type: Array,
      default: () => []
    },
    disabledList: {
      type: Array,
      default: () => []
    }
  },
  emits: ['add', 'edit', 'select', 'click-item', 'edit-disabled', 'select-disabled', 'update:modelValue'],

  setup(props, {
    slots,
    emit
  }) {
    var renderItem = (item, index, disabled) => {
      var onEdit = () => {
        var name = disabled ? 'edit-disabled' : 'edit';
        emit(name, item, index);
      };

      var onClick = () => emit('click-item', item, index);

      var onSelect = () => {
        var name = disabled ? 'select-disabled' : 'select';
        emit(name, item, index);

        if (!disabled) {
          emit('update:modelValue', item.id);
        }
      };

      return _createVNode(AddressListItem, {
        "key": item.id,
        "address": item,
        "disabled": disabled,
        "switchable": props.switchable,
        "defaultTagText": props.defaultTagText,
        "onEdit": onEdit,
        "onClick": onClick,
        "onSelect": onSelect
      }, {
        bottom: slots['item-bottom'],
        tag: slots.tag
      });
    };

    var renderList = (list, disabled) => {
      if (list) {
        return list.map((item, index) => renderItem(item, index, disabled));
      }
    };

    var renderBottom = () => _createVNode("div", {
      "class": bem('bottom')
    }, [_createVNode(Button, {
      "round": true,
      "block": true,
      "type": "danger",
      "text": props.addButtonText || t('add'),
      "class": bem('add'),
      "onClick": () => emit('add')
    }, null)]);

    return () => {
      var List = renderList(props.list);
      var DisabledList = renderList(props.disabledList, true);

      var DisabledText = props.disabledText && _createVNode("div", {
        "class": bem('disabled-text')
      }, [props.disabledText]);

      return _createVNode("div", {
        "class": bem()
      }, [slots.top == null ? void 0 : slots.top(), _createVNode(RadioGroup, {
        "modelValue": props.modelValue
      }, {
        default: () => [List]
      }), DisabledText, DisabledList, slots.default == null ? void 0 : slots.default(), renderBottom()]);
    };
  }

});