import React from 'react';
<<<
import { render } from '@testing-library/react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import App from './App';
import Wrapper from './Components/Wrapper';
import Services from './Components/Pages/Services';
import Home from './Components/Pages/Home';
import CrossServices from './Components/common/CrossServices';

enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Get Started/i);
  expect(linkElement).toBeInTheDocument();
=======

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
>>>>>>
});

// Testing Wrapper JS

describe('Wrapper', () => {
  it('should show text', () => {
    const wrapper = shallow(<Wrapper />);
    const text = wrapper.find('div h1');
    expect(text.text()).toBe('Team-044 Product');
  });

  it('should show text', () => {
    const wrapper = shallow(<Wrapper />);
    const text = wrapper.find('div ul .active');
    expect(text.text()).toBe('Home');
  });

  it('should show text', () => {
    const wrapper = shallow(<Wrapper />);
    const text = wrapper.find('div ul .services');
    expect(text.text()).toBe('Services');
  });
});

// Testing Services JS
describe('Service', () => {
  it('should display', () => {
    const services = shallow(<Services />);
    const content = services.find('h2');
    expect(content.text()).toBe('Services');
  });

  it('should should show', () => {
    const services = shallow(<Services />);
    const content = services.find('#consumers');
    expect(content.text()).toBe('Consumers');
  });

  it('should should show', () => {
    const services = shallow(<Services />);
    const content = services.find('#investors');
    expect(content.text()).toBe('Investors');
  });

  it('should should show', () => {
    const services = shallow(<Services />);
    const content = services.find('#farmers');
    expect(content.text()).toBe('Farmers');
  });
});

// Testing Home JS

describe('Home', () => {
  it('should show text', () => {
    const home = shallow(<Home />);
    const text = home.find('.hero-container h1');
    expect(text.text()).toBe(
      'We Connect Farmers, Investors and Consumers around the World',
    );
  });

  it('should show text', () => {
    const home = shallow(<Home />);
    const content = home.find("[to='/accounts']");
    expect(content.text()).toBe('Get Started');
  });

  it('should show text', () => {
    const home = shallow(<Home />);
    const content = home.find('h3');
    expect(content.text()).toBe('Welcome to Team-044 Product');
  });
});

// Testing CrossService JS
describe('CrossServices', () => {
  it('should display', () => {
    const services = shallow(<CrossServices />);
    const content = services.find('h2');
    expect(content.text()).toBe('Services');
  });

  it('should display', () => {
    const services = shallow(<CrossServices />);
    const content = services.find('h3');
    expect(content.text()).toBe('We do offer awesome Services');
  });
});
