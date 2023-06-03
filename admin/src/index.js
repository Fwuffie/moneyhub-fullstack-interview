const express = require("express")
const bodyParser = require("body-parser")
const config = require("config")

const app = express()

app.use(bodyParser.json({limit: "10mb"}))

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
