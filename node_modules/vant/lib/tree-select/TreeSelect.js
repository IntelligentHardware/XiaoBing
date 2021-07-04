"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _icon = require("../icon");

var _sidebar = require("../sidebar");

var _sidebarItem = require("../sidebar-item");

// Utils
// Components
var [name, bem] = (0, _utils.createNamespace)('tree-select');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    max: {
      type: [Number, String],
      default: Infinity
    },
    items: {
      type: Array,
      default: () => []
    },
    height: {
      type: [Number, String],
      default: 300
    },
    activeId: {
      type: [Number, String, Array],
      default: 0
    },
    selectedIcon: {
      type: String,
      default: 'success'
    },
    mainActiveIndex: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['click-nav', 'click-item', 'update:activeId', 'update:mainActiveIndex'],

  setup(props, {
    emit,
    slots
  }) {
    var isActiveItem = id => {
      return Array.isArray(props.activeId) ? props.activeId.includes(id) : props.activeId === id;
    };

    var renderSubItem = item => {
      var onClick = () => {
        if (item.disabled) {
          return;
        }

        var activeId;

        if (Array.isArray(props.activeId)) {
          activeId = props.activeId.slice();
          var index = activeId.indexOf(item.id);

          if (index !== -1) {
            activeId.splice(index, 1);
          } else if (activeId.length < props.max) {
            activeId.push(item.id);
          }
        } else {
          activeId = item.id;
        }

        emit('update:activeId', activeId);
        emit('click-item', item);
      };

      return (0, _vue.createVNode)("div", {
        "key": item.id,
        "class": ['van-ellipsis', bem('item', {
          active: isActiveItem(item.id),
          disabled: item.disabled
        })],
        "onClick": onClick
      }, [item.text, isActiveItem(item.id) && (0, _vue.createVNode)(_icon.Icon, {
        "name": props.selectedIcon,
        "class": bem('selected')
      }, null)]);
    };

    var onSidebarChange = index => {
      emit('update:mainActiveIndex', index);
      emit('click-nav', index);
    };

    var renderSidebar = () => {
      var Items = props.items.map(item => (0, _vue.createVNode)(_sidebarItem.SidebarItem, {
        "dot": item.dot,
        "title": item.text,
        "badge": item.badge,
        "class": [bem('nav-item'), item.className],
        "disabled": item.disabled
      }, null));
      return (0, _vue.createVNode)(_sidebar.Sidebar, {
        "class": bem('nav'),
        "modelValue": props.mainActiveIndex,
        "onChange": onSidebarChange
      }, {
        default: () => [Items]
      });
    };

    var renderContent = () => {
      if (slots.content) {
        return slots.content();
      }

      var selected = props.items[+props.mainActiveIndex] || {};

      if (selected.children) {
        return selected.children.map(renderSubItem);
      }
    };

    return () => (0, _vue.createVNode)("div", {
      "class": bem(),
      "style": {
        height: (0, _utils.addUnit)(props.height)
      }
    }, [renderSidebar(), (0, _vue.createVNode)("div", {
      "class": bem('content')
    }, [renderContent()])]);
  }

});

exports.default = _default;