/* VARIÁVEIS */
const btn = document.querySelector('#mostrar')
const labelLogin = document.querySelector('#labelLogin')
const nav = document.querySelector('#nav') 

/* MOSTRAR SENHA */

btn.addEventListener('click', ()=>{  
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  }
  else{
    inputSenha.setAttribute('type', 'password')
  }
})

/* VALIDAÇÕES */

function login(){
  
  const email = document.querySelector('#email')
  const senha = document.querySelector('#senha')

  let cadastroUsuario = []

  let userValid = {
      nome: '',
      email: '',
      data: '',
      telefone: '',
      senha: ''
  }

  cadastroUsuario = JSON.parse(localStorage.getItem('cadastroUsuario'))

  cadastroUsuario.forEach((item) =>{
    if(email.value == item.emailCad && senha.value == item.senhaCad){
      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        data: item.dataCad,
        telefone: item.telefoneCad,
        senha: item.senhaCad
      }
    }
  })
  if(email.value == userValid.email && senha.value == userValid.senha && email.value.length != 0 && senha.value.length != 0){
    labelLogin.innerHTML = '<b>Login efetuado!</b>'
    labelLogin.setAttribute("id", "labelLoginScss")
    nav.setAttribute('style', 'display: none')

    setTimeout(()=>{
      window.location.href = "home.html"
  }, 440)
  }
  else{
    labelLogin.innerHTML = '<b>Erro ao efetuar o login! Email ou senha incorretos.</b>'
  }

















}