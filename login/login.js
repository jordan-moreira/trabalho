const buttonEnter = document.querySelector(".button-confirm");

function confirmLogin() {
  const user = document.querySelector("[user]").value,
    password = document.querySelector("[password]").value;

  if (user == "joao" && password == "1234") {
    window.location.href = '../Saque/saque.html';
  } else {
    alert("usuario ou senha invalida");
  }
}

buttonEnter.addEventListener("click", confirmLogin);


