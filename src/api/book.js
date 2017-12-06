/**
 * 测试豆瓣书籍api类
 */

import base from './base'

export default class Book extends base {
  
  static getInfo (bookId) {
    console.log(bookId)
    const url = `${this.baseUrl}/${bookId}`
    return this.get(url, {}).then(data => this.showData(data))
  }

  static showData (data) {
    console.log(data)
  }
}
