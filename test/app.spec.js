import assert from 'power-assert'
import { instanceOfHoge } from '../src/js/app'

describe('tests group 1', () => {
  it('test 1', () => {
    assert(instanceOfHoge.getOptions().param1 === 'param1')
  })
})