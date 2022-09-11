const { validate } = require('../src/AddressValidator')
const { Address } = require('../src/Address')

function GetAddress() {
  return new Address(
    'addressLine',
    'addressLine2',
    1,
    'city',
    '123456',
    'state',
    'Canada'
  )
}

describe('AddressValidator', () => {
  it('should not contain errors', () => {
    let address = GetAddress()

    let errors = validate(address)

    expect(errors).toEqual([])
  })

  it('should contain address line required', () => {
    let address = GetAddress()
    address.addressLine = ''

    let errors = validate(address)

    expect(errors).toContain('Address Line required')
  })

  it('should contain address line too long', () => {
    let address = GetAddress()
    address.addressLine = 'a'.repeat(101)

    let errors = validate(address)

    expect(errors).toContain('Address Line too long')
  })

  it('should contain address line2 too long', () => {
    let address = GetAddress()
    address.addressLine2 = 'a'.repeat(101)

    let errors = validate(address)

    expect(errors).toContain('Address Line2 too long')
  })

  it('should contain wrong address type', () => {
    let address = GetAddress()
    address.addressType = 0

    let errors = validate(address)

    expect(errors).toContain('Wrong Address Type')
  })

  let addressTypeCases = [1, 2]
  test.each(addressTypeCases)(
    'should not contain wrong address type for %d',
    (addressType) => {
      let address = GetAddress()
      address.addressType = addressType

      let errors = validate(address)

      expect(errors).not.toContain('Wrong Address Type')
    }
  )

  it('should contain city required', () => {
    let address = GetAddress()
    address.city = ''

    let errors = validate(address)

    expect(errors).toContain('City required')
  })

  it('should contain city too long', () => {
    let address = GetAddress()
    address.city = 'a'.repeat(51)

    let errors = validate(address)

    expect(errors).toContain('City too long')
  })

  it('should contain postal code required', () => {
    let address = GetAddress()
    address.postalCode = ''

    let errors = validate(address)

    expect(errors).toContain('Postal Code required')
  })

  it('should contain postal code too long', () => {
    let address = GetAddress()
    address.postalCode = 'a'.repeat(7)

    let errors = validate(address)

    expect(errors).toContain('Postal Code too long')
  })

  it('should contain state required', () => {
    let address = GetAddress()
    address.state = ''

    let errors = validate(address)

    expect(errors).toContain('State required')
  })

  it('should contain state too long', () => {
    let address = GetAddress()
    address.state = 'a'.repeat(21)

    let errors = validate(address)

    expect(errors).toContain('State too long')
  })

  it('should contain country required', () => {
    let address = GetAddress()
    address.country = ''

    let errors = validate(address)

    expect(errors).toContain('Country required')
  })

  it('should contain country wrong or unavailable', () => {
    let address = GetAddress()
    address.country = 'China'

    let errors = validate(address)

    expect(errors).toContain('Country wrong or unavailable')
  })
})
