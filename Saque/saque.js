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
  buttonSaque = document.querySelector("[button]");

buttonSaque.addEventListener("click", sacar);

function sacar() {
  const classe = buttonSaque.className;
  if (classe == "newSaque") {
    sacarNovamente();
    return;
  } else {
    const valor = document.querySelector("[valorSaque]").value;
    calculaNotas(valor);
    atualizarTela(valor);
    mostraResultado();
  }
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

function atualizarTela(valorSaque) {
  const saqueContainer = document.querySelector(".saque-container"),
    h2 = document.querySelector(".saque-container h2"),
    input = document.querySelector("[valorSaque]"),
    button = document.querySelector("[button]"),
    notasContainer = document.createElement("div");
  notasContainer.className = "notas-container";

  saqueContainer.removeChild(input);
  saqueContainer.appendChild(notasContainer);
  h2.classList.value = "tela-notas";
  h2.innerHTML = `R$${valorSaque},00`;
  button.classList.value = "newSaque";
  button.innerHTML = "Novo saque";
}

function mostraResultado() {
  const notasContainer = document.querySelector(".notas-container");

  keysCedulas.forEach((cedula) => {
    if (objCedulas[cedula].result != "") {
      const div = document.createElement("div"),
        p = document.createElement("p"),
        img = document.createElement("img");

      div.id = objCedulas[cedula].id;
      p.textContent = objCedulas[cedula].result;
      img.src = `../Saque/Cedulas/${objCedulas[cedula].valor}.png`;

      div.appendChild(p);
      div.appendChild(img);
      notasContainer.appendChild(div);
    }
  });
}

function sacarNovamente() {
  const saqueContainer = document.querySelector(".saque-container"),
    h2 = document.querySelector(".saque-container h2"),
    input = document.createElement("input"),
    button = document.querySelector("[button]"),
    notasContainer = document.querySelector(".notas-container");

  input.placeholder = "R$ 0,00";
  input.type = "number";
  input.setAttribute("valorSaque", "");
  saqueContainer.removeChild(notasContainer);
  saqueContainer.insertBefore(input, button);
  h2.classList.value = "tela-valor";
  h2.textContent = "Digite o valor do saque";
  button.classList.value = "sacar";
  button.innerHTML = "Sacar";
}
