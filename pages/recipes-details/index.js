var app = getApp();
var util = require('../../utils/util.js');

Page({
  data: {
    recipe: {},
    orderId: 0,

  },
  onLoad: function (e) {
    var tinfo = e.info;
    // 
    console.log("tinfo");
    console.log(tinfo);
    // this.data.orderId = orderId;

    // var orderId = e.id;
    this.setData({
      orderId: tinfo
    });

  },
  onShow: function () {
    var that = this;
    

    wx.request({
      url: getApp().globalData.url + '/api/getRecipe',
      // url: 'https://api.it120.cc/' + app.globalData.subDomain + '/order/detail',
      data: {
        // token: wx.getStorageSync('token'),
        id: that.data.orderId
      },
      success: (res) => {
        if (res.data.code == 200) {
          const receive = res.data.data
          console.log("receive")
          console.log(receive)
          // console.log(data[0])
          // console.log(data)
          that.setData({
            recipe: receive[0]
            // bannerTwo:data.bannerTwo
          })
        } else {
          wx.showToast({
            title: '请求失败，请稍后重试',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })

  },


})