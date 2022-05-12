const metasService = require('../services/meta.service');
const mongoose = require('mongoose');

const findAllMetasController = async (req, res) => {
  const allmetas = await metasService.findAllMetasService();
  if (allmetas.length == 0) {
    return res.status(404).send({ message: 'Não existe meta cadastrada!' });
  }
  res.send(allmetas);
};

const findByIdMetaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenMeta = await metasService.findByIdMetaservice(idParam);
  if (!chosenMeta) {
    return res.status(404).send({ message: 'Meta não encontrada!!' });
  }
  res.send(chosenMeta);
};

const createMetaController = async (req, res) => {
  const meta = req.body;
  const newMeta = await metasService.createMetaservice(meta);
  res.status(201).send(newMeta);
};

const updateMetaController = async (req, res) => {
  const idParam = req.params.id;

  const metaEdit = req.body;
  if (
    !metaEdit ||
    !metaEdit.name ||
    !metaEdit.price 
  ) {
    return res
      .status(400)
      .send({ message: ' Envie todos os campos preenchidos!' });
  }
  const updatedMeta = await metasService.updateMetaservice(idParam, metaEdit);
  res.send(updatedMeta);
};

const deleteMetaController = async (req, res) => {
  const idParam = req.params.id;
  await metasService.deleteMetaservice(idParam);
  res.send({ message: 'Meta deletada com sucesso!' });
};
module.exports = {
  findAllMetasController,
  findByIdMetaController,
  createMetaController,
  updateMetaController,
  deleteMetaController,
};
