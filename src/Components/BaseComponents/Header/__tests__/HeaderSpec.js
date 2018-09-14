import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom'
import Header from './../index';

describe('Header', () => {
    it('renders correctly', () => {
        let tree = renderer.create(
            <StaticRouter location="someLocation" context={{}}>
                <Header />
            </StaticRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
