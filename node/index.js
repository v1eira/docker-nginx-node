const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const mysql = require('mysql')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  const num = Math.floor(Math.random() * 9999)
  connection.query(`INSERT INTO people (name) VALUES ('Vasco da Gama ${num}')`)

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      ${results.map(r => `<li>${r.name}</li>`)}
    `)
  })
})

app.listen(port, () => {
  console.log('Running on port:', port);
})