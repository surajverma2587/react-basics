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

describe('MenuItem Component Tests', () => {
  it('should take snapshot of the component', () => {
    const wrapper = shallow(<MenuItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the component as expected when all props are valid', () => {
    const wrapper = shallow(<MenuItem {...props} />);
    const menuItem = wrapper.find('.menu-item');

    expect(menuItem.exists()).toBe(true);
  });

  it('should render the title of the menu item', () => {
    const wrapper = shallow(<MenuItem {...props} />);
    const title = wrapper.find('h4').at(0);

    expect(title.text()).toEqual(props.title);
  });

  it('should render the description of the menu item', () => {
    const wrapper = shallow(<MenuItem {...props} />);
    const description = wrapper.find('span').at(0);

    expect(description.text()).toEqual(props.description);
  });

  it('should render the price of the menu item', () => {
    const wrapper = shallow(<MenuItem {...props} />);
    const price = wrapper.find('h4').at(1);

    expect(price.text()).toEqual(`£${props.price}`);
  });

  it('should render the button of the menu item', () => {
    const wrapper = shallow(<MenuItem {...props} />);
    const button = wrapper.find('button');

    expect(button.prop('id')).toEqual(props.id);
    expect(button.prop('onClick')).toEqual(props.onClick);
  });

  it('should not render the component when props are missing', () => {
    const wrapper = shallow(<MenuItem onClick={jest.fn()} />);
    expect(wrapper.find('.menu-item').exists()).toBe(false);
  });

  it('should not render the component when props are invalid', () => {
    const invalidProps = [
      { ...props, id: '' },
      { ...props, title: '' },
      { ...props, description: '' },
      { ...props, price: 0 },
    ];

    invalidProps.map(invalidProp => {
      const wrapper = shallow(<MenuItem {...invalidProp} />);
      return expect(wrapper.find('.menu-item').exists()).toBe(false);
    });
  });
});
