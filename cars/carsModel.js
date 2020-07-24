const db = require('../data/dbConfig');

function find() {
  return db('cars');
}

function findById(id) {
  return db('cars').where({ id }).first();
}

async function create(data) {
  const [id] = await db('cars').insert(data);
  return findById(id);
}

async function update(id, data) {
  await db('cars').where({ id }).update(data);
  return findById(id);
}

function remove(id) {
  const deleted = findById(id);

  return db('cars')
    .where({ id })
    .del()
    .then(() => {
      return deleted;
    });
}

module.exports = {
  find,
  findById,
  create,
  update,
  remove,
};
