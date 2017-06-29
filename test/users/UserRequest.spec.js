import UserRequest from 'users/UsersRequest'
import { fakeServer } from 'testUtility/fakeServer'

describe('- UserRequest', () => {
  const success = {
    url: 'http://jsonplaceholder.typicode.com/users',
    response: { status: 1 }
  }
  const failure = {
    url: 'http://jsonplaceholder.typicode.com/users',
    status: 404
  }

  beforeEach(() => {
    fakeServer.create()
  })

  afterEach(() => {
    fakeServer.restore()
  })

  it('UserRequest#fetch - 正常 : Promise を返却してチェーンできる', (done) => {
    const request = new UserRequest
    fakeServer.ready(success)
    request.fetch()
      .then( res => {
        assert.deepEqual(res, {status: 1})
        done()
      })
  })

  it('UserRequest#fetch - 異常 : Promise を返却してチェーンできる', (done) => {
    const request = new UserRequest
    fakeServer.ready(failure)
    request.fetch()
      .fail( (xhr, text, err) => {
        assert.equal(err, 'Not Found')
        done()
      })
  })
})
