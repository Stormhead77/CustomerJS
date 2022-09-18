const errorMessages = {
  longFirstName: 'First Name too long',
  emptyLastName: 'Last Name required',
  longLastName: 'Last Name too long',
  emptyAddresses: 'At least one Address required',
  wrongPhoneNumber: 'Incorrect Phone Number format',
  wrongEmail: 'Incorrect Email format',
  emptyNotes: 'At least one Note required',
  lastPurchaseDate: 'Can be not lower than 2020-1-1'
}

const constraints = {
  firstNameMaxLength: 50,
  lastNameMaxLength: 50,
  phoneNumberRegex: /^\+[1-9]\d{1,14}$/,
  emailRegex: /^\S+@\S+\.\S+$/,
  minLastPurchaseDate: new Date('2020-1-1')
}

function validate(customer) {
  let errors = []

  if (customer.firstName.length > constraints.firstNameMaxLength) {
    errors.push(errorMessages.longFirstName)
  }

  if (customer.lastName.length == 0) {
    errors.push(errorMessages.emptyLastName)
  }

  if (customer.lastName.length > constraints.lastNameMaxLength) {
    errors.push(errorMessages.longLastName)
  }

  if (customer.addressesList.length < 1) {
    errors.push(errorMessages.emptyAddresses)
  }

  if (!customer.phoneNumber.match(constraints.phoneNumberRegex)) {
    errors.push(errorMessages.wrongPhoneNumber)
  }

  if (!customer.email.match(constraints.emailRegex)) {
    errors.push(errorMessages.wrongEmail)
  }

  if (customer.notes.length < 1) {
    errors.push(errorMessages.emptyNotes)
  }

  if (customer.lastPurchaseDate < constraints.minLastPurchaseDate) {
    errors.push(errorMessages.lastPurchaseDate)
  }

  return errors
}

module.exports = { validate }
