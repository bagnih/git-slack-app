import React from 'react';
import { shallow, configure } from "enzyme";
import UsernameForm from '../components/UsernameForm';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
configure({adapter: new Adapter});

describe('UsernameForm component', () => {
    let wrapper;
    const onSubmit = jest.fn();
    beforeEach(() => {
        wrapper = shallow(<UsernameForm onSubmit={onSubmit}/>);
    });
    it('should render username form', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('form').shallow().find('input').length).toBe(2);
    });
    it('should have input with empty string', () => {
        const event = {target: {value: "spam"}};
        expect(wrapper.find('form').shallow().find('input').first().text()).toBe('');
        wrapper.find('input').first().simulate('change', event);
        wrapper.update();
        expect(wrapper.state().username).toBe('spam');
    });

    it('should call onSubmit when the form is submitted', () => {
        wrapper.find('form').simulate('submit', {preventDefault: jest.fn()});
        expect(wrapper.instance().props.onSubmit).toHaveBeenCalled();
    });
});
