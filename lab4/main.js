var uuid4 = require('uuid4')

function Cloth(id, type) {
    this.id = id,
    this.type = type
}

function Jeans(id, type, model, size, forMen, price, colors, outlet) {
    Cloth.call(this, id, type)
    this.model = model,
    this.size = size,
    this.forMen = forMen,
    this.price = price,
    this.colors = colors,
    this.outlet = outlet
}

var cloth1 = new Jeans('uuid4()', 'jeans', 'slim', 28, false, 270, ['dark indigo', 'light wash blue'], false);

var cloth2 = new Jeans('uuid4()', 'jeans', 'skinny', 29, false, 190, ['dark indigo', 'white'], true);

var cloth3 = new Jeans('uuid4()', 'jeans', 'bootcut', 30, false, 250, ['light wash blue'], false);

var cloth4 = new Jeans('uuid4()', 'jeans', 'relaxed', 31, true, 200, ['navy blue', 'grey'], true);

var cloth5 = new Jeans('uuid4()', 'jeans', 'loose', 32, true, 280, ['grey', 'white'], false);

var cloth6 = new Jeans('uuid4()', 'jeans', 'straight', 33, true, 220, ['navy blue'], true);
