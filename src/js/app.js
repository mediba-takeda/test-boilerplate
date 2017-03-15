import $ from 'jquery'

function hoge () {
  return true
}

hoge()

export class Hoge {
  constructor (opt) {
    const defaults = {
      param1: null,
      param2: true
    }
    this.config = $.extend({}, defaults, opt)
  }
  getOptions () {
    return this.config
  }
}

export const instanceOfHoge = new Hoge({
  param1: 'param1'
})

// console.log(instanceOfHoge.getOptions())
// console.log($().jquery)
