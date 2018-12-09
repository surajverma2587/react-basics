import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../../components/Menu';

const props = {
  id: 'A',
  title: 'Menu title',
  address: 'Menu address',
  imgUrl: 'https://google.com',
  reviews: 100,
  rating: 2.5,
  menuSections: [{
    id: '11',
    title: 'Section title 1',
    description: 'Section description 1',
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
  }, {
    id: '2',
    title: 'Section title 2',
    description: 'Section description 2',
    menuItems: [
      {
        id: '3',
        title: 'title 3',
        description: 'description 3',
        price: 2
      },
      {
        id: '4',
        title: 'title 4',
        description: 'description 4',
        price: 8
      },
    ],
    onClickMenuItem: jest.fn(),
  }],
  onClickMenuItem: jest.fn()
};

describe('Menu Component Tests', () => {
  it('should take snapshot of the component', () => {
    const wrapper = shallow(<Menu {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the component when all props are valid', () => {
    const wrapper = shallow(<Menu {...props} />);
    const restaurant = wrapper.find('.restaurant');

    expect(restaurant.exists()).toBe(true);
  });

  it('should render the image in the menu header', () => {
    const wrapper = shallow(<Menu {...props} />);
    const img = wrapper.find('img');

    expect(img.prop('src')).toEqual(props.imgUrl);
    expect(img.prop('alt')).toEqual(props.title);
  });

  it('should render the title of the restaurant', () => {
    const wrapper = shallow(<Menu {...props} />);
    const title = wrapper.find('h2').at(0);

    expect(title.text()).toEqual(props.title);
  });

  it('should render the reviews of the restaurant when reviews are available', () => {
    const wrapper = shallow(<Menu {...props} />);
    const reviews = wrapper.find('span').at(0);

    expect(reviews.text()).toEqual(`${props.reviews} reviews`);
  });

  it('should render the 0 reviews of the restaurant when reviews are not available', () => {
    const noReviewProps = {
      id: 'A',
      title: 'Menu title',
      address: 'Menu address',
      imgUrl: 'https://google.com',
      rating: 2.5,
      menuSections: props.menuSections,
      onClickMenuItem: jest.fn(),
    }
    const wrapper = shallow(<Menu {...noReviewProps} />);
    const reviews = wrapper.find('span').at(0);

    expect(reviews.text()).toEqual('0 reviews');
  });

  it('should render the address of the restaurant', () => {
    const wrapper = shallow(<Menu {...props} />);
    const address = wrapper.find('span').at(1);

    expect(address.text()).toEqual(props.address);
  });

  it('should render the StarRatings component with the stars when ratings is available', () => {
    const wrapper = shallow(<Menu {...props} />);
    const starRatings = wrapper.find('StarRatings');

    expect(starRatings.prop('rating')).toEqual(props.rating);
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
    const wrapper = shallow(<Menu {...noRatingsProps} />);
    const starRatings = wrapper.find('StarRatings');

    expect(starRatings.prop('rating')).toEqual(0);
  });

  it('should render the MenuSection components', () => {
    const wrapper = shallow(<Menu {...props} />);
    const menuSection = wrapper.find('MenuSection');

    expect(menuSection.length).toEqual(2);
  });

  it('should not render the component when props are missing', () => {
    const wrapper = shallow(<Menu onClickMenuItem={props.onClickMenuItem}/>);
    const restaurant = wrapper.find('.restaurant');

    expect(restaurant.exists()).toBe(false);
  });

  it('should not render the component when props are invalid', () => {
    const invalidProps = [
      { ...props, id: '' },
      { ...props, title: '' },
      { ...props, address: '' },
      { ...props, menuSections: [] },
    ];

    invalidProps.map(invalidProp => {
      const wrapper = shallow(<Menu {...invalidProp} />);
      return expect(wrapper.find('.restaurant').exists()).toBe(false);
    });
  });
})
