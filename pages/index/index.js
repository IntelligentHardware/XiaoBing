// pages/index/index.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperIndex: 1,
    // recipes:[],
    // bannerOne:{},
    // bannerTwo:[],
    urlImg: getApp().globalData.urlImg,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  toDetailsTap: function (e) {
    console.log("e.currentTarget.dataset.id")
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: "/pages/goods-details/index?info=" + e.currentTarget.dataset.id
    })
  },
  //获取banner推荐
  getItems:function(){
    const that = this
    // console.log("start getItems")
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: getApp().globalData.url + '/api/getAllItems',
      // url: getApp().globalData.url + '/api/getAllItems',
      method: 'GET',
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        if (res.data.code == 200) {
          const data = res.data.data
          // console.log(data)
          // console.log(data[0])
          // console.log(data)
          that.setData({
            items: data,
            // bannerTwo:data.bannerTwo
          })
        } else {
          wx.showToast({
            title: '请求失败，请稍后重试',
            icon: 'none',
            duration: 2000
          })
        }

        that.butt();
      },
      fail: function (e) {
        console.log('网络出错');
      },
      
      complete:function(){
        wx.hideLoading()
        console.log(getApp().globalData.url + '/api/getAllItems')
      }
    })
    
  },
  
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.clearStorage();
    const that = this
    that.getItems();
    
    // const that = this
    // that.setData({
    //   recipes: [{ "id": "000", "name": "鱼肉" }, { "id": "001", "name": "鸡肉" }],
    //   // bannerTwo:data.bannerTwo
    // })
    // console.log(data.recipes)
    
  },
  // touchstart: function (e) {
  //   //开始触摸时 重置所有删除
  //   let data = App.touch._touchstart(e, this.data.items)
  //   this.setData({
  //     items: data
  //   })
  // },

  //滑动事件处理
  // touchmove: function (e) {
  //   let data = App.touch._touchmove(e, this.data.items)
  //   this.setData({
  //     items: data
  //   })
  // },

  //删除事件
  del: function (e) {
    const that = this
    wx.showModal({
      title: '提示',
      content: '确认要删除此条信息么？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: getApp().globalData.url + '/api/delItem',
            // url: 'https://api.it120.cc/' + app.globalData.subDomain + '/order/detail',
            data: {
              // token: wx.getStorageSync('token'),
              id: e.currentTarget.dataset.index
            },
            success: (res) => {
              if (res.data.code == 200) {
                const receive = res.data.data
                console.log("send")

              } else {
                wx.showToast({
                  title: '请求失败，请稍后重试',
                  icon: 'none',
                  duration: 2000
                })
              }
            }
          })
       
          console.log('用户点击确定')
          that.data.items.splice(e.currentTarget.dataset.index, 1)

          that.getItems()
          that.setData({
            items: that.data.items
          })
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })



    

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  add_new: function () {
    console.log("addd")
    wx.navigateTo({
      url: "/pages/goods-details/index?info=-1"
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  butt: function () {
    const that = this
    var i = 0;
    for (i = 0; i < that.data.items.length; i++) { 
      console.log(that.data.items)
      if (that.data.items[i]['expired']==2){
        wx.showModal({
          title: '提示',
          content: that.data.items[i]['name']+'已过期！',
          confirmText: "知道了",
          showCancel: false,
          success(res) {
            if (res.confirm) {
              console.log('我知道了')
            } else if (res.cancel) {
              
            }
          }
        })
      }
    }
  }

  // //跳转到书籍简介
  // toBook:function(e){
  //   const id = e.currentTarget.dataset.id
  //   wx.navigateTo({
  //     url: '../../pages/bookAbstract/bookAbstract?id='+id,
  //   })
  // },
  // //跳转到免费书籍列表页
  // toFreeBooks:function(){
  //   wx.navigateTo({
  //     url: '../../pages/freeBooks/freeBooks',
  //   })
  // }
})