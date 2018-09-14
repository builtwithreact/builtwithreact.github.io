import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './../index';

describe('Loader', ()=>{
    it('renders correctly', ()=>{
        let tree = renderer.create(
            <Loader  />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
