import About from "./About";
import {shallow }from 'enzyme'

describe("about page testing",()=>{
    it('class check',()=>{
        let wrapper = shallow(<About/>)
        console.log(wrapper.debug())
        expect(wrapper.exists('.h1cls')).toEqual(true);
   
    })
    it('state check',()=>{
        let wrapper = shallow(<About/>)
        
        expect(wrapper.state()).toEqual({name:"code improve",id:111});
    })
    it("html msj check",()=>{
        let wrapper = shallow(<About/>);
        expect(wrapper.contains( <div className='h1cls'>Hello</div>)).toEqual(true)
    })
    it("only msj check",()=>{
        let wrapper = shallow(<About/>);
        expect(wrapper.containsMatchingElement( [<div>Hello</div>])).toEqual(true)
    })
    it("any msj check",()=>{
        let wrapper = shallow(<About/>);
        expect(wrapper.containsAnyMatchingElements( [<div>Hello</div>,<div>Hi</div>])).toEqual(true)
    })
})