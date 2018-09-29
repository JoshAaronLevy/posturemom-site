exports.up = function (knex, Promise) {
  return knex.schema.createTable('beta_testers', beta_testers => {
    beta_testers.increments();
    beta_testers.string('first_name');
    beta_testers.string('last_name');
    beta_testers.string('email');
    beta_testers.string('operating_system');
    beta_testers.string('comments');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('beta_testers');
};