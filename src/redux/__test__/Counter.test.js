
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Counter from '../Counter';

describe('Counter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Counter />
      </Provider>
    ).dive();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should increment count on button click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('h1').text()).toEqual('Count: 1');
  });
  
  it('should decrement count on button click', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('h1').text()).toEqual('Count: -1');
  });
  
});
