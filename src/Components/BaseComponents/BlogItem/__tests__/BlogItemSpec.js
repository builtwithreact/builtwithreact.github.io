import React from 'react';
import renderer from 'react-test-renderer';
import BlogItem from './../index';

describe('<BlogItem />', () => {
    it('should render correctly', () => {
        const blogItemProps = {
            title: "some title",
            content: "some content",
            imageUrl: "https://someimage.url",
            readMoreLink: "https://someremorelink.url",
        }
        let tree = renderer.create(
            <BlogItem  {...blogItemProps}/>
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })

    it('should render with default image if not provided', () => {
        const blogItemProps = {
            title: "some title",
            content: "some content",
            readMoreLink: "https://someremorelink.url",
        }
        let tree = renderer.create(
            <BlogItem  {...blogItemProps}/>
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })

})