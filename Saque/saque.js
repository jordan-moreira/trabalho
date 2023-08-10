

const objCedulas = {
    u: {
        id: "c1",
        result: "",
        valor: 1
    },
    doi: {
        id: "c2",
        result: "",
        valor: 2
    },
    cin: {
        id: "c5",
        result: "",
        valor: 5
    },
    d: {
        id: "c10",
        result: "",
        valor: 10
    },
    vi: {
        id: "c20",
        result: "",
        valor: 20
    },
    ci: {
        id: "c50",
        result: "",
        valor: 50
    },
    c: {
        id: "c100",
        result: "",
        valor: 100
    },
    du: {
        id: "c200",
        result: "",
        valor: 200
    }
},
    keysCedulas = Object.keys(objCedulas)


function sacar() {
    const valor = document.querySelector("#valor").value
    notas(valor);
    console.log(valor)
}


function notas(valor) {
    console.log(keysCedulas)

    keysCedulas.forEach(cedula => {

    })

    let duz = (valor - (valor % 200)) / 200;
    objCedulas.du.result = !!duz ? `${duz} nota(s) de R$200.` : "";
    valor %= 200;

    let cem = (valor - (valor % 100)) / 100;
    objCedulas.c.result = !!cem ? `${cem} nota(s) de R$100.` : "";
    valor %= 100;

    let cinq = (valor - (valor % 50)) / 50;
    objCedulas.ci.result = !!cinq ? `${cinq} nota(s) de R$50.` : "";
    valor %= 50;

    let vint = (valor - (valor % 20)) / 20;
    objCedulas.vi.result = !!vint ? `${vint} nota(s) de R$20.` : "";
    valor %= 20;

    let dez = ((valor % 20) - (valor % 10)) / 10;
    objCedulas.d.result = !!dez ? `${dez} nota(s) de R$10.` : "";
    valor %= 10;

    let cinc = (valor - (valor % 5)) / 5;
    objCedulas.cin.result = !!cinc ? `${cinc} nota(s) de R$5.` : "";
    valor %= 5;

    let dois = (valor - (valor % 2)) / 2;
    objCedulas.doi.result = !!dois ? `${dois} nota(s) de R$2.` : "";
    valor %= 2;

    let um = valor;
    objCedulas.u.result = !!um ? `${um} nota(s) de R$1.` : "";

    keysCedulas.forEach(cedula => {

        document.querySelector(`#${objCedulas[cedula].id}`).value = objCedulas[cedula].result

    });
}



