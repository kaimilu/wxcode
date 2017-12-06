import wepy from 'wepy'
import Http from '../utils/Http'

/**
 * Api 父类
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */
export default class Base {
  static baseUrl = wepy.$instance.globalData.baseUrl
  // 创建一个新函数 get，将"this"绑定到Http对象
  static get = Http.get.bind(Http)
  static put = Http.put.bind(Http)
  static post = Http.post.bind(Http)
  static delete = Http.delete.bind(Http)
}
