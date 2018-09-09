import React from 'react';
import { shallow, configure } from "enzyme";
import MessageList from '../components/MessageList';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
configure({adapter: new Adapter});

const mockData = [
    {senderId: 123, text: 'hello'},
    {senderId: 124, text: 'hi'},
    {senderId: 123, text: 'hru'}
];

describe('MessageList Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MessageList messages={mockData} />)
    });

    it('should render the component', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('ul').length).toBe(1);
        expect(wrapper.find('ul').shallow().find('li').length).toBe(3);
    });

    it('should render new messages', () => {
        wrapper.setProps({messages: [...wrapper.instance().props.messages, {senderId: 124, text: 'fine'}]}, () => {
            expect(wrapper.instance().props.messages.length).toBe(4);
            wrapper.update();
            expect(wrapper.find('ul').shallow().find('li').length).toBe(4);
        });
    });
});