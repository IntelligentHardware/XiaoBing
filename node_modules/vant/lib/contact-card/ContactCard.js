"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _cell = require("../cell");

var [name, bem, t] = (0, _utils.createNamespace)('contact-card');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    tel: String,
    name: String,
    addText: String,
    editable: _utils.truthProp,
    type: {
      type: String,
      default: 'add'
    }
  },
  emits: ['click'],

  setup(props, {
    emit
  }) {
    var onClick = event => {
      if (props.editable) {
        emit('click', event);
      }
    };

    var renderContent = () => {
      if (props.type === 'add') {
        return props.addText || t('addText');
      }

      return [(0, _vue.createVNode)("div", null, [t('name') + "\uFF1A" + props.name]), (0, _vue.createVNode)("div", null, [t('tel') + "\uFF1A" + props.tel])];
    };

    return () => (0, _vue.createVNode)(_cell.Cell, {
      "center": true,
      "icon": props.type === 'edit' ? 'contact' : 'add-square',
      "class": bem([props.type]),
      "border": false,
      "isLink": props.editable,
      "valueClass": bem('value'),
      "onClick": onClick
    }, {
      default: () => [renderContent()]
    });
  }

});

exports.default = _default;