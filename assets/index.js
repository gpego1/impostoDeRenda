import Pf from "./pf.js";
import Pj from "./pj.js";

document.querySelector("#btn-pf").addEventListener("click", function() {
    showForm("pf");
});

document.getElementById("btn-pj").addEventListener("click", function() {
    showForm("pj");
})

function showForm(type) {
    document.querySelector("#form-pf").classList.add("hidden");
    document.querySelector("#form-pj").classList.add("hidden");
    document.querySelector("#resultado").classList.add("hidden");

    if(type === "pf") {
        document.querySelector("#form-pf").classList.remove("hidden");
    } else if(type === "pj") {
        document.querySelector("#form-pj").classList.remove("hidden");
    } else {
        return;
    }
}

document.querySelector("#pf-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome-pf").value; 
    const renda = document.getElementById("rendaBruta-pf").value.replace(/[^0-9,]/g, "").replace(".",",");
    const endereco = document.getElementById("endereco-pf").value;

    if (!nome || !renda || !endereco) {
        alert("Todos os campos são obrigatórios!")
        return;
    } 

    alert("Imposto calculado com sucesso!")
    const pFisica = new Pf(nome, renda, endereco);

document.getElementById("resultado").innerHTML = `
        <h3>Informações de Pessoa Física</h3>
        <p>Nome: ${pFisica.getNome()}</p>
        <p>Renda Bruta: R$ ${pFisica.getrendaBruta().toFixed(2)}</p>
        <p>ENDEREÇO: ${pFisica.getEndereco()}</p>
        <p>IMPOSTO: R$ ${pFisica.calcularImposto().toFixed(2)}</p>
    `;
    document.getElementById("resultado").classList.remove("hidden");
});

document.querySelector("#pj-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome-pj").value; 
    const renda = document.getElementById("rendaBruta-pj").value.replace(/[^0-9,]/g, "").replace(".",",");
    const endereco = document.getElementById("endereco-pj").value;
    const cnpj = document.getElementById("cnpj").value.replace(/[^0-9,]/g, "");
    const tipoEmpresa = document.getElementById("tipo-empresa").value;

    if (!nome || !cnpj || !tipoEmpresa || !renda) {
        alert("Todos os campos são obrigatórios.");
        return;
    }
    
    alert("Formulário de Pessoa Jurídica enviado com sucesso!");
    const pJuridica = new Pj(nome, renda, endereco, cnpj, tipoEmpresa);

    document.getElementById("resultado").innerHTML = `
        <h3>Informações de Pessoa Física</h3>
        <p>Nome: ${pJuridica.getNome()}</p>
        <p>Renda Bruta: R$ ${pJuridica.getrendaBruta().toFixed(2)}</p>
        <p>ENDEREÇO: ${pJuridica.getEndereco()}</p>
        <p>CNPJ: R$ ${pJuridica.getCnpj()}</p>
        <p>Tipo da Empresa: R$ ${pJuridica.getTipoEmpresa()}</p>
        <p>IMPOSTO: R$ ${pJuridica.calcularImposto().toFixed(2)}</p>
    `;
    document.querySelector("#resultado").classList.remove("hidden");
});

document.getElementById("pf-form").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("pf-form").submit();
    }
});

document.getElementById("pj-form").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("pj-form").submit();
    }
});
