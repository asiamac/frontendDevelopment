const uuid4 = require('uuid4')

const clothes = [
  {
    id: uuid4(),
    type: 'jeans',
    model: 'slim',
    size: 28,
    forMen: false,
    price: 270,
    colors: ['dark indigo', 'light wash blue'],
    outlet: {
      outlet: false,
      year: 2019
    }
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'skinny',
    size: 29,
    forMen: false,
    price: 190,
    colors: ['dark indigo', 'white'],
    outlet: {
      outlet: true,
      year: 2018
    }
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'bootcut',
    size: 30,
    forMen: false,
    price: 250,
    colors: ['light wash blue'],
    outlet: {
      outlet: false,
      year: 2019
    }
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'relaxed',
    size: 31,
    forMen: true,
    price: 200,
    colors: ['navy blue', 'grey'],
    outlet: {
      outlet: true,
      year: 2018
    }
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'loose',
    size: 32,
    forMen: true,
    price: 280,
    colors: ['grey', 'white'],
    outlet: {
      outlet: false,
      year: 2019
    }
  },
  {
    id: uuid4(),
    type: 'jeans',
    model: 'straight',
    size: 33,
    forMen: true,
    price: 220,
    colors: ['navy blue'],
    outlet: {
      outlet: false,
      year: 2019
    }
  }
]

export default clothes
