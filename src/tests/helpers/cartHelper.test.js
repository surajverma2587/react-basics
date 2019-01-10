import {
  calculateSubTotal,
  calculateTaxes,
  calculateDelivery,
  calculateTotal,
  recalculate,
} from '../../helpers/cartHelper';

describe('calculateSubTotal', () => {
  test('should return the expected calulated sub-total', () => {
    const selectedItems = [
      {
        id: '1',
        title: 'title 1',
        description: 'description 1',
        price: 50.00
      },
      {
        id: '2',
        title: 'title 2',
        description: 'description 2',
        price: 5.50
      },
    ]

    const expected = 55.5
    const actual = calculateSubTotal(selectedItems)

    expect(actual).toEqual(expected)
  })

  test('should return 0 for an empty array passed', () => {
    const expected = 0
    const actual = calculateSubTotal([])

    expect(actual).toEqual(expected)
  })
  
  test('should return 0 when no parameter is passed', () => {
    const expected = 0
    const actual = calculateSubTotal()

    expect(actual).toEqual(expected)
  })
})

describe('calculateTaxes', () => {
  test('should return the expected calculated taxes', () => {
    const expected = 20
    const actual = calculateTaxes(100)

    expect(actual).toEqual(expected)
  })
  
  test('should return 0 when no parameter is passed', () => {
    const expected = 0
    const actual = calculateTaxes()

    expect(actual).toEqual(expected)
  })
})

describe('calculateDelivery', () => {
  test('should return the expected calculated delivery cost when sub-total is lesser than 12', () => {
    const expected = 1.50
    const actual = calculateDelivery(10.00)

    expect(actual).toEqual(expected)
  })
  
  test('should return the expected calculated delivery cost when sub-total is greater than 12', () => {
    const expected = 0
    const actual = calculateDelivery(20.00)

    expect(actual).toEqual(expected)
  })

  test('should return 1.50 when parameter is not passed', () => {
    const expected = 1.50
    const actual = calculateDelivery()

    expect(actual).toEqual(expected)
  })
})

describe('calculateTotal', () => {
  test('should return the expected calculated total', () => {
    const expected = 14.30
    const actual = calculateTotal(10.50, 2.30, 1.50)

    expect(actual).toEqual(expected)
  })
  
  test('should return 0 when all parameters are missing', () => {
    const expected = 0
    const actual = calculateTotal()

    expect(actual).toEqual(expected)
  })
})

describe('recalculate', () => {
  test('should return an object of recalculated values', () => {
    const expected = {
      subTotal: 55.5,
      taxes: 11.1,
      delivery: 0,
      total: 66.6,
    }
    const selectedItems = [
      {
        id: '1',
        title: 'title 1',
        description: 'description 1',
        price: 50.00
      },
      {
        id: '2',
        title: 'title 2',
        description: 'description 2',
        price: 5.50
      },
    ]
    const actual = recalculate(selectedItems)

    expect(actual).toEqual(expected)
  });

  test('should return defaults when selectedItems is an empty array', () => {
    const expected = {
      subTotal: 0,
      taxes: 0,
      delivery: 0,
      total: 0,
    }
    const actual = recalculate([])

    expect(actual).toEqual(expected)
  });

  test('should return defaults when no param is passed', () => {
    const expected = {
      subTotal: 0,
      taxes: 0,
      delivery: 0,
      total: 0,
    }
    const actual = recalculate()

    expect(actual).toEqual(expected)
  });
});
