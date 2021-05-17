// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperIndex: 1,
    recipes:[],
    // bannerOne:{},
    // bannerTwo:[],
    urlImg: getApp().globalData.urlImg,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that.setData({
      recipes: [{ "id": "000", "name": "鱼肉" }, { "id": "001", "name": "鸡肉" }],
      // bannerTwo:data.bannerTwo
    })
    // this.getRecipes()

    // var that = this
    // wx.getStorage({
    //   key: 'lists',
    //   success: function (res) {
    //     console.log(res.data)
    //     that.setData({
    //       lists: res.data,
    //       curLists: res.data
    //     })
    //   }
    // })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
    
  },

  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  
  //获取banner推荐
  getRecipes:function(){
    const that = this
    // console.log("success here")
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: getApp().globalData.url + '/api/getAllRecipes',
      // url: getApp().globalData.url + '/api/getAllItems',
      method: 'GET',
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        if (res.data.code == 200) {
          const data = res.data.data
          // console.log("get a list of recipe")
          // console.log(data[0])
          // console.log(data)
          that.setData({
            recipes: data.slice(10),
            // bannerTwo:data.bannerTwo
          })
        } else {
          wx.showToast({
            title: '请求失败，请稍后重试',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (e) {
        console.log('网络出错');
      },
      complete:function(){
        wx.hideLoading()
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  //跳转到书籍简介
  toBook:function(e){
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../../pages/bookAbstract/bookAbstract?id='+id,
    })
  },
  //跳转到免费书籍列表页
  toFreeBooks:function(){
    wx.navigateTo({
      url: '../../pages/freeBooks/freeBooks',
    })
  }
})