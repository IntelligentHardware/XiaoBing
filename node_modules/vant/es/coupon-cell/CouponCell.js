import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { isDef, truthProp, createNamespace } from '../utils'; // Components

import { Cell } from '../cell'; // Types

var [name, bem, t] = createNamespace('coupon-cell');

function formatValue(coupons, chosenCoupon, currency) {
  var coupon = coupons[+chosenCoupon];

  if (coupon) {
    var value = 0;

    if (isDef(coupon.value)) {
      ({
        value
      } = coupon);
    } else if (isDef(coupon.denominations)) {
      value = coupon.denominations;
    }

    return "-" + currency + " " + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

export default defineComponent({
  name,
  props: {
    title: String,
    border: truthProp,
    editable: truthProp,
    coupons: {
      type: Array,
      default: () => []
    },
    currency: {
      type: String,
      default: '¥'
    },
    chosenCoupon: {
      type: [Number, String],
      default: -1
    }
  },

  setup(props) {
    return () => {
      var selected = props.coupons[+props.chosenCoupon];
      var value = formatValue(props.coupons, props.chosenCoupon, props.currency);
      return _createVNode(Cell, {
        "class": bem(),
        "value": value,
        "title": props.title || t('title'),
        "border": props.border,
        "isLink": props.editable,
        "valueClass": bem('value', {
          selected
        })
      }, null);
    };
  }

});