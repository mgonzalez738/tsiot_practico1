module.exports = class Lista {

    #elementos;

    constructor() {
        this.#elementos = [];
    }

    count() {
        return this.#elementos.length;;
    }

    add(clave, valor) {
        for(let i=0; i<this.#elementos.length; i++) {
            if(this.#elementos[i][clave]) {
                this.#elementos[i][clave] = valor;
                return;
            }
        }
        var elemento = {};
        elemento[clave] = valor;
        this.#elementos.push(elemento);
    }

    find(clave) {
        if(this.#elementos.length === 0)
            return NaN;
        let elemento = this.#elementos.find(el => Object.keys(el)[0] === clave);
        if(!elemento)
            return NaN;
        return elemento[clave]; 
    }

    getKeys() {
        var claves = [];
        for (let elemento of this.#elementos) {
            claves.push(Object.keys(elemento)[0]);
        }
        return claves.sort();
    }

    delete(clave) {
        for (var indice = 0; indice < this.#elementos.length; indice++) {
            if (Object.keys(this.#elementos[indice])[0] === clave) {
                this.#elementos.splice(indice, 1);
                return;
            }
        }
    }

}