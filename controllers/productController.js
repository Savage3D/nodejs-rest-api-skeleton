const model = require('mongoose').model('Product');
const db = require('../services/dbService');

async function getAll(req, res) {
  const responseObj = await db.getAllItems(model);
  res.status(200).json(responseObj);
}

async function getById(req, res) {
  const { id } = req.params;
  const responseObj = await db.getItemById(id, model);
  res.status(200).json(responseObj);
}

async function create(req, res) {
  const product = req.body;
  const responseObj = await db.createItem(product, model);
  res.status(201).json(responseObj);
}

async function update(req, res) {
  const { id } = req.params;
  const product = req.body;
  const responseObj = await db.updateItem(id, product, model);
  res.status(200).json(responseObj);
}

async function remove(req, res) {
  const { id } = req.params;
  await db.deleteItem(id, model);
  res.status(204);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
