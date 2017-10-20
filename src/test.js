import { shallow } from 'enzyme';
import ParentComponent from './index';
import React from 'react';

describe('Test suite', () => {
  test('Child component must be present', () => {

    const wrapper = shallow(<ParentComponent />);
    expect(wrapper.find('ChildComponent').length).toBe(1);
  });
});