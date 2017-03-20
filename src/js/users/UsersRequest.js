import $ from 'jquery'
import Request from 'Request'

/**
 *
 *
 * @export
 * @class UserRequest
 * @extends {Request}
 */
export default class UserRequest extends Request {

  constructor () {
    super()
    this.params = $.extend(true, this.setting, {
      url: 'http://jsonplaceholder.typicode.com/users'
    })
  }

}