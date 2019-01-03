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

describe('MenuSection Component', () => {
  describe('when props are valid', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MenuSection {...props} />);
    });

    it('should render snapshot of the component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render the component as expected', () => {
      const menuSection = wrapper.find('.menu_section');
      expect(menuSection.exists()).toBe(true);
    });
  
    it('should render the title', () => {
      const title = wrapper.find('.menu_section--title');
      expect(title.text()).toEqual(props.title);
    });
  
    it('should render the description', () => {
      const description = wrapper.find('.menu_section--description');
      expect(description.text()).toEqual(props.description);
    });
  
    it('should render the collapsible button', () => {
      const button = wrapper.find('button');  
      expect(button.prop('data-target')).toEqual(`#${props.id}`);
    });
  
    it('should render the collapsible div containing menu items', () => {
      const collapsibleDiv = wrapper.find('.collapse');  
      expect(collapsibleDiv.prop('id')).toEqual(props.id);
    });
  
    it('should render the MenuItem components', () => {
      const menuItems = wrapper.find('MenuItem');  
      expect(menuItems.length).toEqual(2);
      menuItems.forEach((menuItem, index) => {
        expect(menuItem.prop('id')).toEqual(props.menuItems[index].id);
        expect(menuItem.prop('title')).toEqual(props.menuItems[index].title);
        expect(menuItem.prop('description')).toEqual(props.menuItems[index].description);
        expect(menuItem.prop('price')).toEqual(props.menuItems[index].price);
      });
    });
  });

  describe('when props are invalid', () => {
    it('should not render the component when props are not present', () => {
      const wrapper = shallow(<MenuSection />);
      expect(wrapper.find('.menu_section').exists()).toBe(false);
    });
  
    it('should not render the component when any prop is invalid', () => {
      const invalidProps = [
        { ...props, id: null },
        { ...props, title: null }, 
        { ...props, description: null },
        { ...props, menuItems: null },
        { ...props, menuItems: [] },
        { ...props, onClickMenuItem: null },
      ];
      invalidProps.forEach(invalidProp => {
        const wrapper = shallow(<MenuSection {...invalidProp} />);
        expect(wrapper.find('.menu_section').exists()).toBe(false);
      });
    });
  });
});
