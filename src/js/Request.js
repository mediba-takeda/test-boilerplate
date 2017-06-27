import $ from 'jquery'

/**
 *
 *
 * @class Request
 */
export default class Request {

  constructor () {
    this.setting = {
      url: 'http://someapi',
      method: 'GET'
    }
    this.params = this.setting
  }

  fetch () {
    return $.ajax(this.params)
  }

}