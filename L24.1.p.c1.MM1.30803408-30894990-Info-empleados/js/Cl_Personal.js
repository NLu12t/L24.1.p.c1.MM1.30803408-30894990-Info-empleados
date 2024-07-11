export default class Cl_Personal {
    constructor(t, n) {
        this.nombre = n;
        this.tipo = ' ';
        this.gana = 0;
    }

//metodos
    set nombre (n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }

    set tipo(t) {
        this._tipo = t;
    }
    get tipo() {
        return this._tipo;
    }
    
    set gana(g) {
        this._gana = g;
    }
    get gana() {
        return this._gana;
    }
}