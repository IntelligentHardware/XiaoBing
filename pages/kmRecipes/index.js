// pages/bookCity/bookCity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeArrey:[], //猜你喜欢
    hotArray:[],  //热门推荐
    urlImg: getApp().globalData.urlImg,
    recipes:[],
  },

  //热门推荐
  toRecipesDetailsTap: function (e) {
    console.log("e.currentTarget.dataset.id")
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: "/pages/recipes-details/index?info=" + e.currentTarget.dataset.id
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var search_name = e.info;
    // 
    console.log("search_name in search page");
    console.log(search_name);
    this.setData({
      search_name: search_name
    });
    
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
    // const that = this
    
    // that.getRecipes()
    // that.getYouLike()
    // that.hotRecommond()
    var that = this;
    wx.request({
      url: getApp().globalData.url + '/api/searchRecipes',
      method: 'GET',
      data: {
        name: escape(that.data.search_name).replace(/\%u/g, '/u'),
      },
      success: function (res) {
        if (res.data.code == 200) {
          const data = res.data.data


          console.log(data)
          that.setData({
            recipes: data,
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
      complete: function () {
        wx.hideLoading()
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})