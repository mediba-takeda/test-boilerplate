export const fakeServer = {
  default: {
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/users',
    status: 200,
    header: { 'Content-Type': 'application/json' },
    response: {},
  },
  server: null,
  create () {
    this.server = sinon.fakeServer.create()
  },
  ready (opts = {}) {
    const config = Object.assign({}, this.default, opts)
    const { method, url, status, header, response } = config
    this.server.respondWith(
      method, url, [status, header, JSON.stringify(response)]
    )
  },
  respond () {
    this.server.respond()
  },
  restore () {
    this.server.restore()
    this.server = null
  }
}
