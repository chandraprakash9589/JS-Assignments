
import React from 'react';
import { shallow,mount } from 'enzyme';
import MyComponent from './ MyComponent';
// import MyComponent from './ MyComponent';
// describe("MyComponent", () => {
//   it("should render my component", () => {
//     const wrapper = shallow(<MyComponent />);
//     console.log(wrapper)
//   });
// });
describe("test button",()=>{
    const wrapper = mount(<MyComponent/>);

    expect(wrapper.find('.clicks-0').length).toBe(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.clicks-1').length).toBe(1);
})
