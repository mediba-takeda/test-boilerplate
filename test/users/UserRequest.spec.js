import UserRequest from 'users/UsersRequest'
import { fakeServer } from 'testUtility/fakeServer'

describe('- UserRequest', () => {
  const success = {
    response: { status: 1 }
  }
  const failure = {
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
        // dump(res)
        assert.deepEqual(res, {status: 1})
        done()
      })
    fakeServer.respond()
  })

  it('UserRequest#fetch - 異常 : Promise を返却してチェーンできる', (done) => {
    const request = new UserRequest
    fakeServer.ready(failure)
    request.fetch()
      .fail( (xhr, text, err) => {
        assert.equal(err, 'Not Found')
        done()
      })
    fakeServer.respond()
  })
})
