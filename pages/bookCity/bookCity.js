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
    already:[0]
  },

  //猜你喜欢
  getYouLike:function(){
    let that = this
    wx.request({
      url: getApp().globalData.url + '/api/getYouLike',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        if(res.data.code == 200){
          that.setData({
            likeArrey:res.data.data,
            already:[1]
          })
          console.log(that.data.likeArrey)
        }else{
          wx.showToast({
            title: '请求失败，请稍后重试',
            duration: 2000
          })
        }
      },
      fail: function (e) {
        console.log('网络出错');
      }
    })
  },
  //换一批猜你喜欢
  chageYouLike:function(){
    this.getYouLike()
  },
  getRecipes: function() {
    const that = this
    // console.log("start getItems")
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
          
          // console.log(data[0])
          // console.log(data)

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
  //热门推荐
  toRecipesDetailsTap: function (e) {
    console.log("e.currentTarget.dataset.id")
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: "/pages/recipes-details/index?info=" + e.currentTarget.dataset.id
    })
  },
  confirmRecipe: function () {
    var that = this;
    // console.log(that.data.select_name);
    wx.navigateTo({
      url: "/pages/bookCity/bookCity"
    })
  },
  searchRecipe: function (e) {
    var that = this;
    wx.navigateTo({
      url: "/pages/kmRecipes/index?info=" + that.data.search_name
    })
    // wx.request({
    //   url: getApp().globalData.url + '/api/searchRecipes',
    //   method: 'GET',
    //   data: {
    //     name: escape(that.data.search_name).replace(/\%u/g, '/u'),
    //   },
    //   success: (res) => {

    //   }
    // })





    // console.log("start search")
    // console.log(search_name)
  },
  getRecipeValue: function (e) {
    
    this.setData({search_name: e.detail.value });
    console.log(this.data.search_name)
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    const that = this
    
    that.getRecipes()
    if(that.data.already[0]==0){
      that.getYouLike()
    }
    // that.getYouLike()
    // that.hotRecommond()
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
  //跳转到小说简介
  toBookAbstract:function(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../../pages/bookAbstract/bookAbstract?id='+id,
    })
  },
  //查看更多免费书籍
  toMoreBooks:function(){
    wx.navigateTo({
      url: '../../pages/freeBooks/freeBooks',
    })
  }
})