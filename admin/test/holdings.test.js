const holdings = require("../src/lib/holdings")

const testFinancialCompanies = [{
  "id": "1",
  "name": "The Big Investment Company",
  "address": "14 Square Place",
  "postcode": "SW18UU",
  "frn": "234165"
}, {
  "id": "2",
  "name": "The Small Investment Company",
  "address": "12 Circle Square",
  "postcode": "SW18UD",
  "frn": "773388"
}, {
  "id": "3",
  "name": "Capital Investments",
  "address": "1 Capital Road",
  "postcode": "SW18UT",
  "frn": "078592"
}]

const testInvestments = [{
  "id": "1",
  "userId": "1",
  "firstName": "Billy",
  "lastName": "Bob",
  "investmentTotal": 1400,
  "date": "2020-01-01",
  "holdings": [{"id": "2", "investmentPercentage": 1}]
}, {
  "id": "2",
  "userId": "2",
  "firstName": "Sheila",
  "lastName": "Aussie",
  "investmentTotal": 20000,
  "date": "2020-01-01",
  "holdings": [{"id": "1", "investmentPercentage": 0.5}, {"id": "2", "investmentPercentage": 0.5}]
}, {
  "id": "3",
  "userId": "1",
  "firstName": "Billy",
  "lastName": "Bob",
  "investmentTotal": 1300,
  "date": "2020-02-01",
  "holdings": [{"id": "2", "investmentPercentage": 1}]
}, {
  "id": "4",
  "userId": "2",
  "firstName": "Sheila",
  "lastName": "Aussie",
  "investmentTotal": 22000,
  "date": "2020-02-01",
  "holdings": [{"id": "1", "investmentPercentage": 0.5}, {"id": "2", "investmentPercentage": 0.5}]
}]

const result = [
  ["1", "Billy", "Bob", "2020-01-01", "The Small Investment Company", 1400],
  ["2", "Sheila", "Aussie", "2020-01-01", "The Big Investment Company", 10000],
  ["2", "Sheila", "Aussie", "2020-01-01", "The Small Investment Company", 10000],
  ["1", "Billy", "Bob", "2020-02-01", "The Small Investment Company", 1300],
  ["2", "Sheila", "Aussie", "2020-02-01", "The Big Investment Company", 11000],
  ["2", "Sheila", "Aussie", "2020-02-01", "The Small Investment Company", 11000]
]

test('Get Holdings From Investments And Companies', () => {
    const h = holdings.getHoldingsByUser(testInvestments, testFinancialCompanies)
    expect(h).toStrictEqual(result);
});  