import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChatBox from './Components/Pages/ChatBox';
import ChatHeader from './Components/ChatHeader';
import ChatMessage from './Components/ChatMessage';
import ChatList from './Components/Pages/ChatList'

enzyme.configure({ adapter: new Adapter() });

// Test For ChatBox Component
describe('Chat Box', () => {
  it('should show text', () => {
    const wrapper = shallow(<ChatBox />);
    const content = wrapper.find('.chat-app');
    expect(content.text()).toBe('<ChatHeader /><ChatMessage /><ChatInput />');
  });
});

// Test For ChatHeader Component
describe('Chat Header', () => {
  it('should show icon', () => {
    const wrapper = shallow(<ChatHeader />);
    const content = wrapper.find('i');
    expect(content.hasClass('bx')).toBeTruthy();
  });
});

// Test For ChatMessage Component
describe('Chat Message', () => {
  it('should have class of body', () => {
    const wrapper = shallow(<ChatMessage />);
    const content = wrapper.find('section');
    expect(content.hasClass('body')).toBeTruthy();
  });
});

// Test For ChatList Component
describe('Chat List', () => {
  it('should show icon', () => {
    const wrapper = shallow(<ChatList />);
    const content = wrapper.find('i');
    expect(content.hasClass('bx')).toBeTruthy();
  });
});
