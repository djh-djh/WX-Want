// component/search/search.js
const QQMapWX = require('../../lib/qqmap-wx-jssdk.min.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    dataCity:'北京市'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 地址转化
    getCity(latitude,longitude){
      console.log(latitude,longitude)
      var qqmapsdk = new QQMapWX({
        key: 'S6HBZ-6I6CP-Q2NDP-LABZW-2AS2O-VCFDU' // 必填
      });
      const that=this
      qqmapsdk.reverseGeocoder({
          location: {
            latitude,
            longitude
          },
        success: function(res) {//成功后的回调
          console.log(res.result.address_component.city,res.result,);
          that.setData({
            dataCity : res.result.address_component.city
          })
          wx.setStorageSync('city', res.result.address_component.city)
        },
        fail: function(error) {
          console.error(error);
        },
      })
    }
  },
  created(){
     // 获取地理位置
     let that=this
     wx.getSetting({
       success(res) {
         console.log(res,!res.authSetting['scope.userLocation'])
         if (!res.authSetting['scope.userLocation']) {
           console.log(12345)
           wx.authorize({
             scope: 'scope.userLocation',
             success () {
               console.log('同意')
               wx.getLocation({
                 type: 'gcj02',
                 success (res) {
                   console.log('1位置',res)
                   // that.setData({
                   //   latitude : res.latitude,
                   //   longitude : res.longitude
                   // })
                   that.getCity(res.latitude,res.longitude)
                 }
               })
             }
           })
         }else{
           wx.getLocation({
             type: 'gcj02',
             success (res) {
               console.log('2位置',res)
               // that.setData({
               //   latitude : res.latitude,
               //   longitude : res.longitude
               // })
               that.getCity(res.latitude,res.longitude)
             }
           })
         }
       }
     })
  }
})
