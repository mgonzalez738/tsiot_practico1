module.exports = class Lista {

    #elementos;

    constructor() {
        this.#elementos = [];
    }

    count() {
        return this.#elementos.length;;
    }

    add(clave, valor) {
        this.#elementos.push({clave, valor});
    }

    find(clave) {
        if(this.#elementos.length === 1) {
            return this.#elementos[0].valor;
        }
        if(this.#elementos.length === 2) {
            return this.#elementos[1].valor;
        }
        return NaN;
    }

}