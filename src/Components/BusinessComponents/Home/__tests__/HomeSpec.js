import React from 'react';
import renderer from 'react-test-renderer';
import Home from './../index';
jest.mock('./../../../BaseComponents/SubHeader', () => 'SubHeader')


describe('Home', ()=>{
    it('should render correctly', ()=>{
        let tree = renderer.create(
            <Home />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
