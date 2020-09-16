import React from "react";
import renderer from "react-test-renderer";
import { shallow } from 'enzyme';
import App from "../../App.js"

describe('App.js tests', () => {
    it('has 1 child', () => {
        const app = shallow(<App/>);
        expect(app.children().length).toBe(1);
    });
    
    // it('renders correctly', () => {
    //     const tree = renderer.create(<App />).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});