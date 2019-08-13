// pages/mine/mine.js
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    utrr: 0
  },
  handkefu: function() {
    wx.navigateTo({
      url: '../Service/Service',
    })
  },
  handwd:function(){
    wx.navigateTo({
      url: '../Questions/Questions',
    })
  },
  gomydd(e) {
    that = this
    that.setData({
      utrr: e.currentTarget.dataset.utrr
    })
  },


  /**
   * 判断用户选这我的订单话说行程订单逻辑跳转
   */
  gojumpck() {
    that = this
    if (that.data.utrr == 1) {
      wx.navigateTo({
        url: '/pages/Strokedd/Strokedd',
      })
    } else {
      wx.navigateTo({
        url: '/pages/myorder/myorder',
      })
    }
  },


  /**
   * 跳转到商家中心
   */
  handsjzongx() {
    wx.navigateTo({
      url: '/pages/MerchantLogin/MerchantLogin',
    })
  },


  /**
   * 跳转到优惠劵
   */
  handTgm() {
    wx.navigateTo({
      url: '/pages/coupon/coupon',
    })
  },
  /**
   * 跳转到我的分享
   */

  handYhka() {
    wx.navigateTo({
      url: '/pages/share/share',
    })
  },

  /**
   * 跳转到我的消息
   */
  handWdtg() {
    wx.navigateTo({
      url: '/pages/mynews/mynews',
    })
  },

  /**
   * 跳转到编辑页面
   */
  gojumpbj() {
    wx.navigateTo({
      url: '/pages/Editdata/Editdata',
    })
  },

  /**
   * 跳转到我的收藏页面
   */
  mycollect() {
    wx.navigateTo({
      url: '/pages/mycollect/mycollect',
    })
  },

  /**
   * 跳转到我的U币
   */
  myUToken() {
    wx.navigateTo({
      url: '/pages/myUToken/myUToken',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})