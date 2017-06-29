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
    this.params = Object.assign({}, this.setting, {
      url: 'http://jsonplaceholder.typicode.com/users'
    })
  }

}
