const { Customer } = require('../Customer')
const { Address } = require('../Address')

describe('Customer', () => {
  it('should create customer', () => {
    let firstName = 'Dmitriy'
    let lastName = 'Tolstykh'
    let phoneNumber = '+8924'
    let email = 'mail@mail.com'
    let totalPurchasesAmount = 1
    let lastPurchaseDate = new Date('2020-1-1')
    let addressesList = [
      new Address(
        'addressLine',
        'addressLine2',
        'addressType',
        'city',
        '123456',
        'state',
        'country'
      )
    ]
    let notes = ['123']

    let customer = new Customer(
      firstName,
      lastName,
      phoneNumber,
      email,
      totalPurchasesAmount,
      lastPurchaseDate,
      addressesList,
      notes
    )

    expect(customer.firstName).toBe(firstName)
    expect(customer.lastName).toBe(lastName)
    expect(customer.phoneNumber).toBe(phoneNumber)
    expect(customer.email).toBe(email)
    expect(customer.totalPurchasesAmount).toBe(totalPurchasesAmount)
    expect(customer.lastPurchaseDate).toBe(lastPurchaseDate)
    expect(customer.addressesList).toBe(addressesList)
    expect(customer.notes).toBe(notes)
  })
})
