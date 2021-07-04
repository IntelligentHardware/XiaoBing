import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { t, bem } from './utils';
var [name] = createNamespace('calendar-header');
export default defineComponent({
  name,
  props: {
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number
  },

  setup(props, {
    slots
  }) {
    var renderTitle = () => {
      if (props.showTitle) {
        var text = props.title || t('title');
        var title = slots.title ? slots.title() : text;
        return _createVNode("div", {
          "class": bem('header-title')
        }, [title]);
      }
    };

    var renderSubtitle = () => {
      if (props.showSubtitle) {
        return _createVNode("div", {
          "class": bem('header-subtitle')
        }, [props.subtitle]);
      }
    };

    var renderWeekDays = () => {
      var {
        firstDayOfWeek
      } = props;
      var weekdays = t('weekdays');
      var renderWeekDays = [...weekdays.slice(firstDayOfWeek, 7), ...weekdays.slice(0, firstDayOfWeek)];
      return _createVNode("div", {
        "class": bem('weekdays')
      }, [renderWeekDays.map(text => _createVNode("span", {
        "class": bem('weekday')
      }, [text]))]);
    };

    return () => _createVNode("div", {
      "class": bem('header')
    }, [renderTitle(), renderSubtitle(), renderWeekDays()]);
  }

});