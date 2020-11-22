// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:false,
    nickName:"",
    avatarUrl:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.login({
    //   success (res) {
    //     console.log("code",res)
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://test.com/onLogin',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })

    // wx.getSetting({
    //   success(res) {
    //     console.log(res)
    //     if (!res.authSetting['scope.useInfo']) {
    //       wx.authorize({
    //         scope: 'scope.useInfo',
    //         success (res) {
    //           console.log(res)
    //         }
    //       })
    //     }
    //   }
    // })
    var that=this
    wx.getSetting({
      success (res){
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          that.setData({
            login:true,
            nickName:wx.getStorageSync('nikeName'),
            avatarUrl:wx.getStorageSync('avatarUrl'),
          })
        }
      }
    })
    
  },
  // 点击登录
  bindGetUserInfo (e) {
    console.log(e.detail.errMsg)
    if(e.detail.errMsg == "getUserInfo:ok"){
      wx.setStorageSync('nikeName',e.detail.userInfo.nickName )
      wx.setStorageSync('avatarUrl',e.detail.userInfo.avatarUrl )
      this.setData({
        login:true,
        nickName:e.detail.userInfo.nickName,
        avatarUrl:e.detail.userInfo.avatarUrl,
      })
    }
    console.log(123,e.detail.userInfo)
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
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