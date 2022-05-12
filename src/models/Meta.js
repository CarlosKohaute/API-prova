const mongoose = require('mongoose');

const MetaSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const Metas = mongoose.model('metas', MetaSchema);

module.exports = Metas;
