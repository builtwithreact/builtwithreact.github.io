import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom'
import SubHeader from './../index';

describe('SubHeader', () => {
    it('renders correctly', () => {
        let tree = renderer.create(
            <StaticRouter location="someLocation" context={{}}>
                <SubHeader />
            </StaticRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
