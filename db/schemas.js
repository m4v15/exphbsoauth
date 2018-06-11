const mongoose = require('mongoose')

const postsSchema = mongoose.Schema(
  {
    subject: { type: String, required: true },
    body: { type: String, required: true }
  },
  {
    timestamps: true
  }
)


module.exports = {
  Posts: mongoose.model('Posts', postsSchema)
}