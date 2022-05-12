const Metas = require('../models/Meta');

const findAllMetasService = async () => {
  const allMetas = await Metas.find();
  return allMetas;
};
const findByIdMetaservice = async (idParam) => {
  const oneMeta = await Metas.findById(idParam);
  return oneMeta;
};

const createMetaservice = async  (newMeta) => {
  const metaCreated = await Metas.create(newMeta)
  return metaCreated;
};

const updateMetaservice = async (idParam, metaEdited) => {
  const metaUpdate = await Metas.findByIdAndUpdate(idParam, metaEdited)
  return metaUpdate;
};

const deleteMetaservice = async (id) => {
  return await Metas.findByIdAndDelete(id)
};
module.exports = {
  findAllMetasService,
  findByIdMetaservice,
  createMetaservice,
  updateMetaservice,
  deleteMetaservice,
};
