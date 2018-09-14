import React from 'react';
import renderer from 'react-test-renderer';
import TileContainer from './../index';
jest.mock('./../../Tile', () => 'Tile')

describe('<TileContainer />', () => {
    it('should render correctly', () => {
        let tree = renderer.create(
            <TileContainer />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
