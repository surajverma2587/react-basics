import React from 'react';
import { shallow } from 'enzyme';

import CartItem from '../../../components/Cart/CartItem';

const props = {
  id: '1',
  title: 'Some title',
  price: 10,
  onClick: jest.fn()
};

describe('CartItem Component', () => {
  describe('when props are valid', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CartItem {...props} />);
    });
    
    it('should render snapshot of the component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render the component', () => {
      const cartItem = wrapper.find('.cart_item');
      expect(cartItem.exists()).toBe(true);
    });
  
    it('should render the title', () => {
      const title = wrapper.find('.cart_item--title');
      expect(title.text()).toEqual(props.title);
    });
  
    it('should render the price', () => {
      const price = wrapper.find('.cart_item--price');
      expect(price.text()).toEqual(`£${props.price}`);
    });
  
    it('should render the delete button', () => {
      const button = wrapper.find('button');
      expect(button.prop('id')).toEqual(props.id);
      expect(button.prop('onClick')).toEqual(props.onClick);
    });
  });
  
  describe('when props are invalid', () => {
    it('should not render the component when props are not present', () => {
      const wrapper = shallow(<CartItem />);
      expect(wrapper.find('.cart_item').exists()).toBe(false);
    });
  
    it('should not render the component when any prop is invalid', () => {
      const invalidProps = [
        { ...props, id: null },
        { ...props, title: null },
        { ...props, price: null },
        { ...props, onClick: null },
      ];
  
      invalidProps.forEach(invalidProp => {
        const wrapper = shallow(<CartItem {...invalidProp} />);
        expect(wrapper.find('.cart_item').exists()).toBe(false);
      });
    });
  });
});
