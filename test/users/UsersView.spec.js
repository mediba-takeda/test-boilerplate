import $ from 'jquery'
import UsersView from '../../src/js/users/UsersView'
import assert from 'power-assert'

describe('UsersView のメソッドをテストする', () => {
  it('指定のセレクタにテキストをアペンドすることができる', () => {
    const string = 'dummy text'
    $('body').append('<div class="root" />')
    UsersView.append(string)
    const appendStr = $('.root').text()
    assert(string === appendStr)
  })
})