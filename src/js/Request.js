import $ from 'jquery'

/**
 *
 *
 * @class Request
 */
export default class Request {

  constructor () {
    this.setting = {
      url: 'http://jsonplaceholder.typicode.com',
      method: 'GET'
    }
    this.params = {}
  }

  fetch () {
    return $.ajax(this.params)
  }

}