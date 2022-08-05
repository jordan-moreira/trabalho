function sacar() {
    notas(1578);
}


let du, c, ci, vi, d, cin, doi, u;

function notas(valor) {

    let duz = (valor - (valor % 200)) / 200;
    du = !!duz ? `${duz} nota(s) de R$200.` : "";
    valor %= 200;

    let cem = (valor - (valor % 100)) / 100;
    c = !!cem ? `${cem} nota(s) de R$100.` : "";
    valor %= 100;

    let cinq = (valor - (valor % 50)) / 50;
    ci = !!cinq ? `${cinq} nota(s) de R$50.` : "";
    valor %= 50;

    let vint = (valor - (valor % 20)) / 20;
    vi = !!vint ? `${vint} nota(s) de R$20.` : "";
    valor %= 20;

    let dez = ((valor % 20) - (valor % 10)) / 10;
    d = !!dez ? `${dez} nota(s) de R$10.` : "";
    valor %= 10;

    let cinc = (valor - (valor % 5)) / 5;
    cin = !!cinc ? `${cinc} nota(s) de R$5.` : "";
    valor %= 5;

    let dois = (valor - (valor % 2)) / 2;
    doi = !!dois ? `${dois} nota(s) de R$2.` : "";
    valor %= 2;

    let um = valor;
    u = !!um ? `${um} nota(s) de R$1.` : "";

    console.log(du, c, ci, vi, d, cin, doi, u);
}