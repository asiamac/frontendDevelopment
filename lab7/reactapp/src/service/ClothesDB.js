const uuid4 = require('uuid4');

const clothes = [
  {
    id: uuid4(),
    type: 'jeans',
    model: 'slim',
    size: 28,
    forMen: false,
    price: 270,
    outlet: false
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'skinny',
    size: 29,
    forMen: false,
    price: 190,
    outlet: true
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'bootcut',
    size: 30,
    forMen: false,
    price: 250,
    outlet: false
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'relaxed',
    size: 31,
    forMen: true,
    price: 200,
    outlet: true
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'loose',
    size: 32,
    forMen: true,
    price: 280,
    outlet: false
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'straight',
    size: 33,
    forMen: true,
    price: 220,
    outlet: false
  }
]

export default clothes;
