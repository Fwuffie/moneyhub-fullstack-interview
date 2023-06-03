const express = require("express")
const bodyParser = require("body-parser")

const config = require("config")
const csv = require("./lib/csv")
const holdings = require("./lib/holdings")

const app = express()

app.use(bodyParser.json({limit: "10mb"}))

app.get("/investments/export", async (req, res) => {
  const columns = [ 'User', 'First Name', 'Last Name', 'Date', 'Holding', 'Value' ]

  try {
    companies = await (await fetch(`${config.companiesServiceUrl}/companies/`)).json()
    investments = await (await fetch(`${config.investmentsServiceUrl}/investments/`)).json()
    
    const csvTxt = csv.generateCSV(holdings.getHoldingsByUser(investments, companies), columns)
    await csv.uploadCSV(`${config.investmentsServiceUrl}/investments/export`, csvTxt)

    res.set('Content-Type', 'text/csv')
    res.send(csvTxt)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})


app.get("/investments/:id", async (req, res) => {
  const {id} = req.params
  try {
    investments = await(await fetch(`${config.investmentsServiceUrl}/investments/${id}`)).json()
    res.send(investments)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

app.listen(config.port, (err) => {
  if (err) {
    console.error("Error occurred starting the server", err)
    process.exit(1)
  }
  console.log(`Server running on port ${config.port}`)
})
