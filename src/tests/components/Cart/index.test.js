import React from 'react';
import { shallow } from 'enzyme';

import Cart from '../../../components/Cart';

const props = {
  subTotal: 10,
  taxes: 2,
  delivery: 3,
  total: 15,
  selectedItems: [
    {
      id: '1',
      title: 'title 1',
      description: 'description 1',
      price: 4
    },
    {
      id: '2',
      title: 'title 2',
      description: 'description 2',
      price: 10
    },
  ],
  onClickCartItem: jest.fn(),
};

describe('Cart Component', () => {
  describe('when props are valid', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Cart {...props} />);
    });
    
    it('should render snapshot of the component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render the component', () => {
      const cart = wrapper.find('.cart');
      expect(cart.exists()).toBe(true);
    });

    it('should render the CartItem components', () => {
      const cartItems = wrapper.find('CartItem');
      expect(cartItems.length).toEqual(2);
      cartItems.forEach((cartItem, index) => {
        expect(cartItem.prop('id')).toEqual(props.selectedItems[index].id);
        expect(cartItem.prop('title')).toEqual(props.selectedItems[index].title);
        expect(cartItem.prop('description')).toEqual(props.selectedItems[index].description);
        expect(cartItem.prop('price')).toEqual(props.selectedItems[index].price);
      });
    });

    it('should render the CartTotals component', () => {
      const cartTotals = wrapper.find('CartTotals');
      expect(cartTotals.exists()).toBe(true);
      expect(cartTotals.prop('subTotal')).toEqual(props.subTotal);
      expect(cartTotals.prop('taxes')).toEqual(props.taxes);
      expect(cartTotals.prop('delivery')).toEqual(props.delivery);
      expect(cartTotals.prop('total')).toEqual(props.total);
    });
  });
  
  describe('when props are invalid', () => {
    it('should not render the component when props are not present', () => {
      const wrapper = shallow(<Cart />);
      expect(wrapper.find('.cart').exists()).toBe(false);
    });
  
    it('should not render the component when any prop is invalid', () => {
      const invalidProps = [
        { ...props, subTotal: null },
        { ...props, taxes: null },
        { ...props, delivery: null },
        { ...props, total: null },
        { ...props, selectedItems: null },
        { ...props, selectedItems: [] },
        { ...props, onClickCartItem: null },        
      ];
  
      invalidProps.forEach(invalidProp => {
        const wrapper = shallow(<Cart {...invalidProp} />);
        expect(wrapper.find('.cart').exists()).toBe(false);
      });
    });
  });
});
