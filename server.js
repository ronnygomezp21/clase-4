const express = require('express')
const cors = require('cors')
require('dotenv').config({ quiet: true })

const app = express()

const port = process.env.PORT

app.use(cors())

app.disable('')

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'bienvenido al api de peliculas mas chevere del mundo' })
})

app.listen(port, () => {
  console.log(`El api esta corriendo en htttp:\\localhost:${port}`)
})

module.exports = app
