import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'prosconsdb',
})

export function queryPromise(queryString, values) {
  return new Promise((resolve, reject) => {
    connection.query(queryString, values, (error, results) => {
      if (error) {
        return reject(error)
      }
      resolve(results)
    })
  })
}

export { connection }
