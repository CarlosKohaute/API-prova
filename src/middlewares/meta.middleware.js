const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const meta = req.body;

  if (!meta || !meta.name || !meta.price ) {
    return res
      .status(400)
      .send({ message: ' Envie todos os campos preenchidos!' });
  }
  next();
};


module.exports = {
  validId,
  validObjectBody,
};
