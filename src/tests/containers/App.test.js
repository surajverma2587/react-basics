import React from 'react';
import { mount, shallow } from 'enzyme';

import mockData from '../data/mockData';
import App from '../../components/App';

const menuItem1 = mockData.menuSections[0].menuItems[0];

const mockSelectedItems = [menuItem1];

describe('App Container', () => {
  describe('rendering for different states', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<App />);
    });
  
    it('should render Loading text when container is loading', () => {
      wrapper.setState({ menu: {}, loading: true });
      expect(wrapper.text()).toEqual('Loading...');
    });
  
    it('should render Error text when container has error', () => {
      wrapper.setState({ menu: {}, loading: false, error: 'Error' });
      expect(wrapper.text()).toEqual('Error...');
    });
  
    it('should render the App container when loading is false and error is null', () => {
      wrapper.setState({ menu: mockData, loading: false });
      const app = wrapper.find('.container');
      expect(app.exists()).toBe(true);
    });
  
    it('should not render Cart component when loading is false and no selected items', () => {
      wrapper.setState({ menu: mockData, loading: false });
      const cart = wrapper.find('Cart');
      expect(cart.exists()).toBe(false);
    });
  
    it('should render Cart component when loading is false and has selected items', () => {
      wrapper.setState({ menu: mockData, loading: false, selectedItems: mockSelectedItems });
      const cart = wrapper.find('Cart');
      expect(cart.exists()).toBe(true);
    });
  
    it('should not render Menu component when loading is false and menu is null', () => {
      wrapper.setState({ menu: null, loading: false });
      const menu = wrapper.find('Menu');
      expect(menu.exists()).toBe(false);
    });
  
    it('should render Menu component when loading is false and menu is not null', () => {
      wrapper.setState({ menu: mockData, loading: false });
      const menu = wrapper.find('Menu');
      expect(menu.exists()).toBe(true);
    });
  });

  describe('event handling', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = mount(<App />);
    });

    it('should add selected item on click of add item button', () => {
      wrapper.setState({ menu: mockData, loading: false });
      const button = wrapper.find(`#${menuItem1.id}`).find('.qa-menu-item-button');
      button.simulate('click');
      expect(wrapper.state('selectedItems')).toEqual([menuItem1]);
    });

    it('should recalculate totals on click of add item button', () => {
      wrapper.setState({ menu: mockData, loading: false });
      const button = wrapper.find(`#${menuItem1.id}`).find('.qa-menu-item-button');
      button.simulate('click');
      expect(wrapper.state('subTotal')).toEqual(10);
      expect(wrapper.state('taxes')).toEqual(2);
      expect(wrapper.state('delivery')).toEqual(1.5);
      expect(wrapper.state('total')).toEqual(13.5);
    });

    it('should remove selected item on click of delete item button', () => {
      wrapper.setState({
        menu: mockData,
        loading: false,
        selectedItems: [menuItem1],
        subTotal: menuItem1.price,
        taxes: 2,
        delivery: 1.5,
        total: 13.5,
      });
      const button = wrapper.find(`#${menuItem1.id}`).find('.qa-cart-item-button');
      button.simulate('click');
      expect(wrapper.state('selectedItems')).toEqual([]);
    });

    it('should recalculate totals on click of delete item button', () => {
      wrapper.setState({
        menu: mockData,
        loading: false,
        selectedItems: [menuItem1],
        subTotal: menuItem1.price,
        taxes: 2,
        delivery: 1.5,
        total: 13.5,
      });
      const button = wrapper.find(`#${menuItem1.id}`).find('.qa-cart-item-button');
      button.simulate('click');
      expect(wrapper.state('subTotal')).toEqual(0);
      expect(wrapper.state('taxes')).toEqual(0);
      expect(wrapper.state('delivery')).toEqual(0);
      expect(wrapper.state('total')).toEqual(0);
    });
  });
});


