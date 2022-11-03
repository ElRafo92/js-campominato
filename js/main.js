'use strict'

const genera = document.querySelector('.genera');
const reset = document.querySelector('.reset');
let tabella = document.querySelector('.tabella')

function generatoreTabella() {
genera.addEventListener('click', function() {
    let difficolta = document.getElementById('difficolta').value;
    tabella.innerHTML = '';

    for (let i = 1; i <= difficolta; i++) {
    const casella = document.createElement('div');
    casella.classList.add('casella', 'bg-celes');
    casella.innerHTML = i;

    if (difficolta == '100') {
        casella.classList.add('casella-width1')
    } else if (difficolta == '81') {
        casella.classList.add('casella-width2')
    } else {
        casella.classList.add('casella-width3')
    }

    casella.addEventListener('click', function() {
        casella.classList.remove('bg-celes');
        casella.classList.add('bg-green');
    })

    tabella.append(casella);
    };
});

reset.addEventListener('click', function(){
    location.reload(window)
})
};

tabella.innerHTML = generatoreTabella();

let difficolta = Number(document.getElementById('difficolta').value);
function uniqueRandomGenerator() {
let bombe = [];
let indexBombe = 0;
console.log(typeof difficolta);
    if (difficolta == 100) {
        while ( bombe.length < 100 ) {
            let x = Math.floor((Math.random() * 100) + 1);
            if (bombe.indexOf(x) === -1) {
                bombe.push(x);
            }
            indexBombe++
        }
    }

return bombe
};

console.log(difficolta);

console.log(uniqueRandomGenerator())

