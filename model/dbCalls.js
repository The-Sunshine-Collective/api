const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
sqlite3.verbose()

async function openDB(filename) {
  return open({
    filename,
    driver: sqlite3.Database
  })
}

async function SELECT(sql) {
  const db = await openDB('model/sunshine.db')
  const result = await db.all(sql)
  return result
}

async function test() {
  let output = await SELECT("Select * from test")
  console.log(output)
}

// test()

module.exports = {
  SELECT
}

