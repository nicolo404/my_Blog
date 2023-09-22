const { Schema, model } = require("mongoose");

const ArticleSchema = Schema({
  titulo: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  imagen: {
    type: String,
    default: "default.png",
  },
  categoria: {
    type: Schema.ObjectId,
    ref: "category",
  },
});

module.exports = model("Articles", ArticleSchema);
