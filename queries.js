const database = require('./database-connection');

module.exports = {
  list() {
    return database('beta_testers').select();
  },
  read(id) {
    return database('beta_testers').select().where('id', id).first();
  },
  create(id) {
    return database('beta_testers')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('beta_testers')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('beta_testers').delete().where('id', id);
  }
};