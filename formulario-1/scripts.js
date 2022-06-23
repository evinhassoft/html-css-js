const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue == "") {
    setErrorfor(username, "O nome de usuário é obrigatório!");
  } else if (usernameValue.length < 5) {
    setErrorfor(
      username,
      "Por favor, insira um usuário com mais de 5 caracteres"
    );
  } else {
    setSuccessfor(username);
  }

  if (emailValue == "") {
    setErrorfor(email, "O e-mail é obrigatório!");
  } else if (!checkEmail(emailValue)) {
    setErrorfor(email, "Por favor, insira um e-mail válido!");
  } else {
    setSuccessfor(email);
  }

  if (passwordValue == "") {
    setErrorfor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorfor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessfor(password);
  }

  if (passwordConfirmationValue == "") {
    setErrorfor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue != passwordValue) {
    setErrorfor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessfor(passwordConfirmation);
  }
}

function setErrorfor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adicionar mensagem de erro
  small.innerText = message;

  // Adicionar classe de erro
  formControl.className = "form-control error";
}

function setSuccessfor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
