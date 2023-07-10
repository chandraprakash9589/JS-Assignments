import {shallow,mount} from 'enzyme';
import Article from './Article';
import Table from './Table';
//simulate and drive 
describe("Article page",()=>{
    it("click count",()=>{
        let wrapper = shallow(<Article/>);
        expect(wrapper.find('.clicks-0').length).toEqual(0);
         wrapper.find('button').simulate("click");
        expect(wrapper.find('.click-1').length).toEqual(1);
    })
it("dive", () => {
    let wrapper = shallow(<Article />);
    expect(wrapper.find(Table).dive().find('.custom-border').length).toBe(1);
  });
  it("snapshot 1",()=>{
    let wrapper = shallow(<Table/>);
    expect(wrapper).toMatchSnapshot();
  })
  it("snapshot 2",()=>{
    let wrapper = shallow(<Table/>);
    expect(wrapper).toMatchSnapshot();
  })
  it("snapshot 3",()=>{
    let wrapper = shallow(<Table/>);
    expect(wrapper).toMatchSnapshot();
  })
})

describe.skip("Mount vs shallow",()=>{
    it("snapshot 1",()=>{
        let wrapper = mount(<Table/>);
        console.log(wrapper.debug());
        
      })
})
//Shallow: create and test component only (no children)
// Mount: same as shallow but mounts with children and parent/host component, 
// allows lifecycle methods
// Render: outputs the html given by the component,
//  including children

