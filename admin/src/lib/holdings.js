const R = require("ramda")

/** 
 * @returns {[userId, firstName, lastName, date, holding, value][]}
 */ 
function getHoldingsByUser(investments, financialCompanies) {
  const getHoldingName = x => R.path(['name'], R.find(R.propEq("id", x), financialCompanies))

  return R.chain(
    investment => R.map(
      holding => [
        investment.userId,
        investment.firstName,
        investment.lastName,
        investment.date,
        getHoldingName(holding.id),
        holding.investmentPercentage * investment.investmentTotal
      ],
      investment.holdings
    ),
    investments
  )
}

module.exports = {getHoldingsByUser}