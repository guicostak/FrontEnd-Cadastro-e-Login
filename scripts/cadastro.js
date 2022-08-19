/* VARIÁVEIS */

const nome = document.querySelector('#nome')
const labelNome = document.querySelector('#labelNome')

const email = document.querySelector('#email')
const labelEmail = document.querySelector('#labelEmail')

const nasc = document.querySelector('#nascimento')
const labelNasc = document.querySelector('#labelNascimento')

const telefone = document.querySelector('#telefone')
const labelTelefone = document.querySelector('#labelTelefone')

const senha = document.querySelector('#senha')
const labelSenha = document.querySelector('#labelSenha')

const confirmaSenha = document.querySelector('#confirmaSenha')
const labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')

const checkbox = document.querySelector('#checkbox')
const labelCheckbox = document.querySelector('#labelCheckbox')

const labelCadastro = document.querySelector('#labelCadastro')

const nav = document.querySelector('#nav')

/* FORMATAÇÃO TELEFONE */

function retornarNumero(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

telefone.addEventListener('keypress', () => {
  if (telefone.value.length === 0) {
    telefone.value += '('
  }
  if (telefone.value.length === 3) {
    telefone.value += ')'
  }
  
  if (telefone.value.length === 4) {
    telefone.value += ' '
  }

  if (telefone.value.length === 10) {
    telefone.value += '-'
  }})

function cadastrar() {
  let validNome = false
  let validEmail = false
  let validNasc = false
  let validTelefone = false
  let validSenha = false
  let validConfirmaSenha = false
  let validCheckbox = false

  /* VALIDAÇÕES */

  /*  NOME */

  if (nome.value.length == 0) {
    labelCadastro.innerHTML = '<p>*Você deve preencher todos os campos do formulário</p>'
    labelCadastro.setAttribute('id', 'labelCadastroF')
  } else {
    if (nome.value.length <= 2) {
      labelNome.innerHTML = 'Nome  <p>*Insira no mínimo 3 caracteres</p>'
      nome.style.border = "1px solid rgb(204, 85, 85)"
      validNome = false
    } else {
      labelNome.innerHTML = 'Nome'
      nome.style.border = "none"
      validNome = true
    }
  }

  /*  EMAIL */

  if (email.value.length == 0) {
    validEmail = false
  } else {
    if (
      email.value.indexOf('@') == -1 ||
      email.value.indexOf('.') == -1 ||
      email.value.indexOf('.') - email.value.indexOf('@') == 1
    ) {
      labelEmail.innerHTML = 'Email  <p>*Insira um formato de email válido</p>'
      email.style.border = "1px solid rgb(204, 85, 85)"
      validEmail = false
    } else {
      labelEmail.innerHTML = 'Email'
      email.style.border = "none"
      validEmail = true
    }
  }

  /*  DATA DE NASCIMENTO */

  /*  ENCONTRANDO A IDADE */

  let hoje = new Date()
  let dnasc = new Date(nasc.value)

  let idade = hoje.getFullYear() - dnasc.getFullYear()
  let m = hoje.getMonth() - dnasc.getMonth()

  if (m < 0 || (m === 0 && hoje.getDate() < dnasc.getDate)) {
    idade--
  }

  /* VALIDANDO DATA DE NASCIMENTO */

  if (nasc.value.length == 0) {
    validNasc = false
  } else {
    if (idade <= 18) {
      labelNasc.innerHTML =
        'Data de nascimento  <p>*você deve ter mais de 18 anos </p>'
        nasc.style.border = "1px solid rgb(204, 85, 85)"
      validNasc = false
    } else {
      labelNasc.innerHTML = 'Data de nascimento'
      nasc.style.border = "none"
      validNasc = true
    }
  }

  /* TELEFONE */

  if (telefone.value.length == 0) {
    validTelefone = false
  } else {
    if (telefone.value.length < 11) {
      labelTelefone.innerHTML = 'Telefone <p>*Insira um número válido</p>'
      telefone.style.border = "1px solid rgb(204, 85, 85)"
      validTelefone = false
    } else {
      labelTelefone.innerHTML = 'Telefone'
      telefone.style.border = "none"
      validTelefone = true
    }
  }

  /*  SENHA */

  if (senha.value.length == 0) {
    validSenha = false
  } else {
    if (senha.value.length < 7) {
      labelSenha.innerHTML = 'Senha  <p>*A senha deve possuir ao menos 8 caracteres </p>'
      senha.style.border = "1px solid rgb(204, 85, 85)"
      validSenha = false
    } else {
      labelSenha.innerHTML = 'Senha'
      senha.style.border = "none"
      validSenha = true
    }
  }

  /*  CONFIRMA SENHA */

  if (senha.value != confirmaSenha.value || confirmaSenha.value.length == 0) {
    labelConfirmaSenha.innerHTML = 'Confirmar senha  <p>*Os campos senha e confirmar senha devem ser iguais</p>'
    validConfirmaSenha = false
  } else {
    labelConfirmaSenha.innerHTML = 'Confirmar senha'
    confirmaSenha.style.border = "none"
    validConfirmaSenha = true
  }

  /*  CHECKBOX  */

  if (checkbox.checked) {
    validCheckbox = true
  } else {
    labelCheckbox.innerHTML = '<p>*Você deve aceitar os termos e condições</p>'
    validCheckbox = false
  }

  if (validNome && validEmail && validNasc && validTelefone && validSenha && validConfirmaSenha && validCheckbox) {
    let cadastroUsuario = JSON.parse(localStorage.getItem('cadastroUsuario') || '[]')

    cadastroUsuario.push({
      nomeCad: nome.value,
      emailCad: email.value,
      dataCad: nasc.value,
      telefoneCad: telefone.value,
      senhaCad: senha.value
    })

    localStorage.setItem('cadastroUsuario', JSON.stringify(cadastroUsuario))
    
    labelCadastro.innerHTML = '<b>Cadastro concluído!</b>'
    nav.setAttribute('style', 'display: none')

    setTimeout(()=>{
      window.location.href = "login.html"
  }, 740)
  }
}
