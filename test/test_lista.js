const assert = require("chai").assert;

const Lista = require("../src/Lista.js");

describe("en una lista vacia" , function() {
    var lista = new Lista();
    it("hay cero elementos", function() {
        assert.equal(lista.count(), 0);
    });
    it("no se encuentra ninguna clave", function() {
        assert.isNaN(lista.find("clave"));
    });
});

describe("cuando se agrega un elemmento a una lista vacia" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    it("hay un elemento", function() {
        assert.equal(lista.count(), 1);
    });
    it("se puede recuperar un elemento a partir de la clave", function() {
        assert.equal(lista.find("clave"), "valor");
    });
    it("la lista de claves esta ordenada", function() {
        assert.equal(lista.getKeys()[0], "clave");
    });
});

describe("cuando se agrega una clave que ya esta en la lista" , function() {
    var lista = new Lista();
    lista.add("clave", "valor1");
    lista.add("clave", "valor2");
    it("se actualiza el valor correspondiente", function() {
        assert.equal(lista.find("clave"), "valor2");
    });
});



