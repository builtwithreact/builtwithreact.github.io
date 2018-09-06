import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import TileContainer from './../index';

describe('TileContainer', ()=>{
    it('renders correctly', ()=>{
        let tree = renderer.create(
            <TileContainer  />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
