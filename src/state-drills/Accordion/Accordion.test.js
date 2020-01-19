import React from 'react';
import ReactDom from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe(`Accordion Component`, () => {
  const sectionsProp = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]
  it('renders without errors', () => {
    const div = document.createElement('div'); 
    ReactDom.render (<Accordion/>, div);
    ReactDom.unmountComponentAtNode(div)
  })

  it(`renders empty when given no sections`, () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders none of the sections by default', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('closes the first section and opens any clicked sections', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} /> )
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

