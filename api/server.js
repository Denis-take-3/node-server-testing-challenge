const express = require('express');

const cars = require('../cars/carsModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'welcome to the last assignment of the core curriculum!' });
});

server.get('/cars', (req, res) => {
  cars
    .find()
    .then((car) => res.status(201).json(car))
    .catch((err) => res.status(500).json({ message: err }));
});

server.post('/cars', (req, res) => {
  cars
    .create(req.body)
    .then((car) => res.status(201).json(car))
    .catch((err) => res.status(500).json({ message: err }));
});

server.delete('/cars/:id', (req, res) => {
  cars
    .remove(req.params.id)
    .then((deleted) => res.status(200).json({ deleted: deleted }))
    .catch((err) => res.status(500).json({ message: err }));
});
module.exports = server;
