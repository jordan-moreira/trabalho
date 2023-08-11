function check() { //Para verificar se o nome e senha estão corretos
    var nome = document.getElementById("Nome").value,
        senha = document.getElementById("Senha").value;
    console.log(nome);
    if (nome == "maria" && senha == "1234") {
        location.href = ('http://127.0.0.1:5500/Saque/saque.html'); //abre a página de saque
    } else {
        if (nome == "joao" && senha == "4321") {
            location.href = ('http://127.0.0.1:5500/Saque/saque.html');
        } else {
            alert("Usuário ou senha iválidos"); //mensagem de erro
        }
    }
}