// component/custom-tab-bar/custom-tab-bar.js
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
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "/pages/index/index",
      "text": "首页"
    },
    {
      "pagePath": "/pages/show/show",
      "text": "发现"
    },
    {
      "pagePath": "/pages/scenic_spot/scenic_spot",
      "text": "订单"
    },
    {
      "pagePath": "/pages/mine/mine",
      "text": "我的"
    }],
    iconName:['wap-home-o','music-o','orders-o','contact',]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(url,data)
      wx.switchTab({url})
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})
