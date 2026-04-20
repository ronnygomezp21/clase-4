import app from './server.js'

app.use((req, res) => {
  res.status(404).json({ message: 'route not found' })
})
