exports.seed = function (knex, Promise) {
  return knex('beta_testers').del()
    .then(function () {
      return knex('beta_testers').insert([{
        id: 1,
        first_name: `Josh`,
        last_name: `Lovely`,
        email: `joshaaronlevy@gmail.com`,
        operating_system: `Mac OSX`,
        comments: `Super Admin`
      }]);
    });
};