// pages/index/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zzx: '',
    result1:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData( {
    //   zzx: options.zzx
    // });
    var that=this;
    wx.getStorage({
      key: 'result',
      success: function(res) {
        console.log(res.data);
        that.setData({
          result1: res.data
        });
        that.setData({
          zzx: 'rr'
        });
        
        // console.log(data.result1.msg);
      },
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