var app = getApp();
var util = require('../../utils/util.js');

Page({
  data: {
    item: {},
    orderId: 0,
    select_time: "",
    select_name: "",
    select_duration: "",
    
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
    if (that.data.orderId > 0){
      wx.request({
        url: getApp().globalData.url + '/api/getItem',
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
              item: receive[0],
              select_time: receive[0]['start_date'],
              select_duration: receive[0]['duration'],
              select_name: receive[0]['name'],
              // bannerTwo:data.bannerTwo
            })
          } else {
            wx.showToast({
              title: '请求失败，请稍后重试',
              icon: 'none',
              duration: 2000
            })
          }
          // wx.hideLoading();
          // if (res.data.code != 0) {
          //   wx.showModal({
          //     title: '错误',
          //     content: res.data.msg,
          //     showCancel: false
          //   })
          //   return;
          // }
          // that.setData({
          //   orderDetail: res.data.data
          // });
          // that.updateStatusSteps(res.data.data)
        }
      })
    }
    else{
      var timeNow = util.formatDate(new Date());
      console.log(timeNow)
      that.setData({
        select_time: timeNow,
        // bannerTwo:data.bannerTwo
      })
      // wx.request({
      //   url: getApp().globalData.url + '/api/getItem',
      //   // url: 'https://api.it120.cc/' + app.globalData.subDomain + '/order/detail',
      //   data: {
      //     // token: wx.getStorageSync('token'),
      //     id: 1
      //   },
      //   success: (res) => {
      //     if (res.data.code == 200) {
      //       const receive = res.data.data
      //       console.log("receive")
      //       console.log(receive)
      //       // console.log(data[0])
      //       // console.log(data)
      //       receive[0]['start_date'] = timeNow
      //       receive[0]['duration'] = NaN
      //       receive[0]['name'] = NaN
      //       that.setData({
      //         item: receive[0],
      //         select_time: receive[0]['start_date'],
      //         select_duration: receive[0]['duration'],
      //         select_name: receive[0]['name'],
      //         // bannerTwo:data.bannerTwo
      //       })
      //     } else {
      //       wx.showToast({
      //         title: '请求失败，请稍后重试',
      //         icon: 'none',
      //         duration: 2000
      //       })
      //     }
      //     // wx.hideLoading();
      //     // if (res.data.code != 0) {
      //     //   wx.showModal({
      //     //     title: '错误',
      //     //     content: res.data.msg,
      //     //     showCancel: false
      //     //   })
      //     //   return;
      //     // }
      //     // that.setData({
      //     //   orderDetail: res.data.data
      //     // });
      //     // that.updateStatusSteps(res.data.data)
      //   }
      // })
    }
    // var yunPrice = parseFloat(this.data.yunPrice);
    // var allprice = 0;
    // var goodsList = this.data.goodsList;
    // for (var i = 0; i < goodsList.length; i++) {
    //   allprice += parseFloat(goodsList[0].price) * goodsList[0].number;
    // }
    // this.setData({
    //   allGoodsPrice: allprice,
    //   yunPrice: yunPrice
    // });
  },
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      select_time: e.detail.value
    })
  },
  getNameValue: function (e) {
    this.setData({ select_name: e.detail.value });
  },
  getDurationValue: function (e) {
    this.setData({ select_duration: e.detail.value });
  },

  saveNewAddress: function () {
    var that = this;
    console.log(that.data.select_name);
    wx.request({
      url: getApp().globalData.url + '/api/saveNewItems',
      method: 'GET',
      // url: 'https://api.it120.cc/' + app.globalData.subDomain + '/order/detail',
      data: {
        // token: wx.getStorageSync('token'),
        id: that.data.orderId,
        name: escape(that.data.select_name).replace(/\%u/g, '/u'),
        duration: that.data.select_duration,
        start_date: that.data.select_time,
      },
      success: (res) => {
        wx.navigateTo({
          url: "/pages/index/index"
        })
        // if (res.data.code == 200) {
        //   const receive = res.data.data
        //   console.log("receive")
        //   console.log(receive)
        //   // console.log(data[0])
        //   // console.log(data)
        //   that.setData({
        //     item: receive[0],
        //     select_time: receive[0]['start_date'],
        //     // bannerTwo:data.bannerTwo
        //   })
        // } else {
        //   wx.showToast({
        //     title: '请求失败，请稍后重试',
        //     icon: 'none',
        //     duration: 2000
        //   })
        // }
        // wx.hideLoading();
        // if (res.data.code != 0) {
        //   wx.showModal({
        //     title: '错误',
        //     content: res.data.msg,
        //     showCancel: false
        //   })
        //   return;
        // }
        // that.setData({
        //   orderDetail: res.data.data
        // });
        // that.updateStatusSteps(res.data.data)
      }
    })

    wx.switchTab({
      url: '../../pages/index/index',
    })
    // let self = this,
    //   regionFlag = self.data.regionFlag,
    //   addressStatus = self.data.addressStatus,
    //   region = self.data.region,
    //   str = '';
    // for (let i = 0, len = region.length; i < len; i++) {
    //   if (region[i].length == 1) { region[i] = region[i - 1]; }
    //   str += region[i] + ' ';
    // }
    // let byUrl = api.INTERFACES.findByAddress, byData = { areaName: str };
    // if (!common.ISNAME(self.data.nameValue)) {
    //   common.SHOWTIPS('请输入真实的姓名', 'none'); return;
    // } else if (!common.ISPHONE(self.data.phoneValue)) {
    //   common.SHOWTIPS('请输入正确的11位手机号码', 'none'); return;
    // } else if (self.data.regionFlag) {
    //   common.SHOWTIPS('请选择省市区', 'none'); return;
    // } else if (!self.data.textareaValue) {
    //   common.SHOWTIPS('请输入详细地址', 'none'); return;
    // } else if (!self.data.floorValue) {
    //   common.SHOWTIPS('请输入楼层号', 'none'); return;
    // }
  }
})