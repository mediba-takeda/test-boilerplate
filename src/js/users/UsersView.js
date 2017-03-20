import $ from 'jquery'
import UsersRequest from './UsersRequest'
import { UsersItem } from './UsersComponents'

class UsersView {

  constructor () {
    this.model = new UsersRequest()
    this.selector = '.root'
  }

  append (str) {
    $(this.selector).append(str)
  }

  render () {
    const request = this.model.fetch()
    request.done((res)=>{
      this.append( UsersItem(res) )
    })
    request.fail(()=>{
      this.append( 'Request Error.' )
    })
  }

}

export default new UsersView()