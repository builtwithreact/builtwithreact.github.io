import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubHeader from './../index';

describe('SubHeader', ()=>{
    it('renders correctly', ()=>{
        let tree = renderer.create(
            <SubHeader  />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('sample test for handleOnSubmitRequestClick must be changed', ()=>{
        const wrapper = shallow(<SubHeader />);
        let val = wrapper.instance().handleOnSubmitRequestClick();
        expect(val).toEqual("handleOnSubmitRequestClick")
    });

    it('sample test for handleOnGiveFeedbackClick must be changed', ()=>{
        const wrapper = shallow(<SubHeader />);
        let val = wrapper.instance().handleOnGiveFeedbackClick();
        expect(val).toEqual("handleOnGiveFeedbackClick")
    });
});
