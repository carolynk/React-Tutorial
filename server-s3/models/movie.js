let mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
  name: String,
})

module.exports = mongoose.model('Movie', movieSchema)