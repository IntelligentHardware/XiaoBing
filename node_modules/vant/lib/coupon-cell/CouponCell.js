"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _cell = require("../cell");

// Utils
// Components
var [name, bem, t] = (0, _utils.createNamespace)('coupon-cell');

function formatValue(coupons, chosenCoupon, currency) {
  var coupon = coupons[+chosenCoupon];

  if (coupon) {
    var value = 0;

    if ((0, _utils.isDef)(coupon.value)) {
      ({
        value
      } = coupon);
    } else if ((0, _utils.isDef)(coupon.denominations)) {
      value = coupon.denominations;
    }

    return "-" + currency + " " + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    title: String,
    border: _utils.truthProp,
    editable: _utils.truthProp,
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
      return (0, _vue.createVNode)(_cell.Cell, {
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

exports.default = _default;