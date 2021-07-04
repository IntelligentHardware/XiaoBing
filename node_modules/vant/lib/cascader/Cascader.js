"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _tab = require("../tab");

var _tabs = require("../tabs");

var _icon = require("../icon");

// Components
var [name, bem, t] = (0, _utils.createNamespace)('cascader');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    title: String,
    closeable: _utils.truthProp,
    swipeable: _utils.truthProp,
    modelValue: [Number, String],
    fieldNames: Object,
    placeholder: String,
    activeColor: String,
    options: {
      type: Array,
      default: () => []
    },
    closeIcon: {
      type: String,
      default: 'cross'
    }
  },
  emits: ['close', 'change', 'finish', 'update:modelValue', 'click-tab'],

  setup(props, {
    slots,
    emit
  }) {
    var state = (0, _vue.reactive)({
      tabs: [],
      activeTab: 0
    });
    var {
      text: textKey,
      value: valueKey,
      children: childrenKey
    } = (0, _utils.extend)({
      text: 'text',
      value: 'value',
      children: 'children'
    }, props.fieldNames);

    var getSelectedOptionsByValue = (options, value) => {
      for (var i = 0; i < options.length; i++) {
        var option = options[i];

        if (option[valueKey] === value) {
          return [option];
        }

        if (option[childrenKey]) {
          var selectedOptions = getSelectedOptionsByValue(option[childrenKey], value);

          if (selectedOptions) {
            return [option, ...selectedOptions];
          }
        }
      }
    };

    var updateTabs = () => {
      if (props.modelValue || props.modelValue === 0) {
        var selectedOptions = getSelectedOptionsByValue(props.options, props.modelValue);

        if (selectedOptions) {
          var optionsCursor = props.options;
          state.tabs = selectedOptions.map(option => {
            var tab = {
              options: optionsCursor,
              selectedOption: option
            };
            var next = optionsCursor.find(item => item[valueKey] === option[valueKey]);

            if (next) {
              optionsCursor = next[childrenKey];
            }

            return tab;
          });

          if (optionsCursor) {
            state.tabs.push({
              options: optionsCursor,
              selectedOption: null
            });
          }

          (0, _vue.nextTick)(() => {
            state.activeTab = state.tabs.length - 1;
          });
          return;
        }
      }

      state.tabs = [{
        options: props.options,
        selectedOption: null
      }];
    };

    var onSelect = (option, tabIndex) => {
      state.tabs[tabIndex].selectedOption = option;

      if (state.tabs.length > tabIndex + 1) {
        state.tabs = state.tabs.slice(0, tabIndex + 1);
      }

      if (option[childrenKey]) {
        var nextTab = {
          options: option[childrenKey],
          selectedOption: null
        };

        if (state.tabs[tabIndex + 1]) {
          state.tabs[tabIndex + 1] = nextTab;
        } else {
          state.tabs.push(nextTab);
        }

        (0, _vue.nextTick)(() => {
          state.activeTab++;
        });
      }

      var selectedOptions = state.tabs.map(tab => tab.selectedOption).filter(Boolean);
      var eventParams = {
        value: option[valueKey],
        tabIndex,
        selectedOptions
      };
      emit('update:modelValue', option[valueKey]);
      emit('change', eventParams);

      if (!option[childrenKey]) {
        emit('finish', eventParams);
      }
    };

    var onClose = () => emit('close');

    var onClickTab = (tabIndex, title) => {
      emit('click-tab', tabIndex, title);
    };

    var renderHeader = () => (0, _vue.createVNode)("div", {
      "class": bem('header')
    }, [(0, _vue.createVNode)("h2", {
      "class": bem('title')
    }, [slots.title ? slots.title() : props.title]), props.closeable ? (0, _vue.createVNode)(_icon.Icon, {
      "name": props.closeIcon,
      "class": bem('close-icon'),
      "onClick": onClose
    }, null) : null]);

    var renderOptions = (options, selectedOption, tabIndex) => {
      var renderOption = option => {
        var isSelected = selectedOption && option[valueKey] === selectedOption[valueKey];
        return (0, _vue.createVNode)("li", {
          "class": bem('option', {
            selected: isSelected
          }),
          "style": {
            color: isSelected ? props.activeColor : undefined
          },
          "onClick": () => onSelect(option, tabIndex)
        }, [(0, _vue.createVNode)("span", null, [option[textKey]]), isSelected ? (0, _vue.createVNode)(_icon.Icon, {
          "name": "success",
          "class": bem('selected-icon')
        }, null) : null]);
      };

      return (0, _vue.createVNode)("ul", {
        "class": bem('options')
      }, [options.map(renderOption)]);
    };

    var renderTab = (tab, tabIndex) => {
      var {
        options,
        selectedOption
      } = tab;
      var title = selectedOption ? selectedOption[textKey] : props.placeholder || t('select');
      return (0, _vue.createVNode)(_tab.Tab, {
        "title": title,
        "titleClass": bem('tab', {
          unselected: !selectedOption
        })
      }, {
        default: () => [renderOptions(options, selectedOption, tabIndex)]
      });
    };

    var renderTabs = () => (0, _vue.createVNode)(_tabs.Tabs, {
      'active': state.activeTab,
      "onUpdate:active": $event => state.activeTab = $event,
      "animated": true,
      "class": bem('tabs'),
      "color": props.activeColor,
      "swipeThreshold": 0,
      "swipeable": props.swipeable,
      "onClick": onClickTab
    }, {
      default: () => [state.tabs.map(renderTab)]
    });

    updateTabs();
    (0, _vue.watch)(() => props.options, updateTabs, {
      deep: true
    });
    (0, _vue.watch)(() => props.modelValue, value => {
      if (value || value === 0) {
        var values = state.tabs.map(tab => {
          var _tab$selectedOption;

          return (_tab$selectedOption = tab.selectedOption) == null ? void 0 : _tab$selectedOption[valueKey];
        });

        if (values.includes(value)) {
          return;
        }
      }

      updateTabs();
    });
    return () => (0, _vue.createVNode)("div", {
      "class": bem()
    }, [renderHeader(), renderTabs()]);
  }

});

exports.default = _default;