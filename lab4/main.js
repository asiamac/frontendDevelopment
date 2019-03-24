var counter = {
    count: 0,
    incr: function () {
        this.count++;
    },
    getValue: function() {
        return this.count
    }
};

counter.incr();counter.incr();
console.log(counter.count);

// nie ma zmiennych prywatnych
// można przypisać do countera jakąś wartość mp. poprzez:
// counter.count = 5;
// niestety w js nie ma zmziennych prywatnych, nie ma modyfikatorów dostępów


var counter2 = function () { // tu jest stworzone domknięcie
    var count = 0; // przy domykaniu, ukrywamy tą zmienną
    return function () {
        //return count++; // postikrementacja, najpierw bierzemy wartość, a potem ją zwiększamy
        count += 1; // lepiej w ten sposób, zamiast post, lub preikrementacji
        return count; // lepiej w ten sposób, zamiast post, lub preikrementacji
    }
};

var c = counter2();
c();
c();
c.count = 100; // przy domknięciu, to nam nic nie zmieni

counter2()(); // jak mamy coś takiego, to za każdym razem jest tworzona nowa funkcja i nowy obiekt
counter2()();

counter.count = 5;
var val = c();
console.log(val);



// Immediately Executed Function
// Immediately Invoked Function Expression
var counter3 = (function () { 
    var  a = 5;
    var count = 0;
    function add(a, b) {
        return a + b
    }
    return function () {
        return add(a, count);
    }
})(); // wywołanie funkcji w tym miejscu poprzez (), ale przez to nie muszę mieć przypisania do funkcji

counter3();
counter3();
counter3();
counter3();
counter3();

var val = counter3();
console.log(val)



// modułowość, jQuery jest modułowe też

var counter4 = (function () { 
    var count = 0;

    return function () {
        return count++;
    }
})(); // wywołanie funkcji w tym miejscu poprzez (), ale przez to nie muszę mieć przypisania do funkcji

counter4();
counter4();
counter4();
counter4();
counter4();

var val = counter4();
console.log(val)




var lib = {}; // lib bilblioteka którą tworzymy
lib.module = (function () { // nasz moduł, W momencie gdy wywołujemy tą funkcję to wchodzimy w returna
    // i tylko w tedy mamy dostęp do funkcji i zmiennych wewnątrz
    var privateVariable;
    var privateFunction = function () {};
    
    return {
        publicProperty: 1,
        privilegedMethod: function (arg) {
            //privateVariable = arg;
        }
    }
})(); // wywołanie funkcji w tym miejscu poprzez (), ale przez to nie muszę mieć przypisania do funkcji

// 1) Zwykły kontekst
function f() {
    console.log("Hello");
}

f();

function f2() {
    console.log("Hello" + this.name);
}
f2();

// 2) Kontekst "w obiekcie" - funkcja staje się, jest metodą; wywołanie w kontekscie obiektu
var person = {
    name: 'Jan',
    sayHello: function () {
        console.log("Hello " + this.name);
    }
};

person.sayHello();

// this
// this w metodach wiąże do obiektu, w którym występuje
// funckje sayHello można przypisać do dowolnego obiektu
// this w obiekatach wiąże do obiektu
// this generalnie wiąże do globala, czyli w przeglądarce wiąże do window


function f3() {
    console.log(this);
}

//f3();

// 3) Kontekst konstruktora

function Person(firstname, yob) { //yob - year of birth
    this.firstname = firstname;
    this.yob = yob;
}

var jan = new Person('Jan', 1233);
// Person(firstname: 'Jan', yob: 1233);

// jak zapomnę new, to śmiecę globala, jest to złe zachowanie
var jan = Person('Jan', 1233);

// wszelkie konstruktory piszemy z wielkiej litery, wtedy wiadomo: jak wielka litera to muszę new użyć
// w ES5  konstruktor nie jest żadną specjalną funkcją
// jslint.com



 console.log(global.yob);
//  console.log(jan.yob);


 // 4) KOntekst innego obiektu, d o którego this powiąże
 function f5() {
    console.log("Hello " + this.imie);
}

f5.apply({ imie: "Jan" }); // wywołaj fukcję w kontekście jakiegoś obiektu

// bindując do this'a mogę robić tego typu konstrukcje
function say(message) {
    console.log("Jestem " + this.name + " i robię " + message);
}

var duck = {
    name: 'duck',
}
var dog = {
    name: 'dog',
}


say.apply(duck, ['KWA KWA']);
say.apply(dog, ['HAU HAU']);


// DZIEDZICZENIE
// w js jest dziedziczenie prototypowe
// każdy obiekt ma wspólnego przodka
// var obj ma przodka string?
// jak tworzyć obiekty, żeby były używalne przez typy potomne - musimy skorzystać z metody prototype

// prywatność zmiennej widzimy po podwójnych podkreśleniach __proto__
// (low level detailed, szczegół implementacyjny przy którym nie powinniśmy grzebać ma jedno podkreślenie)

// żeby korzystać prawidłowo z dziedziczenia należy korzystać z konstruktorów

function Shape (x, y) {
this.x = x;
this.y = y;
} // mamy kosntruktor

// mamy prototyp

Shape.prototype.message = function () {
 console.log("LALALA")
}

Shape.protoype = {
    getX: function () {
        return this.x;
    },
    getY: function () {
        return this.y;
    }
}

Shape.prototype.move = function (deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
  };

function Circle (x,y,r) {
    Shape.call(this, x, y); // wywołanie konstruktora bazowego
    this.r = r
}

Circle.prototype = Objecy.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Rozszerzanie
Circle.prototype.area = function() {
    return Math.PI * this.r * this.r
}

// Tworzymy obiekt
var aCircle = new Circle(20,30,2);
console.log(aCircle.area());
console.log(aCircle.message());