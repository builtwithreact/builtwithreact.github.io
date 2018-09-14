import React from 'react';
import renderer from 'react-test-renderer';
import InnerSubHeader from './../index';

describe("<InnerSubHeader />", ()=>{
    it('should return correctly', () => {
        let tree = renderer.create(
            <InnerSubHeader title="InnerSubHeader"/>
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })
})