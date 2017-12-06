import Tips from './Tips'

export  default class WxUtils {

  /**
   * 如果能够后退（多层），则navigaetBack，否则调用redirectTo
   * @param {url} url 
   */
  static backOrRedirect(url) {
    // https://tencent.github.io/wepy/document.html#/api
    const pages = getCurrentPages()
    console.log(pages)
  }
}