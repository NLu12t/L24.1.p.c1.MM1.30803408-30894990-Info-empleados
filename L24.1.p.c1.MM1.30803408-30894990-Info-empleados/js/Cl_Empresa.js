export default class Cl_Empresa {
    constructor() {
        this.contObreros = 0;
        this.contAdmin = 0;
        this.acumObreros = 0;
        this.acumAdmin = 0;
    }

    procesarPersonal(p) {
        if (p.tipo ===`obrero`) {
            this.contObreros++;
            this.acumObreros += p.gana;
        } else (p.tipo ===`administrativo`) ;{
            this.contAdmin++;
            this.acumAdmin += p.gana;
        }       
    }
    //metodos de calculo
    calcPromedioObrero(){
       return this.acumObreros / this.contObreros ;
    }
    calcPromedioObrero(){
        return this.acumAdmin / this.contAdmin;
    }
}