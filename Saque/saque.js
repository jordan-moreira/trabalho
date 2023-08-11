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
  keysCedulas = Object.keys(objCedulas);

function sacar() {
  const valor = document.querySelector("#valor").value;
  calculaNotas(valor);
  mostraResultado();
}

function calculaNotas(valorSaque) {
  keysCedulas.forEach((cedula) => {
    let valorCedula = objCedulas[cedula].valor,
      quantidadeCedulas =
        (valorSaque - (valorSaque % valorCedula)) / valorCedula;

    objCedulas[cedula].result = !!quantidadeCedulas
      ? `${quantidadeCedulas} nota(s) de R$${objCedulas[cedula].valor}.`
      : "";
    valorSaque %= valorCedula;
  });
}

function mostraResultado() {
  keysCedulas.forEach((cedula) => {
    document.querySelector(`#${objCedulas[cedula].id}`).value =
      objCedulas[cedula].result;
  });
}
