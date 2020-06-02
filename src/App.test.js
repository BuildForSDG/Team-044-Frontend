import React from 'react';

import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import Products from './Components/Pages/Products';
import ProductsDisplay from './Components/Pages/ProductsDisplay';
import ProductsImageSlide from './Components/ProductsImageSlide';

enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
  it('should show text', () => {
    const wrapper = shallow(<Products />);
    const content = wrapper.find('h1');
    expect(content.text()).toBe('Showcase');
  });
});

describe('Product Display', () => {
  it('should have lenght', () => {
    const wrapper = shallow(<ProductsDisplay />);
    const content = wrapper.find('.payment');
    expect(content.length).toEqual(1);
  });
});

describe('Product Image Slide', () => {
  it('should have a carousel class', () => {
    const wrapper = shallow(<ProductsImageSlide />);
    const content = wrapper.find('#carouselExampleIndicators');
    expect(content.hasClass('carousel')).toBeTruthy();

import enzyme, { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import SignUpForm from './Components/SignUpForm';
import Login from './Components/Pages/SignIn';

enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

// SIGN UP TESTS
describe('SignUpForm', () => {
  it('should show text', () => {
    const wrapper = shallow(<SignUpForm />);
    const content = wrapper.find('#T-C');
    expect(content.text()).toBe(
      'By clicking Register, you are indicating that you have read and agree to the Terms & Conditions of using this service.',
    );
  });

  it('should be defined', () => {
    const wrapper = shallow(<SignUpForm />);
    const text = wrapper.find('button');
    expect(text.text()).toBe('Register');
  });
});

// SIGN IN TESTS
describe('Login', () => {
  const store = mockStore({
    serviceReducer: { service: '' },
  });
  const wrapper = mount(
    <Provider store={store}>
      <Login />
    </Provider>,
  );

  it('should show text', () => {
    const content = wrapper.find('h2');
    expect(content.text()).toBe('Login');
  });

  it('should be defined', () => {
    const text = wrapper.find('button');
    expect(text.text()).toBe('Submit');

  });
});
