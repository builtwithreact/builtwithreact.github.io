import React from 'react';
import renderer from 'react-test-renderer';
import BlogItemLoader from './../index';

describe("<BlogItemLoader />", () => {
    it('should render correctly', ()=>{
        let tree = renderer.create(
            <BlogItemLoader />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})