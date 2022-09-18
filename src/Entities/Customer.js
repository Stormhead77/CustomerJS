const { Person } = require('./Person')

class Customer extends Person {
  constructor(
    firstName,
    lastName,
    phoneNumber,
    email,
    totalPurchasesAmount,
    lastPurchaseDate,
    addressesList,
    notes
  ) {
    super(firstName, lastName)
    this.phoneNumber = phoneNumber
    this.email = email
    this.totalPurchasesAmount = totalPurchasesAmount
    this.lastPurchaseDate = lastPurchaseDate
    this.addressesList = addressesList
    this.notes = notes
  }
}

module.exports = { Customer }
