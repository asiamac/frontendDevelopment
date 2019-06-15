const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const minArrayIndex = 0;
const removeOneElement = 1;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
  res.append('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const clothes = [
  {
    forMen: false,
    id: 'acd958e2-7d74-4a02-9fcd-e460270289d9',
    model: 'skinny',
    outlet: false,
    price: 199,
    size: 5,
    type: 'jeans'
  },
  {
    forMen: false,
    id: 'ba3e2df3-7f02-4d35-9df5-e3ee0c5f8e69',
    model: 'cotton',
    outlet: true,
    price: 59,
    size: 9,
    type: 'shirt'
  },
  {
    forMen: true,
    id: '77c51207-ad47-46c2-8901-dd0c42d87d06',
    model: 'summer',
    outlet: false,
    price: 29,
    size: 6,
    type: 'hat'
  },
  {
    forMen: false,
    id: '01cc9a29-5827-4a0f-a8de-824b3c47fd8b',
    model: 'winter',
    outlet: true,
    price: 399,
    size: 7,
    type: 'shoes'
  }
];

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

app.delete('/api/clothes/:id', (req, res) => {
  const cloth = clothes.findIndex((cloth) => cloth.id === req.params.id);

  if (cloth < minArrayIndex) {
    res.statusCode = 204;
    res.send();

    return;
  }

  clothes.splice(cloth, removeOneElement);

  res.statusCode = 202;
  res.send();
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App is listening on port ${port}.`));
