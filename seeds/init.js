exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, name: 'toyota' },
        { id: 2, name: 'honda' },
        { id: 3, name: 'ford' },
      ]);
    });
};
