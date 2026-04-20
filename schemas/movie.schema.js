import z from 'zod'

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required.'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  // duration: z.number().int().positive(),
  rate: z.number().min(0).max(10),
  // poster: z.string().url({
  //   message: 'Poster must be a valid URL'
  // }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
    {
      required_error: 'Movie genre is required.',
      invalid_type_error: 'Movie genre must be an array of enum Genre'
    }
  )
})

function validateMovie (input) {
  return movieSchema.extend({ rate: z.number().default(5) }).safeParse(input)
}

function validatePartialMovie (input) {
  return movieSchema.partial().safeParse(input)
}

export { validateMovie, validatePartialMovie }

// *EXPORT DEFAULT* CUANDO SE QUIERE EXPORTAR SOLO UNA FUNCION, CLASE, ETC
// import (clase, metodo) from "archivo.js"

// *EXPORT* CUANDO SE QUIERE EXPORTAR VARIAS CLASES, FUNCIONES, ETC
// Y ESTE TIENE QUE SER IGUAL AL NOMBRE DEL CUAL ESTAS EXPORTANDO
// CUANDO SE VAYA A HACER LA IMPORTACION
// import { validateMovie, validatePartialMovie } from '../schemas/movie.schema.js'
