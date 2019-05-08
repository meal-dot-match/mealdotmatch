/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import About from './about'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('About', () => {
  let aboutPage

  beforeEach(() => {
    aboutPage = shallow(<About />)
  })

  it('renders a title in h1 tags', () => {
    expect(aboutPage.find('h1').text()).to.be.equal('Our Story')
  })
})
