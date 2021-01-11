// import { shallow, mount, render } from 'enzyme';
import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {shallow} from 'enzyme';
import Contact from '../Contact';

const wrapper = shallow(<Contact />);

describe('Contact screeen', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should Contact element', () => {
    expect(wrapper.find(View).length).toBe(3);
    expect(wrapper.find(Image).length).toBe(1);
    expect(wrapper.find(Text).length).toBe(3);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
