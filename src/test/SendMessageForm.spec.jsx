import React from 'react';
import { shallow, configure } from "enzyme";
import SendMessageForm from '../components/SendMessageForm';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
configure({adapter: new Adapter});

describe('SendMessageForm Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SendMessageForm onSubmit={jest.fn()} onChange={jest.fn()} />)
    });

    it('should render the component', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('form').shallow().find('input').length).toBe(1);
    });

    it('should call props onChange when the text is changed', () => {
        const event = {target: {value: "hello"}};
        wrapper.find('input').first().simulate('change', event);
        expect(wrapper.instance().props.onChange).toHaveBeenCalled();
        expect(wrapper.state().text).toBe('hello');
    });
    it('should call onSubmit when the form is submitted', () => {
        wrapper.find('form').simulate('submit', {preventDefault: jest.fn()});
        expect(wrapper.instance().props.onSubmit).toHaveBeenCalled();
    });
});