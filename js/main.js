'use strict'
const genera = document.querySelector('.genera');
let tabella = document.querySelector('.tabella')

genera.addEventListener('click', function() {
    let difficolta = document.getElementById('difficolta').value;
    console.log(difficolta)

    for (let i = 1; i <= difficolta; i++) {
    const casella = document.createElement('div');
    casella.classList.add('casella', 'bg-green');
    casella.innerHTML = i;

    if (difficolta == '100') {
        casella.classList.add('casella-width1')
    } else if (difficolta == '81') {
        casella.classList.add('casella-width2')
    } else {
        casella.classList.add('casella-width3')
    }

    casella.addEventListener('click', function() {
        casella.classList.remove('bg-green');
        casella.classList.add('bg-red');
    })

    tabella.append(casella);
    };
});

