const mongoose = require('mongoose');

require('../models/Product');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  retryWrites: true,
};

async function setupConnection(connectionString) {
  try {
    await mongoose.connect(connectionString, options);
    console.log('Db connected');
  } catch (error) {
    console.log(`Db connection failed\n${error.stack}`);
  }
}

async function getAllItems(model) {
  return model.find();
}

async function getItemById(id, model) {
  return model.findById(id);
}

async function createItem(item, model) {
  return model.create(item);
}

async function updateItem(id, item, model) {
  return model.findOneAndUpdate({ _id: id }, item, { new: true });
}

async function deleteItem(id, model) {
  return model.findOneAndDelete({ _id: id });
}

module.exports = {
  setupConnection,
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
