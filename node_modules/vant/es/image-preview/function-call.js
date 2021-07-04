import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
import { extend, inBrowser, withInstall } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanImagePreview from './ImagePreview';
var instance;
var defaultConfig = {
  loop: true,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onScale: undefined,
  onClose: undefined,
  onChange: undefined,
  teleport: 'body',
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  transition: undefined,
  beforeClose: undefined,
  overlayStyle: undefined,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: 'top-right'
};

function initInstance() {
  ({
    instance
  } = mountComponent({
    setup() {
      var {
        state,
        toggle
      } = usePopupState();

      var onClosed = () => {
        state.images = [];
      };

      return () => _createVNode(VanImagePreview, _mergeProps(state, {
        onClosed,
        'onUpdate:show': toggle
      }), null);
    }

  }));
}

var ImagePreview = (images, startPosition = 0) => {
  /* istanbul ignore if */
  if (!inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images,
    startPosition
  } : images;
  instance.open(extend({}, defaultConfig, options));
  return instance;
};

ImagePreview.Component = withInstall(VanImagePreview);

ImagePreview.install = app => {
  app.use(withInstall(VanImagePreview));
};

export { ImagePreview };