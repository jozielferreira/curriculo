var nome = "Joziel Ferreira";
var cargo = "Developer in Development";

var nomehtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");


function colocarNomenohtml(nome) {
nomehtml.innerHTML = nome;
}

function colocarCargonoHtml(cargo){
    cargoHtml.innerHTML = cargo;
    }

function logarNome(){
    console.log(nome);
}

function clickNoProjetos(){
console.log("Clicou no botão projetos");
texto2.style.display = "block";
texto1.style.display = "none";
}
function clickNoSobre(){
    console.log.display = "Clicou no botão Sobre"
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomenohtml(nome);
colocarCargonoHtml(cargo);