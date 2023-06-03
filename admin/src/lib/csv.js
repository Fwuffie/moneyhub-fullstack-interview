const csv = require("csv-stringify/sync")

function generateCSV(data, columns) {
  const csvTxt = csv.stringify( data, {
      header: true,
      columns: columns
    }
  )

  return csvTxt
}
  
async function uploadCSV(url, csvTxt, callbackFn) {
  const payload = {'csv': csvTxt}

  fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  }

  resp = await fetch(url, fetchOptions)
  return
}

module.exports = {generateCSV, uploadCSV}