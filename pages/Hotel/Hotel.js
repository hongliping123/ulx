// pages/Hotel/Hotel.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    off: false,
    num: 3
  },
  handTab: function(e) {
    that = this;
    let index = e.currentTarget.dataset.index;
    that.setData({
      num: index
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  yhdp:function(){
    wx.navigateTo({
      url: '../yhdp/yhdp',
    })
  },
  qbjd: function(){
    wx.navigateTo({
      url: '../qbjd/qbjd',
    })
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