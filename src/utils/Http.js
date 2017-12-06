import wepy from 'wepy'
import Tips from './Tips'

/**
 * HTTP工具类
 */
export default class Http {

  static async request (method, url, data, loading = true) {
    const param = {
      url,
      method,
      data
    }
    if (loading) {
      Tips.loading()
    }
    const res = await wepy.request(param)
    if (this.isSuccess(res)) {
      return res.data
    } else {
      throw this.requestException(res)
    }
  }

  /**
   * 判断请求是否成功
   * @param {this.request 回调返回对象} res 
   */
  static isSuccess (res) {
    const wxCode = res.statusCode;
    if (wxCode !== 200) {
      return false
    }
    
    const wxData = res.data
    // console.log(wxData, (wxData && wxData.code !== 0))
    return (wxData && wxData.code !== 0)
  }

  /**
   * 处理异常 返回错误对象
   * @param {this.request 回调返回对象} res 
   */
  static requestException (res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    const serverData = wxData.data

    if (serverData) {
      error.serverCode = wxData.code
      error.message = serverData.message
      error.serverData = serverData
    }
    console.log(error)
    return error
  }
  
  static get (url, data, loading = true) {
    return this.request('GET', url, data, loading)
  }
  static put (url, data, loading = true) {
    return this.request('PUT', url, data, loading)
  }
  static post (url, data, loading = true) {
    return this.request('POST', url, data, loading)
  }
  static patch (url, data, loading = true) {
    return this.request('PATCH', url, data, loading)
  }
  static delete (url, data, loading = true) {
    return this.request('DELETE', url, data, loading)
  }
}