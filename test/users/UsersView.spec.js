import $ from 'jquery'
import UsersView from 'users/UsersView'

describe('- UsersView', () => {

  it('UsersView#append - 文字列の引数を受けて指定の要素にインジェクトできる', () => {
    const expected = 'dummy text'
    $('body').append('<div class="root" />')
    UsersView.append(expected)
    const actual = $('.root').text()
    assert(expected === actual)
  })

})
