const { connection } = require('./route')

function queryPromise(queryString, values) {
  return new Promise((resolve, reject) => {
    connection.query(queryString, values, (error, results) => {
      if (error) {
        return reject(error)
      }
      resolve(results)
    })
  })
}

export default async function handler(req, res) {
  const { keyword_name, keyword_type, keyword_description } = req.body

  let queryString = `INSERT INTO keyword_table (keyword_name,keyword_type,keyword_description) VALUES (?, ?, ?)`
  let values = [keyword_name, keyword_type, keyword_description]

  try {
    const rows = await queryPromise(queryString, values)
    res.status(200).json(rows)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}
