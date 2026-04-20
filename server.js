import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// FORMA NATIVA
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// const movies = require('./movies.json')

// FORMA ACTUAL
import movies from './movies.json' with { type: 'json' }

dotenv.config({ quiet: true })

const app = express()

const port = process.env.PORT

app.use(cors())

app.disable('')

app.use(json())

app.get('/', (req, res) => {
  res.json({ message: 'bienvenido al api de peliculas mas chevere del mundo' })
})

app.get('/movies', (req, res) => {
  res.json(movies)
})


app.listen(port, () => {
  console.log(`El api esta corriendo en htttp:\\localhost:${port}`)
})

export default app
