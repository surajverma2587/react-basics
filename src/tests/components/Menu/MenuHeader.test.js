import React from 'react';
import { shallow } from 'enzyme';

import MenuHeader from '../../../components/Menu/MenuHeader';

const props = {
  title: 'Menu title',
  address: 'Menu address',
  imgUrl: 'https://google.com',
  reviews: 100,
  rating: 2.5,
};

describe('Menu Header Component', () => {
  describe('when props are valid', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MenuHeader {...props} />);
    });
    
    it('should render snapshot of the component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render the component', () => {
      const menuHeader = wrapper.find('.media');
      expect(menuHeader.exists()).toBe(true);
    });

    it('should render the image in the menu header', () => {
      const img = wrapper.find('img');
      expect(img.prop('src')).toEqual(props.imgUrl);
      expect(img.prop('alt')).toEqual(props.title);
    });
  
    it('should render the title of the restaurant', () => {
      const title = wrapper.find('h2').at(0);
      expect(title.text()).toEqual(props.title);
    });
  
    it('should render the reviews of the restaurant', () => {
      const reviews = wrapper.find('span').at(0);
      expect(reviews.text()).toEqual(`${props.reviews} reviews`);
    });

    it('should render the address of the restaurant', () => {
      const address = wrapper.find('span').at(1);
      expect(address.text()).toEqual(props.address);
    });
  
    it('should render the StarRatings component', () => {
      const starRatings = wrapper.find('StarRatings');
      expect(starRatings.prop('rating')).toEqual(props.rating);
    });
  });

  describe('when props are invalid', () => {
    it('should not render the component when props are not present', () => {
      const wrapper = shallow(<MenuHeader />);  
      expect(wrapper.find('.media').exists()).toBe(false);
    });

    it('should not render the component when any required prop is invalid', () => {
      const invalidProps = [
        { ...props, title: null },
        { ...props, address: null },
      ];
      invalidProps.forEach(invalidProp => {
        const wrapper = shallow(<MenuHeader {...invalidProp} />);
        expect(wrapper.find('.media').exists()).toBe(false);
      });
    });

    it('should render 0 reviews of the restaurant when reviews are not available', () => {
      const noReviewProps = {
        id: 'A',
        title: 'Menu title',
        address: 'Menu address',
        imgUrl: 'https://google.com',
        rating: 2.5,
        menuSections: props.menuSections,
        onClickMenuItem: jest.fn(),
      }
      const wrapper = shallow(<MenuHeader {...noReviewProps} />);
      const reviews = wrapper.find('span').at(0);
      expect(reviews.text()).toEqual('0 reviews');
    });

    it('should render the StarRatings component with 0 stars when ratings is not available', () => {
      const noRatingsProps = {
        id: 'A',
        title: 'Menu title',
        address: 'Menu address',
        imgUrl: 'https://google.com',
        reviews: 22,
        menuSections: props.menuSections,
        onClickMenuItem: jest.fn(),
      };
      const wrapper = shallow(<MenuHeader {...noRatingsProps} />);
      const starRatings = wrapper.find('StarRatings');
      expect(starRatings.prop('rating')).toEqual(0);
    });
  });
});
