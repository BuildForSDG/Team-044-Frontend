import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import ConsumerDashboard from './Components/Pages/ConsumerDashboard';
import EditConsumerProfile from './Components/Pages/EditConsumerProfile';
import SideNavigation from './Components/SideNav';

enzyme.configure({ adapter: new Adapter() });

//  Tests for ConsumerDashboard Component
describe('Consumer Dashboard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConsumerDashboard />);
  });
  it('should show Welcome', () => {
    const content = wrapper.find('h2');
    expect(content.text()).toBe('Welcome');
  });
  it('should have link', () => {
    const content = wrapper.find('.link');
    expect(content.text()).toBe('Click Here');
  });
});

// Tests for EditConsumerProfile Component
describe('Edit Consumer Profile', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditConsumerProfile />);
  });
  it('should contain a side nav', () => {
    const content = wrapper.find('.side');
    expect(content.text()).toBe('<SideNavigation />');
  });
  it('should have a main content', () => {
    const content = wrapper.find('.main');
    expect(content.text()).toBe('<EditProfileForm />');
  });
});

// Tests for SideNav Component
describe('Side Navigation', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SideNavigation />);
  });
  it('should show first name', () => {
    const content = wrapper.find('.name');
    expect(content.text()).toBe('First Name');
  });
  it('should have a dashboard link', () => {
    const content = wrapper.find('#dashboard');
    expect(content.text()).toBe('Dashboard');
  });
  it('should have a profile link', () => {
    const content = wrapper.find('#profile');
    expect(content.text()).toBe('My Profile');
  });
});
