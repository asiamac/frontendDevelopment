const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
  res.append('Access-Control-Allow-Methods', 'GET,POST');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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

app.get('/api/clothes/summary', (req, res) => {
  const clothesSummary = clothes.map((cloth) => ({
    id: cloth.id,
    model: cloth.model,
    price: cloth.price,
    type: cloth.type
  }));

  res.statusCode = 200;
  res.send(clothesSummary);
});

app.get('/api/clothes/details/:id', (req, res) => {
  const cloth = clothes.find((cloth) => cloth.id === req.params.id);

  if (!cloth) {
    res.statusCode = 204;
    res.send();

    return;
  }

  const clothDetails = {
    forMen: cloth.forMen,
    outlet: cloth.outlet,
    size: cloth.size
  };

  res.statusCode = 200;
  res.send(clothDetails);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App is listening on port ${port}.`));
