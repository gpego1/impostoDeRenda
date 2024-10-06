import Pf from "./pf.js";

export default class Pj extends Pf{
    #cnpj;
    #tipoEmpresa;

    constructor(nome, rendaBruta, endereco, cnpj, tipoEmpresa) {
        super(nome, rendaBruta, endereco);
        this.#cnpj = cnpj;
        this.#tipoEmpresa = tipoEmpresa;
    }

    getCnpj() {return this.#cnpj;}
    setCnpj(cnpj) {this.#cnpj = cnpj;}
    getTipoEmpresa() {return this.#tipoEmpresa;}
    setTipoEmpresa(tipoEmpresa) {this.#tipoEmpresa = tipoEmpresa;}

    calcularImposto() {
        return this.getrendaBruta() * 0.10;
    }

}