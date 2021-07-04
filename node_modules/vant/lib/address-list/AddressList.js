"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _button = require("../button");

var _radioGroup = require("../radio-group");

var _AddressListItem = _interopRequireDefault(require("./AddressListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
// Components
var [name, bem, t] = (0, _utils.createNamespace)('address-list');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    modelValue: [Number, String],
    switchable: _utils.truthProp,
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

      return (0, _vue.createVNode)(_AddressListItem.default, {
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

    var renderBottom = () => (0, _vue.createVNode)("div", {
      "class": bem('bottom')
    }, [(0, _vue.createVNode)(_button.Button, {
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
      var DisabledText = props.disabledText && (0, _vue.createVNode)("div", {
        "class": bem('disabled-text')
      }, [props.disabledText]);
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [slots.top == null ? void 0 : slots.top(), (0, _vue.createVNode)(_radioGroup.RadioGroup, {
        "modelValue": props.modelValue
      }, {
        default: () => [List]
      }), DisabledText, DisabledList, slots.default == null ? void 0 : slots.default(), renderBottom()]);
    };
  }

});

exports.default = _default;