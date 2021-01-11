// import { shallow, mount, render } from 'enzyme';
import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {shallow} from 'enzyme';
import Housing from '../Housing';
import {housingData} from '../../../data/housingData';

const initialProps = {
  data: housingData,
};

// console.log('test');
const wrapper = shallow(<Housing {...initialProps} />);

describe('Housing component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should Housing element in component', () => {
    expect(wrapper.find(TouchableOpacity).length).toBe(3);
    expect(wrapper.find(View).length).toBe(3);
    expect(wrapper.find(Image).length).toBe(3);
  });
  it('should match props', () => {
    expect(wrapper.props.data).not.toBeNull();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
