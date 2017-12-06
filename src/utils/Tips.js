/**
 * 提示与加载工具类
 */
export default class Tips {
  static isLoading = false
  static pause = false

  /**
   * 成功弹窗
   * @param {标题} title 
   * @param {间隔} duration 
   */
  static success (title, duration = 500) {
    /**
     * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowtoastobject
     */
    wx.showToast({
      title: title,
      icon: 'success',
      mask: true,
      duration: duration
    })
    // 指定间隔内消失弹窗
    if (duration > 0) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, duration)
      })
    }
  }

  /**
   * 弹出确认窗口（模态弹窗）
   */
  static modal (text, title = '老苏提示') {
    return new Promise((resolve, reject) => {
      /**
       * ​显示模态弹窗:
       * https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowmodalobject
       */
      wx.showModal({
        title: title,      // 提示的标题
        content: text,     // 提示的内容
        showCancel: false, // 是否显示取消按钮，默认为 true
        success: res => {  // 接口调用成功的回调函数
          resolve(res)     // 成功回调有： res.confirm, res.cancel
        },
        fail: res => {     // 接口调用失败的回调函数
          reject(res)
        }
      })
    })
  }

  /**
   * 警告框
   */
  static alert (title) {
    wx.showToast({
      title: title,
      image: '/images/icons/alert.png',
      mask: true,
      duration: 500
    })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 500)
    })
  }

  /**
   * 错误提示
   * @param {标题} title 
   * @param {隐藏回调} onHide 
   */
  static error (title, onHide) {
    wx.showToast({
      title: title,
      image: '/images/icons/error.png',
      mask: true,
      duration: 500
    })
    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 500)
    }
  }

  /**
   * 加载提示弹窗
   * @param {标题} title 
   */
  static loading (title = '加载中') {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    if (wx.showLoading) {
      wx.showLoading({
        title: title,
        mask: true
      })
    } else {
      wx.showNavigatioinBarLoading()
    }
  }
  
   /**
   * 加载完毕
   */
  static loaded () {
    if (this.isLoading) {
      this.isLoading = false
      if (wx.hideLoading) {
        // https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxhideloading
        wx.hideLoading()
      }else{
        wx.hideNavigationBarLoading()
      }
    }
  }

  static setLoading () {
    this.isLoading = true;
  }
    
}
