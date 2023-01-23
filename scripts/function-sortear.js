export default function sortear(BOXAntesDeAbrirOBiscoito, BOXdepoisDeAbrirOBiscoito, frases){
  BOXdepoisDeAbrirOBiscoito.classList.remove('hide')
  BOXAntesDeAbrirOBiscoito.classList.add('hide')

  document.querySelector('.sorte').textContent = frases[Math.floor(Math.random()*8)]
}