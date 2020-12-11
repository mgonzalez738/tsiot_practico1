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

describe("cuando se agrega un elemento al principio" , function() {
    var lista = new Lista();
    lista.add("clave2", "valor2");
    lista.add("clave1", "valor1");
    it("la lista de claves esta ordenada", function() {
        assert.equal(lista.getKeys()[0] === "clave1" & lista.getKeys()[1] === "clave2", true, "Not ordered");
    });
});

describe("cuando se agrega un elemento al final" , function() {
    var lista = new Lista();
    lista.add("clave1", "valor1");
    lista.add("clave2", "valor2");
    it("la lista de claves esta ordenada", function() {
        assert.equal(lista.getKeys()[0] === "clave1" & lista.getKeys()[1] === "clave2", true, "Not ordered");
    });
});

describe("cuando no se encuentra la clave buscada en la lista" , function() {
    var lista = new Lista();
    lista.add("clave1", "valor1");
    it("devuelve NaN como valor", function() {
        assert.isNaN(lista.find("clave2"));
    });
});

describe("cuando se elimina un elemento de la lista" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.delete("clave");
    it("el elemento no se encuentra en la lista", function() {
        assert.isNaN(lista.find("clave"));
    });
});





