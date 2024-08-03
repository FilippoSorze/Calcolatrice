// elementi raccolti 
let navbar = document.querySelector('#navobar');
let bottone = document.querySelector('#btn');
let ultimitotasto = document.querySelector('#ultimotasto');
let tastipremuti = document.querySelector('#tastipremuti');
let bottoni = document.querySelectorAll('button');
let foglio = document.querySelector('#foglio');
let espandi = document.querySelector('#espandi');

const maxDigits = 34;




function aggiungi(carattere) {
  if (tastipremuti.innerText.length < maxDigits) {
    tastipremuti.innerText += carattere;
  } else {
    tastipremuti.textContent = "Hai raggiunto il massimo di cifre!";
    disable
  }

}

function cancella() {
  tastipremuti.innerText = '';
}

function calcola() {
  let risultato = eval(tastipremuti.innerText);
  tastipremuti.innerText = risultato;
  
}

 function cancellaUltimo() {
  let stringa = tastipremuti.innerText;
  let stringaArray = stringa.split('');
  stringaArray.pop();
  stringa = stringaArray.join('');
  tastipremuti.innerText = stringa;
 }

 function radicequadrata() {
  let risultato = Math.sqrt(tastipremuti.innerText);
  tastipremuti.innerText = risultato;
 }

 function percentuale() {
  let risultato = tastipremuti.innerText / 100;
  tastipremuti.innerText = risultato;
 }

 function simulateButtonClick(buttonId) {
  const button = document.querySelector(buttonId);
  if (button) {
    button.click();
  }
}

// Aggiungi un event listener per i tasti premuti
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key >= '0' && key <= '9') {
    simulateButtonClick(`#btn${key}`);
  } else if (key === 'Backspace') {
    cancellaUltimo();
  } else if (key === 'Enter') {
    calcola();
  } else if (key === 'Escape') {
    cancella();
  } else if (key === '.') {
    aggiungi(key);
  } else if (key === '^') {
    radicequadrata(key)
  } else if (key === '+') {
    aggiungi(key)
  }else if (key === '-') {
    aggiungi(key)
  }else if (key === '*') {
    aggiungi(key)
  }else if (key === '/') {
    aggiungi(key)
  }else if (key === '%') {
    aggiungi(key)
  }
});

