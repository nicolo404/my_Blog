const { Schema, model } = require("mongoose");

const categorySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    default: "default.png",
  },
  articles: {
    type: [Schema.ObjectId],
    ref: "article",
  },
});
module.exports = model("category", categorySchema);
