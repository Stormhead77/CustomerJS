const {Address} = require("../src/Address")

describe("Address", () => {
    it("should create address", () => {
        let addressLine = "addressLine"
        let addressLine2 = "addressLine2"
        let addressType = 1
        let city = "city"
        let postalCode = "123456"
        let state = "state"
        let country = "country"

        let address = new Address(addressLine, addressLine2, addressType, city, postalCode, state, country)

        expect(address.addressLine).toBe(addressLine)
        expect(address.addressLine2).toBe(addressLine2)
        expect(address.addressType).toBe(addressType)
        expect(address.city).toBe(city)
        expect(address.postalCode).toBe(postalCode)
        expect(address.state).toBe(state)
        expect(address.country).toBe(country)
    })
})
