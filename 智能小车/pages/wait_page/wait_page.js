// pages/wait_page/wait_page.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        wait_time: 10,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showLoading({
            title: '查询状态中',
          })
          
          setTimeout(function () {
            wx.hideLoading()
          }, 500)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      let count = 20
      while(count){
        setTimeout(
          function(){
            this.setData({
              wait_time: wait_time-1,
            })
            },1000),
        count = count-1
      }
      setTimeout(function () {
        wx.navigateTo({
          url: "/pages/already_done/already_done",
        })
      }, 6000)
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