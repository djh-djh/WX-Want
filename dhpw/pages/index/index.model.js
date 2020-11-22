import {HTTP} from '../../utils/request.js';

class IndexModel extends HTTP{
    //banner图 
    bannerOne(callback){
        this.request({
            url:'banner',
            _success:(res)=>{
                callback(res)
            }
        })
    }
    //banner图
    bannerTwo(callback){
        this.request({
            url:'getShuffling',
            _success:(res)=>{
                callback(res)
            }
        })
    }
    //特价专区
    getTejia(callback){
        this.request({
            url:'getFlashsale',
            _success:(res)=>{
                callback(res)
            }
        })
    }
     //特价专区
     getTejia(callback){
        this.request({
            url:'getFlashsale',
            _success:(res)=>{
                callback(res)
            }
        })
    }
     //首页数据
     getData(type,city,num,callback){
        this.request({
            url:'getHomeList?type='+type+'&city='+city+'&head=0&tail='+num,
            _success:(res)=>{
                console.log('数据',res)
                callback(res)
            }
        })
    }
}

export {IndexModel}