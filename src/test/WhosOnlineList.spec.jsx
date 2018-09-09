import React from 'react';
import { shallow, configure } from "enzyme";
import WhosOnlineList from '../components/WhosOnlineList';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
configure({adapter: new Adapter});

const mockData = [
    {id: 123, name: 'Abc', presence: {state: 'online'}},
    {id: 124, name: 'Def', presence: {state: 'offline'}},
    {id: 125, name: 'Xyz', presence: {state: 'online'}}
];
const currentUser = mockData[0];

describe('WhosOnlineList Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<WhosOnlineList users={mockData} currentUser={currentUser}/>);
    });

    it('should render the component', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.find('ul').length).toBe(1);
        expect(wrapper.find('ul').shallow().find('WhosOnlineListItem').length).toBe(3);
    });
});