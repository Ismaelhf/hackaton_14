// import { shallow, mount, render } from 'enzyme';
import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {shallow} from 'enzyme';
import Foods from '../Foods';
import {foodsData} from '../../../data/foodsData';

const initialProps = {
  data: foodsData,
};

// console.log('test');
const wrapper = shallow(<Foods {...initialProps} />);

describe('Foods component', () => {
  //   beforeEach(() => {
  //     wrapper = shallow(<Foods {...initialProps} />);
  //   });

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should Foods element in component', () => {
    expect(wrapper.find(View).length).toBe(4);
    expect(wrapper.find(TouchableOpacity).length).toBe(4);
    expect(wrapper.find(Image).length).toBe(4);
  });
  it('should match props', () => {
    expect(wrapper.props.data).not.toBeNull();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
