const uuid4 = require('uuid4')

class Clothes {
  constructor(id, type) {
    this._id = id
    this._type = type
  }

  set id(value) {
    this._id = value
  }

  get type() {
    return this._type
  }

  set type(value) {
    this._type = value
  }

  get type() {
    return this._type
  }

  addClothes(clothes, collection) {
    collection.forEach(function(cloth) {
      clothes.push(cloth)
    })
  }
}

let Skirt = new Clothes(uuid4(), 'Skirt')

console.log(Skirt)

class Jeans extends Clothes {
  constructor(id, type, model, size, forMen, price, colors, outlet) {
    super(id, type),
      (this._model = model),
      (this._size = size),
      (this._forMen = forMen),
      (this._price = price),
      (this._colors = colors),
      (this._outlet = outlet)
  }

  set model(value) {
    this._model = value.toLowerCase()
  }

  get model() {
    return this._model
  }

  set size(value) {
    this._size = value
  }

  get size() {
    return this._size
  }

  set forMen(value) {
    this._forMen = value
  }

  get forMen() {
    return this._forMen
  }

  set price(value) {
    this._price = value
  }

  get price() {
    this._price
  }

  set colors(value) {
    this._colors = value
  }

  get colors() {
    this._colors
  }

  set outlet(value) {
    this._outlet = value
  }

  get outlet() {
    this._outlet
  }
}

let cloth1 = new Jeans(uuid4(), 'jeans', 'slim', 28, false, 270, ['dark indigo', 'light wash blue'], false)

let cloth2 = new Jeans(uuid4(), 'jeans', 'skinny', 29, false, 190, ['dark indigo', 'white'], true)

let cloth3 = new Jeans(uuid4(), 'jeans', 'bootcut', 30, false, 250, ['light wash blue'], false)

let cloth4 = new Jeans(uuid4(), 'jeans', 'relaxed', 31, true, 200, ['navy blue', 'grey'], true)

let cloth5 = new Jeans(uuid4(), 'jeans', 'loose', 32, true, 280, ['grey', 'white'], false)

let cloth6 = new Jeans(uuid4(), 'jeans', 'straight', 33, true, 220, ['navy blue'], true)

let jeans = {}

Clothes.addClothes(jeans, [cloth1, cloth2, cloth3, cloth4, cloth5, cloth6])

console.log(jeans)
