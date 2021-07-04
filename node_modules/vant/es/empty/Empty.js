import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace, getSizeStyle } from '../utils';
import { Network } from './Network';
var [name, bem] = createNamespace('empty');
var PRESET_IMAGES = ['error', 'search', 'default'];
export default defineComponent({
  name,
  props: {
    imageSize: [Number, String],
    description: String,
    image: {
      type: String,
      default: 'default'
    }
  },

  setup(props, {
    slots
  }) {
    var renderImage = () => {
      if (slots.image) {
        return slots.image();
      }

      var {
        image
      } = props;

      if (image === 'network') {
        return Network;
      }

      if (PRESET_IMAGES.includes(image)) {
        image = "https://img.yzcdn.cn/vant/empty-image-" + image + ".png";
      }

      return _createVNode("img", {
        "src": image
      }, null);
    };

    var renderDescription = () => {
      var description = slots.description ? slots.description() : props.description;

      if (description) {
        return _createVNode("p", {
          "class": bem('description')
        }, [description]);
      }
    };

    var renderBottom = () => {
      if (slots.default) {
        return _createVNode("div", {
          "class": bem('bottom')
        }, [slots.default()]);
      }
    };

    return () => _createVNode("div", {
      "class": bem()
    }, [_createVNode("div", {
      "class": bem('image'),
      "style": getSizeStyle(props.imageSize)
    }, [renderImage()]), renderDescription(), renderBottom()]);
  }

});