import $ from 'jquery'
import UsersView from 'users/UsersView'

describe('- UsersView', () => {

  it('UsersView#append - ', () => {
    const expected = 'dummy text'
    $('body').append('<div class="root" />')
    UsersView.append(string)
    const actual = $('.root').text()
    assert(expected === actual)
  })

})
