import Blog from "./Blog";
import {shallow} from 'enzyme'

describe("blog page testing",()=>{
    it("find check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find('.liCls').length).toBe(3);
    })
    it("at & key check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find('.liCls').at(0).key()).toBe('angular');
        expect(wrapper.find('.liCls').at(1).key()).toBe('node');
        expect(wrapper.find('.liCls').at(2).key()).toBe('react');
    })
    it("child check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find('.number').childAt(0).type()).toBe("span");
    })
    it("children length check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find('ul').children().length).toBe(3);
    })
    it("hasClass to check class exist check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find('.my-button').hasClass('disabled')).toBe(true);
    })
    it("is check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.is('.mainCls')).toBe(true);
    })
})