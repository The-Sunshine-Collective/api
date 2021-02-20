const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('sunshine.db')

async function SELECT(sql) {
  let results
  db.serialize(() => {
    db.each(sql, async (err, row) => {
      results = await row
      showData(results)
    })

  })
  db.close()
}

function showData(data) {
  let cols = Object.keys(data)
  // console.log(`${cols[0]}: ${data[cols[0]]}, ${cols[1]}: ${data[cols[1]]}`)
  console.log(data)
  return data
}

async function test() {
  let output = await SELECT("Select * from test")
  console.log(output)
}

test()