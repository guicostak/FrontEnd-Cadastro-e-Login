const titulo = document.querySelector('h1')
const titulo2 = document.querySelector('h2')
const btn = document.querySelector('button')

maquinaDeEscrever(titulo)

function maquinaDeEscrever(elemento) {
  let textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(function () {
      elemento.innerHTML += letra
    }, 60 * i)
  })
}

maquinaDeEscrever2(titulo2)

function maquinaDeEscrever2(elemento) {
  let textArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textArray.forEach((letra, j) => {
    setTimeout(function () {
      setTimeout(function () {
        elemento.innerHTML += letra
      }, 60 * j)
    }, 2500)
  })
}

btnAparece(btn)

function btnAparece(elemento) {
  elemento.setAttribute('style', 'opacity: 0')
  setTimeout(function () {
    setTimeout(function () {
      elemento.setAttribute('style', 'opacity: 0.1')
      setTimeout(function () {
        elemento.setAttribute('style', 'opacity: 0.2')
        setTimeout(function () {
          elemento.setAttribute('style', 'opacity: 0.3')
          setTimeout(function () {
            elemento.setAttribute('style', 'opacity: 0.4')
          }, 70)
        }, 70)
      }, 70)
    }, 70)
  }, 5200)
}
