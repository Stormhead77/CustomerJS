const errorMessages = {
  emptyAddressLine: 'Address Line required',
  longAddressLine: 'Address Line too long',
  longAddressLine2: 'Address Line2 too long',
  wrongType: 'Wrong Address Type',
  emptyCity: 'City required',
  longCity: 'City too long',
  emptyPostalCode: 'Postal Code required',
  longPostalCode: 'Postal Code too long',
  emptyState: 'State required',
  longState: 'State too long',
  emptyCountry: 'Country required',
  wrongCountry: 'Country wrong or unavailable'
}

const constraints = {
  availableAddressTypes: [1, 2],
  availableCountries: ['United States', 'Canada'],

  addressLineMaxLength: 100,
  addressLine2MaxLength: 100,
  cityMaxLength: 50,
  postalCodeMaxLength: 6,
  stateMaxLength: 20
}

function validate(address) {
  let errors = []

  if (address.addressLine.length == 0) {
    errors.push(errorMessages.emptyAddressLine)
  }

  if (address.addressLine.length > constraints.addressLineMaxLength) {
    errors.push(errorMessages.longAddressLine)
  }

  if (address.addressLine2.length > constraints.addressLine2MaxLength) {
    errors.push(errorMessages.longAddressLine2)
  }

  if (!constraints.availableAddressTypes.includes(address.addressType)) {
    errors.push(errorMessages.wrongType)
  }

  if (address.city.length == 0) {
    errors.push(errorMessages.emptyCity)
  }

  if (address.city.length > constraints.cityMaxLength) {
    errors.push(errorMessages.longCity)
  }

  if (address.postalCode.length == 0) {
    errors.push(errorMessages.emptyPostalCode)
  }

  if (address.postalCode.length > constraints.postalCodeMaxLength) {
    errors.push(errorMessages.longPostalCode)
  }

  if (address.state.length == 0) {
    errors.push(errorMessages.emptyState)
  }

  if (address.state.length > constraints.stateMaxLength) {
    errors.push(errorMessages.longState)
  }

  if (address.country.length == 0) {
    errors.push(errorMessages.emptyCountry)
  }

  if (!constraints.availableCountries.includes(address.country)) {
    errors.push(errorMessages.wrongCountry)
  }

  return errors
}

module.exports = { validate }
