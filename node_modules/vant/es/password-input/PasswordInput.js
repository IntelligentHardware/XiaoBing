import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace, addUnit, truthProp } from '../utils';
import { BORDER_LEFT, BORDER_SURROUND } from '../utils/constant';
var [name, bem] = createNamespace('password-input');
export default defineComponent({
  name,
  props: {
    info: String,
    mask: truthProp,
    gutter: [Number, String],
    focused: Boolean,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: [Number, String],
      default: 6
    }
  },
  emits: ['focus'],

  setup(props, {
    emit
  }) {
    var onTouchStart = event => {
      event.stopPropagation();
      emit('focus', event);
    };

    var renderPoints = () => {
      var Points = [];
      var {
        mask,
        value,
        length,
        gutter,
        focused
      } = props;

      for (var i = 0; i < length; i++) {
        var char = value[i];
        var showBorder = i !== 0 && !gutter;
        var showCursor = focused && i === value.length;
        var style = void 0;

        if (i !== 0 && gutter) {
          style = {
            marginLeft: addUnit(gutter)
          };
        }

        Points.push(_createVNode("li", {
          "class": [{
            [BORDER_LEFT]: showBorder
          }, bem('item', {
            focus: showCursor
          })],
          "style": style
        }, [mask ? _createVNode("i", {
          "style": {
            visibility: char ? 'visible' : 'hidden'
          }
        }, null) : char, showCursor && _createVNode("div", {
          "class": bem('cursor')
        }, null)]));
      }

      return Points;
    };

    return () => {
      var info = props.errorInfo || props.info;
      return _createVNode("div", {
        "class": bem()
      }, [_createVNode("ul", {
        "class": [bem('security'), {
          [BORDER_SURROUND]: !props.gutter
        }],
        "onTouchstart": onTouchStart
      }, [renderPoints()]), info && _createVNode("div", {
        "class": bem(props.errorInfo ? 'error-info' : 'info')
      }, [info])]);
    };
  }

});