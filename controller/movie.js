import { MovieModel } from '../models/local-file-system/movie.js'
import { validateMovie, validatePartialMovie } from '../schemas/movie.schema.js'

export class MovieController {
  static async getAll (req, res) {
    const { genre } = req.query
    const movies = await MovieModel.getAll({ genre })
    res.json(movies)
  }

  static async getById (req, res) {
    const { id } = req.params
    const moviesFiltered = await MovieModel.getById({ id })
    if (moviesFiltered) return res.json(moviesFiltered)
    res.status(404).json({ messages: 'movie not found' })
  }

  static async create (req, res) {
    const result = validateMovie(req.body)

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    } else {
      const movie = await MovieModel.create({ body: result.data })

      res.status(201).json({ message: 'movie created ', movie })
    }
  }

  static async update (req, res) {
    const result = validatePartialMovie(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const movie = await MovieModel.update({ body: result.data, id })

    if (!movie) return res.status(404).json({ message: 'Movie not found' })

    return res.json(movie)
  }

  static async delete (req, res) {
    const { id } = req.params

    const movie = await MovieModel.delete({ id })
    if (!movie) return res.status(404).json({ message: 'Movie not found' })

    return res.json({ message: 'movie delete' })
  }
}
