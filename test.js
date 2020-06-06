var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'decoy',
    password: 'senai@123',
    database: 'decoy',
  },
});

async function getInformationMachine() {
  try {
    const statusmachine = await knex.returning(temperature).returning(machine);
    // .from('ex')
    // .insert({ id: 1, id2: 1, numero: 0, idade: 25 });
    console.log(statusmachine);
  } catch (error) {
    console.log(error);
  }
}

getInformationMachine();
