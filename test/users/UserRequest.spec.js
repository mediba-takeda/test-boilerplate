import $ from 'jquery'
import UserRequest from 'users/UsersRequest'

describe('- UserRequest', () => {
  let server

  beforeEach(() => {
    server = sinon.fakeServer.create()
  })

  afterEach(() => {
    server.restore()
    server = null
  })

  it('UserRequest#fetch - Promise を返却してチェーンできる', (done) => {
    const request = new UserRequest
    server.respondWith(
      'GET',
      'http://jsonplaceholder.typicode.com/users',
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify({status: 1})
      ]
    )
    request.fetch()
      .then( res => {
        assert.deepEqual(res, {status: 1})
        done()
      })
    // server.respond()
  })

})
