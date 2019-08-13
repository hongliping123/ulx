// pages/myorder/myorder.js
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTapCurrent:-1
  },
  menuTap(e){
    that = this
    that.setData({
      menuTapCurrent: e.currentTarget.dataset.current
    })
  },

  gojump(){
    wx.navigateTo({
      url: '/pages/myorderform/myorderform',
    })
  },
  ckwl:function(){
    wx.navigateTo({
      url: '../logistics/logistics',
    })
  },
  /**
   * 退款跳转
   */
  paytk(){
    wx.navigateTo({
      url: '/pages/refund/refund',
    })
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