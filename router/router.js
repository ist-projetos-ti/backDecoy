const express = require('express');
const globalController = require('../controllers/globalController');

const routes = express.Router();

routes.get('/machine', globalController.getInformationMachine);
routes.get('/order', globalController.getInformationOrder);
routes.get('/order/ordem', globalController.getInformationOrdem);
routes.get('/getinfo/filter?', globalController.getFilter);
routes.get('/alarms', globalController.getAlarms);

routes.post('/order', globalController.informationOrder);
routes.post('/machine', globalController.statusMachine);

module.exports = routes;
