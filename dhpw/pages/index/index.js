
//index.js
//获取应用实例
const app = getApp()

import {IndexModel} from 'index.model.js';

var indexModel = new IndexModel() 

Page({
  data: {
    active:0,
    titArr:['精选','旅游景点','民宿客栈','吃喝玩乐','演出活动'],
    bannerOne:[],//banner1
    bannerTwo:[],//banner2
    spacilArr:[],//特价
    dataLeftArr:[],//热门数据
    dataRightArr:[],//热门数据
    dataNum:6,//热门数据条数
    dataType:'精选',//数据类型
    loading:false,
    latitude:'',
    longitude:'',
  },
  
  // 分配左右数据
  LeftRight(data){
    let left=[]
    let right=[]
    for(let i = 0;i < data.length;i++){
      if(i % 2 == 1){
        right.push(data[i])
      }else{
        left.push(data[i])
      }
    }
    this.setData({
      loading:false,
      dataLeftArr:left,
      dataRightArr:right,
    })
    // console.log(this.data.dataLeftArr,this.data.dataRightArr)
  },
 
  //事件处理函数
  onLoad() {
    

    indexModel.bannerOne((res)=>{//banner图
      this.setData({
        bannerOne:res
      })
    })

    indexModel.bannerTwo((res)=>{//banner图
      this.setData({
        bannerTwo:res
      })
    })

    indexModel.getTejia((res)=>{//特价
      this.setData({
        spacilArr:res.slice(0,2)
      })
    })

    indexModel.getData(this.data.dataType,this.data.dataCity,this.data.dataNum,(res)=>{//首页数据
      this.LeftRight(res)
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  // 热门切换
  changeType(event) {
    console.log(event.detail.title)
    this.setData({
      dataLeftArr:[],
      dataRightArr:[],
      dataType:event.detail.title,
      dataNum:6
    })
    setTimeout(()=>{
      indexModel.getData(this.data.dataType,'郑州市',this.data.dataNum,(res)=>{
        this.LeftRight(res)
      })
    },800)
    
  },
  // 到达页面底部时
  onReachBottom() {
    console.log("上拉加载")
    this.setData({
      loading:true,
      dataNum:this.data.dataNum+=6
    })
    console.log(this.data.dataNum)
    setTimeout(()=>{
      indexModel.getData(this.data.dataType,'郑州市',this.data.dataNum,(res)=>{
        console.log(res)
        this.LeftRight(res)
      })
    },800)
  },

  
  
})
