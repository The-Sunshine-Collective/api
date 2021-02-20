// const sqlite3 = require('sqlite3').verbose()
// const db = new sqlite3.Database('sunshine.db')
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
sqlite3.verbose()


/**
 * We have already determined the database file, so open it.
 */
// (async () => {
//   const db = await open({
//     filename: './sunshine.db',
//     driver: sqlite3.Database
//   })
// })()

async function openDB(filename) {
  return open({
    filename,
    driver: sqlite3.Database
  })
}

async function SELECT(sql) {
  const db = await openDB('./sunshine.db')
  const result = await db.all(sql)
  return result
}



// async function SELECT(sql, callback) {
//   let results
//   db.serialize(() => {
//     db.each(sql, async (err, row) => {
//       results = await row
//       callback(results)
//     })
//   })
//   db.close()
// }

// function showData(data) {
//   let cols = Object.keys(data)
//   // console.log(`${cols[0]}: ${data[cols[0]]}, ${cols[1]}: ${data[cols[1]]}`)
//   console.log(data)
//   return data
// }

// async function test() {
//   let output = await SELECT("Select * from test")
//   console.log(output)
// }

async function test() {
  let output = await SELECT("Select * from test")
  console.log(output)
}


test()

module.exports = {
  SELECT
}

