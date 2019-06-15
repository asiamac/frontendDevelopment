const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

const clothes = [];


app.get('/api/', (req, res) => {
  res.send('Clothes API');
});

app.get('/api/clothes', (req, res) => {
  res.statusCode = 200;
  res.send(clothes);
});

app.post('/api/clothes', (req, res) => {
  clothes.push(req.body);

  res.statusCode = 201;
  res.send({ message: 'Cloth added to database' });
});

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    res.append('Access-Control-Allow-Methods', 'GET,POST');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App is listening on port ${port}.`));
