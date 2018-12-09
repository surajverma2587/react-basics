import { getSelectedItem, deleteSelectedItem } from '../../helpers/menuHelper';

describe('getSelectedItem', () => {
  const menuSections = [
    {
      id: '11',
      title: 'section 1',
      description: 'section 1 description',
      menuItems: [
        {
          id: '1',
          title: 'title 1',
          description: 'description 1',
          price: 5.00
        },
        {
          id: '2',
          title: 'title 2',
          description: 'description 2',
          price: 2.50
        },
      ]
    },
    {
      id: '22',
      title: 'section 2',
      description: 'section 2 description',
      menuItems: [
        {
          id: 'A',
          title: 'title A',
          description: 'description A',
          price: 4.00
        },
        {
          id: 'B',
          title: 'title B',
          description: 'description B',
          price: 2.00
        },
      ]
    }
  ]

  it('should return the expected item if present', () => {
    const expected = [
      {
        id: 'A',
        title: 'title A',
        description: 'description A',
        price: 4.00
      }
    ]
    const actual = getSelectedItem(menuSections, 'A')

    expect(actual).toEqual(expected)
  })

  it('should return an empty array when selected item is not found', () => {
    const expected = []
    const actual = getSelectedItem(menuSections, 'foo')

    expect(actual).toEqual(expected)
  })
  
  it('should return an empty array when parameters are missing', () => {
    const expected = []
    const actual = getSelectedItem()

    expect(actual).toEqual(expected)
  })
})

describe('deleteSelectedItem', () => {
  const selectedItems = [
    {
      id: '1',
      title: 'title 1',
      description: 'description 1',
      price: '50.00'
    },
    {
      id: '2',
      title: 'title 2',
      description: 'description 2',
      price: '5.50'
    },
    {
      id: '3',
      title: 'title 3',
      description: 'description 3',
      price: '2.50'
    },
  ]

  it('should delete the selected item from the list', () => {
    const expected = [
      {
        id: '2',
        title: 'title 2',
        description: 'description 2',
        price: '5.50'
      },
      {
        id: '3',
        title: 'title 3',
        description: 'description 3',
        price: '2.50'
      },
    ]
    const actual = deleteSelectedItem(selectedItems, '1')

    expect(actual).toEqual(expected)
  })
  
  it('should not delete when selected item is not present in the list', () => {
    const expected = selectedItems
    const actual = deleteSelectedItem(selectedItems, 'foo')

    expect(actual).toEqual(expected)
  })

  it('should return an empty array when parameters are missing', () => {
    const expected = []
    const actual = deleteSelectedItem()

    expect(actual).toEqual(expected)
  })
})
