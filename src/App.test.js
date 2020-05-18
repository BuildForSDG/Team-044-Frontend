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
  });
});
