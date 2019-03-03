var cloth1 = {
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

function addClothes(clothes) {
    clothes.forEach(
        function (cloth) {
            jeans.push(cloth)
        }
    )
}

addClothes([cloth1, cloth2, cloth3, cloth4, cloth5, cloth6]);

function sortByPrice(clothes, price) {
    var cheapJeans = jeans.filter(function (cloth) {
        return cloth.price < this.price;
    }, {price: price});

    var expensiveJeans = jeans.filter(function (cloth, price) {
        return cloth.price >= this.price;
    }, {price: price});
    
    var sortedByPrice = {
        cheapJeans: cheapJeans,
        expensiveJeans: expensiveJeans
    };
    return sortedByPrice
}

sortByPrice(jeans, 250);

function findByPrice(clothes, priceMin, priceMax) {
    return clothes.filter(function (cloth) {
        return cloth.price >= this.priceMin && cloth.price <= this.priceMax
    }, {priceMin: priceMin, priceMax: priceMax})
}

findByPrice(jeans, 210, 260);
