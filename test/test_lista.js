const assert = require("chai").assert;

const Lista = require("../src/Lista.js");

describe("en una lista vacia" , function() {
    var lista = new Lista();
    it("hay cero elementos", function() {
        assert.equal(lista.count(), 0);
    });
});

describe("cuando se agrega un elemmento a una lista vacia" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    it("hay un elemento", function() {
        assert.equal(lista.count(), 1);
    });
});



