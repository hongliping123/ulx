// pages/Questions/Questions.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    off:true
  },
  handOff:function(){
    that = this;
    var a = that.data.off;
    a = !a;
    that.setData({
      off: a
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  wdhd:function(){
    wx.navigateTo({
      url: '../wdhd/wdhd',
    })
  },
  handcgx:function(){
    wx.navigateTo({
      url: '../draft/draft',
    })
  },
  wljd:function(){
    wx.navigateTo({
      url: '../Answer/Answer',
    })
  },
  wdxqy:function(){
    wx.navigateTo({
      url: '../wdxq/wdxq',
    })
  },
  handtw: function () {
    wx.navigateTo({
      url: '../tw/tw',
    })
  },
  wdtw:function(){
    wx.navigateTo({
      url: '../wdtw/wdtw',
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

  }
})