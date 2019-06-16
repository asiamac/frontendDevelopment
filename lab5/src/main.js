const uuid4 = require('uuid4')

let clothes = {};

class Clothes {
  constructor() {
    this.clothesCollection = [];
  }

  groupByPrice(price) {
    const cheap = this.clothesCollection.filter(cloth => cloth.price < price);

    const expensive = this.clothesCollection.filter(cloth => cloth.price >= price);

    const groupedByPrice = {
      cheap: cheap,
      expensive: expensive
    };

    return groupedByPrice;
  }

  findByPrice(priceMin, priceMax) {
    return this.clothesCollection.filter((cloth) => cloth.price >= priceMin && cloth.price <= priceMax);
  }

  showClothes(clothes) {
    clothes.forEach(cloth => {
      console.log("id: ", cloth.id)
      console.log("type: ", cloth.type)
      console.log("price: ", cloth.price)
    })
  }

  addClothes(collection) { collection.forEach(cloth => this.clothesCollection.push(cloth)) };

  updateClothes(id, key, value) {
    const foundItem = this.clothesCollection.find(cloth => cloth.id === id);

    foundItem[key] = value;
  }

  deleteClothes(id) {
    this.clothesCollection = this.clothesCollection.filter(cloth => cloth.id !== id);
  }

  showByPrice(priceMin, priceMax) {
    return this.findByPrice(priceMin, priceMax).map(cloth => cloth.getBasicInformation());
  }

  sortByPrice() {
    this.clothesCollection.sort((a, b) => {
      return a.price - b.price;
    }).map(function (cloth) {
      return cloth.getBasicInformation();
    }).forEach(function (cloth) {
      console.log(cloth);
    });
  }

  getExpensiveClothes(price) {
    var result = this.groupByPrice(price).expensive;
    this.showClothes(result);
    return result;
  }
};

class Cloth {
  constructor(id, type, model, size, forMen, price, colors, outlet) {
    this.id = id;
    this.type = type;
    this.model = model;
    this.size = size;
    this.forMen = forMen;
    this.price = price;
    this.colors = colors;
    this.outlet = outlet;
  }

  getBasicInformation() { return this.type + ' ' + this.model + ' ' + this.price };

  numberOfColors() { return this.colors.length };

  changePrice(newPrice) { return this.price = newPrice };
}

class Trouses extends Cloth {
  constructor(id, type, model, size, forMen, price, colors, outlet, lengthCut, lengthSize, waistSize) {
    super(id, type, model, size, forMen, price, colors, outlet);

    this.lengthCut = lengthCut;
    this.lengthSize = lengthSize;
    this.waistSize = waistSize;
  }

  getActualLength() { return this.lengthCut * this.lengthSize };
}

var cloth1 = new Cloth(uuid4(), 'jeans', 'bootcut', 30, false, 250, ['light wash blue'], false);
var cloth2 = new Cloth(uuid4(), 'chino', 'relaxed', 31, true, 200, ['navy blue', 'grey'], true);
var cloth3 = new Cloth(uuid4(), 'jeans', 'loose', 32, true, 280, ['grey', 'white'], false);
var cloth4 = new Trouses(uuid4(), 'jeans', 'slim', 28, false, 270, ['dark indigo', 'light wash blue'], false, 0.75, 30, 27);
var cloth5 = new Trouses(uuid4(), 'jeans', 'skinny', 29, false, 190, ['dark indigo', 'white'], true, 1, 31, 27);
var cloth6 = new Trouses(uuid4(), 'shorts', 'straight', 33, true, 220, ['navy blue'], true, 0.5, 32, 34);

clothes = new Clothes();

clothes.addClothes([cloth1, cloth2, cloth3, cloth4, cloth5, cloth6])
clothes.showByPrice(210, 260);
clothes.updateClothes(cloth5.id, 'price', 320);
clothes.showClothes();
clothes.deleteClothes(cloth3.id);
clothes.sortByPrice();
clothes.getExpensiveClothes(250);
