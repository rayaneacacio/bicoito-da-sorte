import sortear from "./function-sortear.js"
import newBiscoito from "./function-novo-biscoito.js"

let BOXAntesDeAbrirOBiscoito = document.querySelector('.antesDeAbrirOBiscoito')
let BOXdepoisDeAbrirOBiscoito = document.querySelector('.depoisDeAbrirOBiscoito')
let frases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'A vida trará coisas boas se tiveres paciência.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Quem quer colher rosas deve suportar os espinhos.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'O riso é a menor distância entre duas pessoas.',
  'As pessoas se esquecerão do que você disse e do que você fez… mas nunca se esquecerão de como você as fez sentir.'
]

document.querySelector('.antesDeAbrirOBiscoito img').onclick = () => {
  sortear(BOXAntesDeAbrirOBiscoito, BOXdepoisDeAbrirOBiscoito, frases)
}

document.querySelector('button').onclick = () => {
  newBiscoito(BOXAntesDeAbrirOBiscoito, BOXdepoisDeAbrirOBiscoito)
}

document.addEventListener('keydown', (enter) => {
  if(enter.key == 'Enter' && BOXdepoisDeAbrirOBiscoito.classList.contains('hide')){
    sortear(BOXAntesDeAbrirOBiscoito, BOXdepoisDeAbrirOBiscoito, frases)
  } else if(enter.key == 'Enter' && BOXAntesDeAbrirOBiscoito.classList.contains('hide')){
    newBiscoito(BOXAntesDeAbrirOBiscoito, BOXdepoisDeAbrirOBiscoito)
  }
})