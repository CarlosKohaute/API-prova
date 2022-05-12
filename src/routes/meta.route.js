const route = require('express').Router();
const { Router } = require('express');
const controllerMetas = require('../controllers/meta.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

const {
  validId,
  validObjectBody,
  validObjectBodyCart,
} = require('../middlewares/meta.middleware');


route.get('/find-metas', controllerMetas.findAllMetasController);
route.get(
  '/find-one-meta/:id',
  validId,
  controllerMetas.findByIdMetaController,
);
route.post('/create', validObjectBody, controllerMetas.createMetaController);
route.put(
  '/update/:id',
  validId,
  validObjectBody,
  controllerMetas.updateMetaController,
);
route.delete('/delete/:id', validId, controllerMetas.deleteMetaController);

module.exports = route;
