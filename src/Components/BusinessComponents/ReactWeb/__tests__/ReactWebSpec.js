import React from 'react';
import renderer from 'react-test-renderer';
import ReactWeb from './../index';
jest.mock('./../../../BaseComponents/InnerSubHeader', () => 'InnerSubHeader')
jest.mock('./../../../BaseComponents/TileContainer', () => 'TileContainer')


describe('ReactWeb', ()=>{
    it('should render only loader', ()=>{
        const props = {
            showLoaderOnReactWebPage: true,
            reactWebPageData: {},
            fetchReactWebData: jest.fn()
        }
        let tree = renderer.create(
            <ReactWeb  {...props}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly', ()=>{
        const props = {
            showLoaderOnReactWebPage: false,
            reactWebPageData: {
                "-KyiruQzNj7F9Gu0SUz_" : {
                  "desc" : "This is Play Area to Change to generate React Logo with different colors",
                  "githubId" : "pankajladhar",
                  "githuburl" : "https://pankajladhar.github.io/react-logo-generator",
                  "name" : "React Logo Generator",
                  "submissionDate" : "2017 Sept 15",
                  "thumb" : "/projects/my-app/thumb",
                  "twitterId" : "pankajladhar"
                }
            },
            fetchReactWebData: jest.fn()
        }
        let tree = renderer.create(
            <ReactWeb  {...props}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
