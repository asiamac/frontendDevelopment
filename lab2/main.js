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
            clothes.push(cloth);
        }
    )
}

function showClothes(clothes, message) {
    clothes.forEach(function (cloth) {
        console.log(message, cloth.type, cloth.model);
    })
}

function showClothesWithPrice(clothes, message) {
    clothes.forEach(function (cloth) {
        console.log(message, cloth.type, cloth.model, cloth.price);
    })
}

function showClothWithPrice(cloth) {
    console.log(cloth.type, cloth.model, cloth.price);
}

function groupByPrice(clothes, price) {
    var cheap = clothes.filter(function (cloth) {
        return cloth.price < price;
    });

    var expensive = clothes.filter(function (cloth, price) {
        return cloth.price >= price;
    });

    var groupedByPrice = {
        cheap: cheap,
        expensive: expensive
    };
    return groupedByPrice;
}

function sortByPrice(clothes) {
    clothes.sort(function (a, b) {
        return a.price - b.price;
    }).map(function (cloth) {
        return cloth.type + cloth.model + cloth.price;
    })
}

function findByPrice(clothes, priceMin, priceMax) {
    return clothes.filter(function (cloth) {
        return cloth.price >= priceMin && cloth.price <= priceMax;
    }).map(function (cloth) {
        showClothWithPrice(cloth);
    })
}

function updateClothes(clothes, id, key, value) {
    var foundItem = clothes.find(function (cloth) {
        return cloth.id === id;
    });

    foundItem[key] = value;
}

function deleteClothes(clothes, id) {
    return clothes.filter(function (cloth) {
        return cloth.id !== id;
    })
}

addClothes(jeans, [cloth1, cloth2, cloth3, cloth4, cloth5, cloth6]);
showClothes(jeans, 'jeans after add');
console.log(groupByPrice(jeans, 250));
findByPrice(jeans, 210, 260);
updateClothes(jeans, cloth5.id, 'price', 320);
showClothesWithPrice(jeans, 'jeans after update');
jeans = deleteClothes(jeans, cloth3.id);
showClothes(jeans, 'jeans after delete');
sortByPrice(jeans);
showClothesWithPrice(jeans, 'after sortByPrice');
