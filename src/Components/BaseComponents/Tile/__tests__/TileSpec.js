import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import Tile from './../index';

describe('Tile', () => {
    it('renders correctly', () => {
        const tileProps = {

            imageUrl: "http://someimage.url",
            projectName: "React Logo Generator",
            description: "This is Play Area to Change to generate React Logo with different colors",
            avatarUrl: "http://someimage.url",
            submissionDate: "21 Dec 2018",
            authorName: "Pankaj Ladhar",
        }
        let tree = renderer.create(
            <Tile />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
