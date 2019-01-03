import React from 'react';
import { shallow } from 'enzyme';

import CartTotals from '../../../components/Cart/CartTotals';

const props = {
  subTotal: 10,
  taxes: 2,
  delivery: 3,
  total: 15,
};

describe('CartTotals Component', () => {
  describe('when props are valid', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CartTotals {...props} />);
    });
    
    it('should render snapshot of the component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render the component', () => {
      const cartTotals = wrapper.find('.cart_totals');
      expect(cartTotals.exists()).toBe(true);
    });
  
    it('should render the sub total', () => {
      const subTotal = wrapper.find('.cart_totals--price').at(0);
      expect(subTotal.text()).toEqual(`£${props.subTotal}`);
    });

    it('should render the taxes', () => {
      const taxes = wrapper.find('.cart_totals--price').at(1);
      expect(taxes.text()).toEqual(`£${props.taxes}`);
    });

    it('should render the delivery', () => {
      const delivery = wrapper.find('.cart_totals--price').at(2);
      expect(delivery.text()).toEqual(`£${props.delivery}`);
    });

    it('should render the total', () => {
      const total = wrapper.find('.cart_totals--price').at(3);
      expect(total.text()).toEqual(`£${props.total}`);
    });
  });
  
  describe('when props are invalid', () => {
    it('should not render the component when props are not present', () => {
      const wrapper = shallow(<CartTotals />);
      expect(wrapper.find('.cart_totals').exists()).toBe(false);
    });
  
    it('should not render the component when any prop is invalid', () => {
      const invalidProps = [
        { ...props, subTotal: null },
        { ...props, taxes: null },
        { ...props, delivery: null },
        { ...props, total: null },
      ];
  
      invalidProps.map(invalidProp => {
        const wrapper = shallow(<CartTotals {...invalidProp} />);
        return expect(wrapper.find('.cart_totals').exists()).toBe(false);
      });
    });
  });
});
