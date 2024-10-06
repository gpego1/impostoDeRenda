export default class Pf {
    #nome;
    #rendaBruta;
    #endereco;

    constructor(nome, rendaBruta, endereco) {
        this.#nome = nome;
        this.#rendaBruta = rendaBruta;
        this.#endereco = endereco;
    }

    getNome() {return this.#nome;}
    setNome(nome) {this.#nome = nome;}
    getrendaBruta() {return this.#rendaBruta;}
    setrendaBruta(rendaBruta) {this.#rendaBruta = rendaBruta;}
    getEndereco() {return this.#endereco;}
    setEndereco(endereco) {this.#endereco = endereco;}

    calcularImposto() {
        if(this.#rendaBruta >=0 && this.#rendaBruta <= 1400) {
            return this.#rendaBruta * 0;
        } else if(this.#rendaBruta >= 1400.01 && this.#rendaBruta <= 2100) {
            return this.#rendaBruta - (this.#rendaBruta * 0.10);
        } else if(this.#rendaBruta >= 2100.01 && this.#rendaBruta <= 2800) {
            return this.#rendaBruta - (this.#rendaBruta * 0.15);
        } else if (this.#rendaBruta >= 2800.01 && this.#rendaBruta <= 3600) {
            return this.#rendaBruta - (this.#rendaBruta * 0.25);
        } else {
            return this.#rendaBruta - (this.#rendaBruta * 0.30);
        }
    }
}
