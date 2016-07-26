
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Box from '../src/Box'

let wrapper

test('renders', t => {
  t.notThrows(() => {
    wrapper = shallow(<Box />)
  })
})

test('applies styles based on props', t => {
  wrapper = shallow(<Box m={1} p={2} />)
  t.deepEqual(wrapper.props().style, {
    margin: 8,
    padding: 16
  })
})

