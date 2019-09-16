import React from 'react';
import TestRenderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header, {DEFAULT_HEADER_TEXT} from './Header';

describe('Header', () => {
    configure({ adapter: new Adapter() });

    test('renders default header text', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.contains(DEFAULT_HEADER_TEXT)).toBe(true);
    });

    test('snapshot - renders default header text', () => {
        const component = TestRenderer.create(<Header />);
        const tree = component.toJSON();

        expect(component).toMatchSnapshot();
    });

    test('renders provided header text', () => {
        const headerText = "Testing Header";
        const wrapper = shallow(
            <Header text={headerText}/>
        );

        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.contains(headerText)).toBe(true);
    });

    test('snapshot - renders provided header text', () => {
        const headerText = "Testing Header";
        const component = TestRenderer.create(
            <Header text={headerText}/>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});