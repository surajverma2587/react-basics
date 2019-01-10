import React from 'react';
import { shallow } from 'enzyme';

import Menu from '../../../components/Menu';

const props = {
  id: 'M1',
  title: 'Menu title',
  address: 'Menu address',
  imgUrl: 'https://google.com',
  reviews: 100,
  rating: 2.5,
  menuSections: [{
    id: 'S1',
    title: 'Section title 1',
    description: 'Section description 1',
    menuItems: [
      {
        id: 'I1',
        title: 'Item title 1',
        description: 'Item description 1',
        price: 4
      },
      {
        id: 'I2',
        title: 'Item title 2',
        description: 'Item description 2',
        price: 5
      },
    ],
    onClickMenuItem: jest.fn(),
  }, {
    id: 'S2',
    title: 'Section title 2',
    description: 'Section description 2',
    menuItems: [
      {
        id: 'I3',
        title: 'Item title 3',
        description: 'Item description 3',
        price: 2
      },
      {
        id: 'I4',
        title: 'Item title 4',
        description: 'Item description 4',
        price: 8
      },
    ],
    onClickMenuItem: jest.fn(),
  }],
  onClickMenuItem: jest.fn()
};

describe('Menu Component', () => {
  describe('when props are valid', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Menu {...props} />);
    });
    
    it('should render snapshot of the component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render the component', () => {
      const restaurant = wrapper.find('.restaurant');
      expect(restaurant.exists()).toBe(true);
    });

    it('should render the MenuHeader component', () => {
      const menuHeader = wrapper.find('MenuHeader');
      expect(menuHeader.length).toEqual(1);
      expect(menuHeader.prop('title')).toEqual(props.title);
      expect(menuHeader.prop('address')).toEqual(props.address);
      expect(menuHeader.prop('imgUrl')).toEqual(props.imgUrl);
      expect(menuHeader.prop('reviews')).toEqual(props.reviews);
      expect(menuHeader.prop('rating')).toEqual(props.rating);
    });
  
    it('should render the MenuSection components', () => {
      const menuSections = wrapper.find('MenuSection');
      expect(menuSections.length).toEqual(2);
      menuSections.forEach((menuSection, index) => {
        expect(menuSection.prop('id')).toEqual(props.menuSections[index].id);
        expect(menuSection.prop('title')).toEqual(props.menuSections[index].title);
        expect(menuSection.prop('description')).toEqual(props.menuSections[index].description);
        expect(menuSection.prop('menuItems')).toEqual(props.menuSections[index].menuItems);
      })
    });
  });

  describe('when props are invalid', () => {
    it('should not render the component when props are not present', () => {
      const wrapper = shallow(<Menu />);  
      expect(wrapper.find('.restaurant').exists()).toBe(false);
    });

    it('should not render the component when any prop is invalid', () => {
      const invalidProps = [
        { ...props, id: null },
        { ...props, title: null },
        { ...props, address: null },
        { ...props, menuSections: null },
        { ...props, menuSections: [] },
        { ...props, onClickMenuItem: null },
      ];
      invalidProps.forEach(invalidProp => {
        const wrapper = shallow(<Menu {...invalidProp} />);
        expect(wrapper.find('.restaurant').exists()).toBe(false);
      });
    });
  });
});
