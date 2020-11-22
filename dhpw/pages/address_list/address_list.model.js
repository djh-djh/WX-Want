import {HTTP} from '../../utils/request.js';

class addressList extends HTTP{
    //地址列表 
    addressList(callback){
        this.request({
            url:'shenghui',
            _success:(res)=>{
                callback(res)
            }
        })
    }
}

export {addressList}