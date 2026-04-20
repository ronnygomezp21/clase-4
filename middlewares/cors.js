import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:8081'
]

export const corsMiddleware = () => cors({
  origin: (origin, callback) => {
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
})
