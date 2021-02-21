const express = require('express')
const dbCall = require('./model/dbCalls')
const app = express()

/**
 * 
 */

app.get('/', async (req, res) => {
  let results = await dbCall.SELECT('SELECT * FROM test')
  res.json(results)
})

app.listen(3030, '192.168.1.19', () => {
  console.log(`Listening on port 3030 at 192.168.1.19`)
})
