import React from 'react';
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
