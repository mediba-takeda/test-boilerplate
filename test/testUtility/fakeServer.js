/**
 * fakeServer Wrapper
 *
 */
export const fakeServer = {
  default: {
    method: 'GET',
    url: null, // String or RegExp
    status: 200,
    header: { 'Content-Type': 'application/json' },
    response: {} // or (...params) => {}
  },
  server: null,
  create () {
    this.server = sinon.fakeServer.create()
    this.server.autoRespond = true
    this.server.autoRespondAfter = 300
  },
  ready (opts = {}) {
    const config = Object.assign({}, this.default, opts)
    const { method, url, status, header, response } = config
    this.server.respondWith(
      method, url,
      typeof response === 'function'
      // Function, if `response` is function with params
      ? (xhr, ...params) => {
        xhr.respond(
          status, header, JSON.stringify(response(...params))
        )
      }
      // Array, if `response` is object type
      : [
        status, header, JSON.stringify(response)
      ]
    )
  },
  restore () {
    this.server.restore()
    this.server = null
  }
}
