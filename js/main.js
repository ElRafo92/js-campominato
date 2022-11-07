'use strict'

const genera = document.querySelector('.genera');
const reset = document.querySelector('.reset');
let tabella = document.querySelector('.tabella')

function generatoreTabella() {
genera.addEventListener('click', function() {
    let difficolta = document.getElementById('difficolta').value;
    tabella.innerHTML = '';
    const score = [];

    for (let i = 1; i <= difficolta; i++) {
        const casella = document.createElement('div');
        casella.classList.add('casella', 'bg-celes');
        casella.innerHTML = i;
       // console.log(casella);

        if (difficolta == '100') {
            casella.classList.add('casella-width1')
        } else if (difficolta == '81') {
            casella.classList.add('casella-width2')
        } else {
            casella.classList.add('casella-width3')
        }
        
        casella.addEventListener('click', function() {
            if (bombe.includes(i)) {
                casella.classList.remove('bg-celes');
                casella.classList.add('bg-red');
                alert(`Hai perso! La pagina verrà ricaricata. Il tuo punteggio è di: ${score.length}`);
                location.reload(window);
            } else if (!score.includes(i)) {
                casella.classList.remove('bg-celes');
                casella.classList.add('bg-green');
                score.push(i)
            } 
            console.log(score);
            console.log(difficolta);

            if (score.length === difficolta - 16) {
                alert(`Hai vinto! Per giocare ancore clicca su RESET. Il tuo punteggio è di: ${score.length}`);
            }
            
            console.log(i - 16);

        });

        tabella.append(casella);
    };
    let totCell = 16;
    ;
    let bombe = [];
    uniqueRandomGenerator(bombe, totCell);
    console.log(bombe);




});

reset.addEventListener('click', function(){
    location.reload(window)
});
};

tabella.innerHTML = generatoreTabella();


/* =========================
   =========================
            FUNCTIONS
   =========================
   ========================= */
function uniqueRandomGenerator(insieme, cap) {

        while ( insieme.length < 16 ) {
            let x = Math.floor((Math.random() * cap) + 1);
            if (insieme.indexOf(x) === -1) {
                insieme.push(x);
            };
        };

return insieme
};
