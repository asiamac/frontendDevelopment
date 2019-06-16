var uuid4 = require('uuid4')

var clothes = {};
clothes.module = (function () {
  var clothesCollection = [];

  function groupByPrice(price) {
    var cheap = clothesCollection.filter(function (cloth) {
      return cloth.price < price;
    });

    var expensive = clothesCollection.filter(function (cloth) {
      return cloth.price >= price;
    });

    var groupedByPrice = {
      cheap: cheap,
      expensive: expensive
    };
    return groupedByPrice;
  }

  function findByPrice(priceMin, priceMax) {
    return clothesCollection.filter(function (cloth) {
      return cloth.price >= priceMin && cloth.price <= priceMax;
    });
  }

  function showClothes(clothes) {
    clothes.forEach(function (cloth) {
      console.log("id: ", cloth.id);
      console.log("type: ", cloth.type);
      console.log("price: ", cloth.price);
    })
  }

  return {
    addClothes: function (collection) {
      collection.forEach(
        function (cloth) {
          clothesCollection.push(cloth);
        }
      )
    },

    updateClothes: function (id, key, value) {
      var foundItem = clothesCollection.find(function (cloth) {
        return cloth.id === id;
      });

      foundItem[key] = value;
    },

    deleteClothes: function (id) {
      clothesCollection = clothesCollection.filter(function (cloth) {
        return cloth.id !== id;
      });
    },

    showByPrice: function (priceMin, priceMax) {
      console.log(findByPrice(priceMin, priceMax).map(function (cloth) {
        return cloth.getBasicInformation();
      }).join(', '));
    },

    sortByPrice: function () {
      clothesCollection.sort(function (a, b) {
        return a.price - b.price;
      }).map(function (cloth) {
        return cloth.getBasicInformation();
      }).forEach(function (cloth) {
        console.log(cloth);
      });
    },

    getExpensiveClothes: function (price) {
      var result = groupByPrice(price).expensive;
      showClothes(result);
      return result;
    }
  }
})();

function Cloth(id, type, model, size, forMen, price, colors, outlet) {
  this.id = id;
  this.type = type;
  this.model = model;
  this.size = size;
  this.forMen = forMen;
  this.price = price;
  this.colors = colors;
  this.outlet = outlet;
}

function Trouses(id, type, model, size, forMen, price, colors, outlet, lengthCut, lengthSize, waistSize) {
  Cloth.call(this, id, type, model, size, forMen, price, colors, outlet);
  this.lengthCut = lengthCut;
  this.lengthSize = lengthSize;
  this.waistSize = waistSize;
}

Cloth.prototype = {
  getBasicInformation: function () {
    return this.type + ' ' + this.model + ' ' + this.price;
  },
  numberOfColors: function () {
    return this.colors.length;
  },
  changePrice: function (newPrice) {
    return this.price = newPrice;
  }
}

Trouses.prototype = Object.create(Cloth.prototype);
Trouses.prototype.constructor = Trouses;
Trouses.prototype.getActualLength = function () {
  return this.lengthCut * this.lengthSize;
}

var cloth1 = new Cloth(uuid4(), 'jeans', 'bootcut', 30, false, 250, ['light wash blue'], false);
var cloth2 = new Cloth(uuid4(), 'chino', 'relaxed', 31, true, 200, ['navy blue', 'grey'], true);
var cloth3 = new Cloth(uuid4(), 'jeans', 'loose', 32, true, 280, ['grey', 'white'], false);
var cloth4 = new Trouses(uuid4(), 'jeans', 'slim', 28, false, 270, ['dark indigo', 'light wash blue'], false, 0.75, 30, 27);
var cloth5 = new Trouses(uuid4(), 'jeans', 'skinny', 29, false, 190, ['dark indigo', 'white'], true, 1, 31, 27);
var cloth6 = new Trouses(uuid4(), 'shorts', 'straight', 33, true, 220, ['navy blue'], true, 0.5, 32, 34);

clothes.module.addClothes([cloth1, cloth2, cloth3, cloth4, cloth5, cloth6]);
clothes.module.showClothes();
clothes.module.showByPrice(210, 260);
clothes.module.updateClothes(cloth5.id, 'price', 320);
clothes.module.showClothes();
clothes.module.deleteClothes(cloth3.id);
clothes.module.showClothes();
clothes.module.sortByPrice();
clothes.module.getExpensiveClothes(250);
