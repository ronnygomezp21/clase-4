// FORMA NATIVA
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// const movies = require('./movies.json')

// FORMA ACTUAL
// import movies from './movies.json' with { type: 'json' }

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)
