import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from '../../../components/Menu/MenuItem';

const props = {
  id: '1',
  title: 'Some title',
  description: 'Some description',
  price: 10,
  onClick: jest.fn()
};

describe('MenuItem Component', () => {
  describe('when props are valid', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MenuItem {...props} />);
    });
    
    it('should render snapshot of the component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render the component', () => {
      const menuItem = wrapper.find('.menu_item');
      expect(menuItem.exists()).toBe(true);
    });
  
    it('should render the title', () => {
      const title = wrapper.find('.menu_item--title');
      expect(title.text()).toEqual(props.title);
    });
  
    it('should render the description', () => {
      const description = wrapper.find('.menu_item--description');
      expect(description.text()).toEqual(props.description);
    });
  
    it('should render the price', () => {
      const price = wrapper.find('.menu_item--price');
      expect(price.text()).toEqual(`£${props.price}`);
    });
  
    it('should render the add button', () => {
      const button = wrapper.find('button');
      expect(button.prop('id')).toEqual(props.id);
      expect(button.prop('onClick')).toEqual(props.onClick);
    });
  });
  
  describe('when props are invalid', () => {
    it('should not render the component when props are not present', () => {
      const wrapper = shallow(<MenuItem />);
      expect(wrapper.find('.menu_item').exists()).toBe(false);
    });
  
    it('should not render the component when any prop is invalid', () => {
      const invalidProps = [
        { ...props, id: null },
        { ...props, title: null },
        { ...props, description: null },
        { ...props, price: null },
        { ...props, onClick: null },
      ];
  
      invalidProps.forEach(invalidProp => {
        const wrapper = shallow(<MenuItem {...invalidProp} />);
        expect(wrapper.find('.menu_item').exists()).toBe(false);
      });
    });
  });
});
