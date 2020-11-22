import config from "./config.js"

const host=config.baseURL

const tips = {
    1: '抱歉，出现了一个错误',
    205: '暂无数据！',
    300:'页面重定向，注意信息安全！',
    400:'语法格式有误！，请检查错误输入',
    401: '登录失败！',
    404:'页面资源错误！',
    500:'服务器错误！'
  }

class HTTP{
  request({url,method = "GET",data = {},header = {},_success,_fail}){
    wx.request({
      url:host+url,
      method,
      header,
      data,
      success:(res)=>{
        let code = res.statusCode.toString()
        if (code.startsWith('2') || code === '304') {
          _success && _success(res.data)
        } else {
          _fail && _fail(res.data)
          let errorCode = res.data.error_code
          this.showError(errorCode)
        }
      },
      fail:(err)=>{
        _fail && _fail(res.data)
        this.showError(1)
      }
    })
  }

  // 私有方法
showError(errorCode) {
  if (!errorCode) {
    errorCode = 1
  }
  const tip =tips[errorCode]
  wx.showToast({
    title: tip ? tip : config.tips[1],
    icon: 'none',
    duration: 2000
  })
}
}


export {HTTP}