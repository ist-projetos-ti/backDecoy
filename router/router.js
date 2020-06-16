const express = require("express");
const globalController = require("../controllers/globalController");

const routes = express.Router();

routes.get("/", (req, res) => res.send("oi"));
routes.get("/machine", globalController.getInformationMachine);
routes.get("/orders", globalController.getInformationOrder);
routes.get("/currentOrder", globalController.getCurrentOrdem);
routes.get("/getinfo/filter?", globalController.getFilter);
routes.get("/alarms", globalController.getAlarms);
routes.get("/historyproduction", globalController.gethistoryproduction);

routes.post("/order", globalController.informationOrder);
routes.put("/machine", globalController.statusMachine);

module.exports = routes;
