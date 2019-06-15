const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

const prices = [];
const models = [];
const outlets = [];


app.get('/api/', (req, res) => {
  res.send('Clothes API');
});

app.get('/api/clothes/prices', (req, res) => {
  res.statusCode = 200;
  res.send(prices);
});

app.post('/api/clothes/prices', (req, res) => {
  prices.push(req.body);

  res.statusCode = 201;
  res.send({ message: 'Price added to database' });
});

app.get('/api/clothes/models', (req, res) => {
  res.statusCode = 200;
  res.send(models);
});

app.post('/api/clothes/models', (req, res) => {
  models.push(req.body);

  res.statusCode = 201;
  res.send({ message: 'Model added to database' });
});

app.get('/api/clothes/outlets', (req, res) => {
  res.statusCode = 200;
  res.send(outlets);
});

app.post('/api/clothes/outlets', (req, res) => {
  outlets.push(req.body);

  res.statusCode = 201;
  res.send({ message: 'Outlet information added to database' });
});

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    res.append('Access-Control-Allow-Methods', 'GET,POST');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App is listening on port ${port}.`));
