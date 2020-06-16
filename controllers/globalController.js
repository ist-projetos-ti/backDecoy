const moment = require("moment");
const con = require("../config/conection");

module.exports = {
  async alertaErro(req, res) {
    var erro = req.body;
    console.log(erro);
  },

  async getInformationMachine(req, res) {
    try {
      const statusmachine = await con
        .from("machine")
        .select("temperature", "machine");
      return res.send(statusmachine);
    } catch (error) {
      console.log(error);
    }
  },

  async getInformationOrder(req, res) {
    try {
      const history = await con.from("orders").where("end", "<>", "0");

      return res.send(history);
    } catch (error) {
      console.log(error);
    }
  },

  async getCurrentOrdem(req, res) {
    try {
      const currentOrder = await con.from("orders").where("end", "=", "0");

      return res.send(currentOrder);
    } catch (error) {
      console.log(error);
    }
  },

  async getFilter(req, res) {},

  async getAlarms(req, res) {
    try {
      const numOrder = await con
        .from("orders")
        .select("num_order")
        .where("end", "=", "0");

      const alarms = await con
        .from("alarms")
        .where("num_order", "=", numOrder[0].num_order);

      return res.send(alarms);
    } catch (error) {
      console.log(error);
    }
  },

  async informationOrder(req, res) {
    const {
      capQuantity,
      boardQuantity,
      inoculationTemp,
      operator,
      boardLot,
      bdaLot,
      fungusLot
    } = req.body;

    try {
      console.log(moment.utc().format());
      await con.from("orders").insert({
        capQuantity,
        boardQuantity,
        inoculationTemp,
        operator,
        boardLot,
        bdaLot,
        fungusLot,
        start: moment()
          .utc()
          .format()
      });
      return res.send({ response: true });
    } catch (error) {
      return res.send({ response: false });
    }
  },

  async gethistoryproduction(req, res) {
    try {
      const numOrder = await con
        .from("orders")
        .select("num_order")
        .where("end", "=", "0");
      const historyproduction = await con
        .from("historyproduction")
        .where({ num_order: numOrder[0].num_order });
      return res.send(historyproduction);
    } catch (error) {
      console.log(error);
    }
  },

  async statusMachine(req, res) {
    try {
      const isInitialized = await con
        .from("machine")
        .select("machine")
        .where({ id: 1 });
      const numOrder = await con
        .from("orders")
        .select("num_order")
        .where("end", "=", "0");
      // console.log(numOrder);

      if (numOrder.length === 0) {
        console.log("vazio");
        return res.send("Nenhuma ordem cadastrada");
      }
      // console.log("ignorou");
      if (isInitialized[0].machine) {
        const eQtde = await con
          .from("historyproduction")
          .where({ num_order: numOrder[0].num_order });
        await con.from("orders").update({
          eQtde: eQtde.length,
          end: moment()
            .utc()
            .format()
        });

        await con
          .from("machine")
          .update({ machine: false })
          .where({ id: 1 });
      } else {
        await con
          .from("machine")
          .update({ machine: true })
          .where({ id: 1 });
      }
      return res.send("Maquina Desligada");
    } catch (error) {
      console.log(error);
    }
  }
};
