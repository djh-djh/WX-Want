// pages/address_list/address_list.js
import {addressList} from "./address_list.model.js";
const address_list = new addressList()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexBar:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    type:[{type:'A',arr:[]},{type:'B',arr:[]},{type:'C',arr:[]},{type:'D',arr:[]},{type:'E',arr:[]},{type:'F',arr:[]},{type:'G',arr:[]},{type:'H',arr:[]},{type:'I',arr:[]},{type:'J',arr:[]},{type:'K',arr:[]},{type:'L',arr:[]},{type:'M',arr:[]},{type:'N',arr:[]},{type:'O',arr:[]},{type:'P',arr:[]},{type:'Q',arr:[]},{type:'R',arr:[]},{type:'S',arr:[]},{type:'T',arr:[]},{type:'U',arr:[]},{type:'V',arr:[]},{type:'W',arr:[]},{type:'X',arr:[]},{type:'Y',arr:[]},{type:'Z',arr:[]}],
    hotcity:["北京市","上海市","深圳市","武汉市","广州市","杭州市","郑州市"],
  },

//   事件
changeCity(e){
    console.log(e.target.dataset.item)
    console.log(e.target.dataset)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    address_list.addressList((res)=>{
      console.log(res)
      for(var i in res){
          for(var j in this.data.type){
              if(res[i].first_letter == this.data.type[j].type){
                  this.data.type[j].arr.push(res[i])
              }
          }
      }
      this.setData({
          type:this.data.type
      })
      console.log(this.data.type)
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