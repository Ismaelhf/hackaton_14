// import { shallow, mount, render } from 'enzyme';
import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {shallow} from 'enzyme';
import Tourism from '../Tourism';
import {tourismData} from '../../../data/tourismData';

const initialProps = {
  data: tourismData,
};

const wrapper = shallow(<Tourism {...initialProps} />);

describe('Tourism component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should Tourism element in component', () => {
    expect(wrapper.find(TouchableOpacity).length).toBe(5);
    expect(wrapper.find(View).length).toBe(5);
    expect(wrapper.find(Image).length).toBe(5);
  });
  it('should match props', () => {
    expect(wrapper.props.data).not.toBeNull();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
