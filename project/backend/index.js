const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

const prices = [];
const models = [];
const outlets = [];

app.get('/api/', (req, res) => res.send('Clothes API'));

app.get('/api/clothes/prices', (req, res) => {
  res.send(prices);
});

app.post('/api/clothes/prices', (req, res) => {
  const price = req.body.price;
  prices.push(price);
  res.send({ message: 'Price added to database' });
});

app.get('/api/clothes/models', (req, res) => {
  res.send(models);
});

app.post('/api/clothes/models', (req, res) => {
  const model = req.body.model;
  models.push(model);
  res.send({ message: 'Model added to database' });
});

app.get('/api/clothes/outlets', (req, res) => {
  res.send(outlets);
});

app.post('/api/clothes/outlets', (req, res) => {
  const outlet = req.body.outlet;

  outlets.push(outlet);
  res.send({ message: 'Outlet information added to database' });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App is listening on port ${port}.`));
