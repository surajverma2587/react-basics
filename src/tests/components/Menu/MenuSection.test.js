import React from 'react';
import { shallow } from 'enzyme';
import MenuSection from '../../../components/Menu/MenuSection';

const props = {
  id: '11',
  title: 'Section title',
  description: 'Section description',
  menuItems: [
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
  onClickMenuItem: jest.fn(),
};

describe('MenuSection Component Tests', () => {
  it('should take snapshot of the component', () => {
    const wrapper = shallow(<MenuSection {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the component as expected when all props are valid', () => {
    const wrapper = shallow(<MenuSection {...props} />);
    const menuSection = wrapper.find('.menu-section');

    expect(menuSection.exists()).toBe(true);
  });

  it('should render the title of the menu section', () => {
    const wrapper = shallow(<MenuSection {...props} />);
    const title = wrapper.find('h4').at(0);

    expect(title.text()).toEqual(props.title);
  });

  it('should render the description of the menu section', () => {
    const wrapper = shallow(<MenuSection {...props} />);
    const description = wrapper.find('span').at(0);

    expect(description.text()).toEqual(props.description);
  });

  it('should render the collapsible button of the menu section', () => {
    const wrapper = shallow(<MenuSection {...props} />);
    const button = wrapper.find('button');

    expect(button.prop('data-target')).toEqual(`#${props.id}`);
  });

  it('should render the collapsible div of the menu section', () => {
    const wrapper = shallow(<MenuSection {...props} />);
    const collapsibleDiv = wrapper.find('.collapse');

    expect(collapsibleDiv.prop('id')).toEqual(props.id);
  });

  it('should render the MenuItems components', () => {
    const wrapper = shallow(<MenuSection {...props} />);
    const menuItem = wrapper.find('MenuItem');

    expect(menuItem.length).toEqual(2);
  });

  it('should not render the component when props are missing', () => {
    const wrapper = shallow(<MenuSection onClickMenuItem={jest.fn()} />);
    expect(wrapper.find('.menu-section').exists()).toBe(false);
  });

  it('should not render the component when props are invalid', () => {
    const invalidProps = [
      { ...props, id: '' },
      { ...props, title: '' }, 
      { ...props, description: '' },
      { ...props, menuItems: [] },
    ];
    invalidProps.map(invalidProp => {
      const wrapper = shallow(<MenuSection {...invalidProp} />);
      return expect(wrapper.find('.menu-section').exists()).toBe(false);
    });
  });
});
