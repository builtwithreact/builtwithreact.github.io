import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './../index';

describe('Button', ()=>{
    it('renders correctly if only mandatory props are passed', ()=>{
        let tree = renderer.create(
            <Button value="btn value" 
                handleOnClick={jest.fn} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly if options props are also passed', ()=>{
        let tree = renderer.create(
            <Button value="btn value"
                className="btnclass"
                handleOnClick={jest.fn} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call passed click handler', ()=>{
        let mockHandOnClick = jest.fn();
        const wrapper = shallow( 
            <Button value="btn value"
                className="btnclass"
                handleOnClick={mockHandOnClick} />
        )
        wrapper.simulate('click');
        expect(mockHandOnClick).toBeCalled;
    });

});
