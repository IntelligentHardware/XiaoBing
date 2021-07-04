import { createVNode as _createVNode } from "vue";
import { nextTick, reactive, watch, defineComponent } from 'vue';
import { createNamespace, truthProp, extend } from '../utils'; // Components

import { Tab } from '../tab';
import { Tabs } from '../tabs';
import { Icon } from '../icon';
var [name, bem, t] = createNamespace('cascader');
export default defineComponent({
  name,
  props: {
    title: String,
    closeable: truthProp,
    swipeable: truthProp,
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
    var state = reactive({
      tabs: [],
      activeTab: 0
    });
    var {
      text: textKey,
      value: valueKey,
      children: childrenKey
    } = extend({
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

          nextTick(() => {
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

        nextTick(() => {
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

    var renderHeader = () => _createVNode("div", {
      "class": bem('header')
    }, [_createVNode("h2", {
      "class": bem('title')
    }, [slots.title ? slots.title() : props.title]), props.closeable ? _createVNode(Icon, {
      "name": props.closeIcon,
      "class": bem('close-icon'),
      "onClick": onClose
    }, null) : null]);

    var renderOptions = (options, selectedOption, tabIndex) => {
      var renderOption = option => {
        var isSelected = selectedOption && option[valueKey] === selectedOption[valueKey];
        return _createVNode("li", {
          "class": bem('option', {
            selected: isSelected
          }),
          "style": {
            color: isSelected ? props.activeColor : undefined
          },
          "onClick": () => onSelect(option, tabIndex)
        }, [_createVNode("span", null, [option[textKey]]), isSelected ? _createVNode(Icon, {
          "name": "success",
          "class": bem('selected-icon')
        }, null) : null]);
      };

      return _createVNode("ul", {
        "class": bem('options')
      }, [options.map(renderOption)]);
    };

    var renderTab = (tab, tabIndex) => {
      var {
        options,
        selectedOption
      } = tab;
      var title = selectedOption ? selectedOption[textKey] : props.placeholder || t('select');
      return _createVNode(Tab, {
        "title": title,
        "titleClass": bem('tab', {
          unselected: !selectedOption
        })
      }, {
        default: () => [renderOptions(options, selectedOption, tabIndex)]
      });
    };

    var renderTabs = () => _createVNode(Tabs, {
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
    watch(() => props.options, updateTabs, {
      deep: true
    });
    watch(() => props.modelValue, value => {
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
    return () => _createVNode("div", {
      "class": bem()
    }, [renderHeader(), renderTabs()]);
  }

});