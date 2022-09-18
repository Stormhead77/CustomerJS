const { validate } = require('../CustomerValidator')
const { Customer } = require('../../Entities/Customer')
const { Address } = require('../../Entities/Address')

function GetCustomer() {
  return new Customer(
    'Harold',
    'Johnson',
    '+12673935933',
    'HaroldSJohnson@armyspy.com',
    0,
    new Date('2020-1-1'),
    [
      new Address(
        'addressLine',
        'addressLine2',
        1,
        'city',
        '123456',
        'state',
        'Canada'
      )
    ],
    ['123']
  )
}

describe('CustomerValidator', () => {
  it('should not contain errors', () => {
    let customer = GetCustomer()

    let errors = validate(customer)

    expect(errors).toEqual([])
  })

  it('should contain first name too long', () => {
    let customer = GetCustomer()
    customer.firstName = 'a'.repeat(51)

    let errors = validate(customer)

    expect(errors).toContain('First Name too long')
  })

  it('should contain last name required', () => {
    let customer = GetCustomer()
    customer.lastName = ''

    let errors = validate(customer)

    expect(errors).toContain('Last Name required')
  })

  it('should contain last name too long', () => {
    let customer = GetCustomer()
    customer.lastName = 'a'.repeat(51)

    let errors = validate(customer)

    expect(errors).toContain('Last Name too long')
  })

  it('should contain at least one address required', () => {
    let customer = GetCustomer()
    customer.addressesList = []

    let errors = validate(customer)

    expect(errors).toContain('At least one Address required')
  })

  it('should contain incorrect phone number format', () => {
    let customer = GetCustomer()
    customer.phoneNumber = ''

    let errors = validate(customer)

    expect(errors).toContain('Incorrect Phone Number format')
  })

  it('should contain incorrect email format', () => {
    let customer = GetCustomer()
    customer.email = ''

    let errors = validate(customer)

    expect(errors).toContain('Incorrect Email format')
  })

  it('should contain at least one note required', () => {
    let customer = GetCustomer()
    customer.notes = []

    let errors = validate(customer)

    expect(errors).toContain('At least one Note required')
  })

  it('should contain can be not lower than 2020-1-1', () => {
    let customer = GetCustomer()
    customer.lastPurchaseDate = new Date('2019-12-31')

    let errors = validate(customer)

    expect(errors).toContain('Can be not lower than 2020-1-1')
  })
})
