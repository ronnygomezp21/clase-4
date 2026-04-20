import express from 'express'
import dotenv from 'dotenv'
import router from './routes/movie.js'
import { corsMiddleware } from './middlewares/cors.js'

dotenv.config({ quiet: true })

const app = express()

const port = process.env.PORT

app.use(corsMiddleware())

app.disable('x-powered-by')

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'bienvenido al api de peliculas mas chevere del mundo' })
})

app.use('/movies', router)

app.listen(port, () => {
  console.log(`El api esta corriendo en htttp:\\localhost:${port}`)
})

export default app
