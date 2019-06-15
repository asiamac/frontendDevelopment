var uuid4 = require('uuid4');

var cloth1 = {
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
};

var cloth2 = {
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
};

var cloth3 = {
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
};

var cloth4 = {
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
};

var cloth5 = {
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
};

var cloth6 = {
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
};

var jeans = [];

function addClothes(clothes, collection) {
    collection.forEach(
        function (cloth) {
            clothes.push(cloth)
        }
    )
}

function sortByPrice(clothes, price) {
    var cheap = clothes.filter(function (cloth) {
        return cloth.price < price;
    });

    var expensive = clothes.filter(function (cloth, price) {
        return cloth.price >= price;
    });

    var sortedByPrice = {
        cheap: cheap,
        expensive: expensive
    };
    return sortedByPrice
}

// function findByPrice(clothes, priceMin, priceMax) {
//     return clothes.filter(function (cloth) {
//         return cloth.price >= this.priceMin && cloth.price <= this.priceMax
//     }, { priceMin: priceMin, priceMax: priceMax })
// }

function findByPrice(clothes, priceMin, priceMax) {
    return clothes.filter(function (cloth) {
        return cloth.price >= priceMin && cloth.price <= priceMax
    })
}

function updateClothes(clothes, id, key, value) {
    var foundItem = clothes.find(function (cloth) {
        return cloth.id === id
    });

    foundItem[key] = value;
}

function deleteClothes(clothes, id) {
    return clothes.filter(function (cloth) {
        return cloth.id !== id
    })
}

addClothes(jeans, [cloth1, cloth2, cloth3, cloth4, cloth5, cloth6]);
console.log('jeans after add', jeans)
console.log(sortByPrice(jeans, 250));
console.log('findByPrice', findByPrice(jeans, 210, 260));
updateClothes(jeans, cloth5.id, 'price', 320);
console.log('jeans after update', jeans)
jeans = deleteClothes(jeans, cloth3.id);
console.log('jeans after delete', jeans)
