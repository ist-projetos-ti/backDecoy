const moment = require("moment");
const con = require("../config/conection");

module.exports = {
  async alertaErro(req, res) {
    var erro = req.body;
    console.log(erro);
  },

  async getInformationMachine(req, res) {
    try {
      const response = await con.from("ex").select("idade").where({ id: 0 });
      return res.send(response);
    } catch (error) {
      console.log(error);
    }
  },

  async getInformationOrder(req, res) {
    const order = res.params.order;
    const IQtde = res.params.IQtde;
  },

  async getInformationOrdem(req, res) {},

  async getFilter(req, res) {},

  async getAlarms(req, res) {},

  async informationOrder(req, res) {},

  async statusMachine(req, res) {},

  // module.exports = {
  //   async alertaErro(req, res) {
  //     var erro = req.body;
  //     console.log(erro);
  //     res.send('Já fui alertado!');
  //   },

  //   async getProductsInformations(req, res) {
  // var prateleira = req.params.prateleira;
  // var mercado = req.params.mercado;
  // try {
  // const produtos = await con
  //   .from('produtos')
  //   .select(
  //     'nome',
  //     'espessura',
  //     'preco',
  //     'precoPromocao',
  //     'precoSocio',
  //     'divisoria',
  //     'larguraPrateleira'
  //   )
  //   .where({ prateleira: prateleira })
  //   .where({ mercado: mercado });

  // const prod =  produtos[0].preco
  //     res.send(produtos);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  // async saveDivisoriaInformations(req, res) {
  //   const arr = Object.getOwnPropertyNames(req.body);
  //   const objName = arr[0].split(';');
  //   let obj = {};

  //   objName.map((iten) => {
  //     const value = iten.split(':');
  //     const propName = value[0];
  //     obj[propName] = value[1];
  //   });

  //   obj.timestamp = moment.utc().format();

  //   await con.from('divisoria').insert({ ...obj });
  //   // console.log(obj);
  //   // console.log("salvo no banco");
  //   res.send('ok');
  // },

  // async getInformationSensores(req, res) {
  //   const xx = req.params.xx;
  //   try {
  //     let arr = [];
  //     arr[0] = await con
  //       .from('divisoria')
  //       .select('distancia', 'ocupacao', 'quantidade')
  //       .where({ indiceDivisoria: 1 })
  //       .orderBy('id', 'desc')
  //       .limit(1);

  //     arr[1] = await con
  //       .from('divisoria')
  //       .select('distancia', 'ocupacao', 'quantidade')
  //       .where({ indiceDivisoria: 2 })
  //       .orderBy('id', 'desc')
  //       .limit(1);

  //     arr[2] = await con
  //       .from('produtos')
  //       .select('preco', 'nome')
  //       .where({ id: '1' });

  //     arr[3] = await con
  //       .from('produtos')
  //       .select('preco', 'nome')
  //       .where({ id: '2' });

  //     res.send(arr);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  // async savePrecoInformation(req, res) {
  //   const id = req.params.idProduto;
  //   const upDatePreco = req.body;
  //   try {
  //     await con.from('produtos').update(upDatePreco).where({ id: id });

  //     res.send('alterado');
  //   } catch (error) {
  //     console.log(error);
  //     res.status(400).send('erro na solicitação');
  //   }
  // },
};
