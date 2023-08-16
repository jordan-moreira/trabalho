const objCedulas = {
  duzentos: {
    id: "c200",
    result: "",
    valor: 200,
  },
  cem: {
    id: "c100",
    result: "",
    valor: 100,
  },
  cinquenta: {
    id: "c50",
    result: "",
    valor: 50,
  },
  vinte: {
    id: "c20",
    result: "",
    valor: 20,
  },
  dez: {
    id: "c10",
    result: "",
    valor: 10,
  },

  cinco: {
    id: "c5",
    result: "",
    valor: 5,
  },
  dois: {
    id: "c2",
    result: "",
    valor: 2,
  },
  um: {
    id: "c1",
    result: "",
    valor: 1,
  },
},
keysCedulas = Object.keys(objCedulas),
buttonSaque=document.querySelector(".sacar")

buttonSaque.addEventListener('click',sacar)


function sacar() {
  const valor = document.querySelector("[valorSaque]").value;
  calculaNotas(valor);
  atualizarTela(valor)
  mostraResultado();
}

function calculaNotas(valorSaque) {
  keysCedulas.forEach((cedula) => {
    let valorCedula = objCedulas[cedula].valor,
    quantidadeCedulas =
    (valorSaque - (valorSaque % valorCedula)) / valorCedula;
    
    objCedulas[cedula].result = !!quantidadeCedulas
    ? `${quantidadeCedulas}x`
    : "";
    valorSaque %= valorCedula;
  });
}

function atualizarTela(valorSaque){
const saqueContainer=document.querySelector(".saque-container"),
h2=document.querySelector(".saque-container h2"),
input=document.querySelector("[valorSaque]"),
button=document.querySelector("[button]"),
notasContainer='<div class="notas-container"></div>'

saqueContainer.removeChild(input)
saqueContainer.innerHTML+=notasContainer
h2.classList.value="tela-notas"
h2.innerHTML=`R$${valorSaque}`
button.classList.value="newSaque"
button.innerHTML="Novo saque"

}


function mostraResultado() {
const notasContainer=document.querySelector(".notas-container")
keysCedulas.forEach((cedula) => {
  const id=objCedulas[cedula].id,
  quantcedulas=objCedulas[cedula].result,
  valor=objCedulas[cedula].
  
  notasContainer.innerHTML+=`<div id="${id}">
  <p>${quantcedulas}</p>
  <img src="../Saque/Cedulas/${valor}.jpg" alt="nota de ${valor}">
  </div>`
});
}


