import { readJSON } from '../../utils/utils.js'
const movies = readJSON('../movies.json')

export class MovieModel {
  constructor ({ id, title, year, director, genre, rate }) {
    this.id = id
    this.title = title
    this.year = year
    this.director = director
    this.genre = genre
    this.rate = rate
  }

  static async getAll ({ genre }) {
    if (!genre) return movies

    const movieFilter = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    )

    return movieFilter
  }

  static async getById ({ id }) {
    console.log(id)
    return movies.find((movie) => movie.id === id)
  }

  static async create ({ body }) {
    const newMovie = {
      id: crypto.randomUUID(),
      ...body
    }

    movies.push(newMovie)
    return newMovie
  }

  static async update ({ body, id }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    const updateMovie = {
      ...movies[movieIndex],
      ...body
    }

    movies[movieIndex] = updateMovie

    return updateMovie
  }

  static async delete ({ id }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    movies.splice(movieIndex, 1)

    return true
  }
}
