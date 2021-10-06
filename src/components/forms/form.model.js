const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 6
  },
  path: {
    type: String,
    unique: true,
    lowercase: true,
    minLength: 3
  },
  fields: Array,
}, {
  timestamps: true
})

module.exports = mongoose.model('form', formSchema)