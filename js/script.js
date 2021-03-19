/**
 * MY FIRST PROGRAM
 */

// 1. Chiedere numero di km del passeggero
// 2. Chiedere l'eta' del passeggero
// 3. Calcolare prezzo totale del viaggio

// Prezzo biglietto = 0.21 euro per km
// Applicare sconto 20% per minorenni < 18
// Applicare sconto 40% per over >=65 


// 1.

var numeroKm = parseInt(prompt('Quanti km desideri percorrere?'));
console.log('Km selezionati:', numeroKm, 'km');

// 2. 

var etaPasseggero = parseInt(prompt('Quanti anni hai?'));
console.log('Eta del passeggero:', etaPasseggero, 'anni');

if (etaPasseggero < 18) {
    console.log('Minorenne');
} else if (etaPasseggero >= 65) {
    console.log('over 65');
} else { (etaPasseggero > 18)
    console.log('Maggiorenne');
}

// 3.

var prezzoBigliettoKm = 0.21;

var prezzoFinale = numeroKm * prezzoBigliettoKm;
console.log('Prezzo finale:', prezzoFinale, '€');

if (etaPasseggero < 18) {
    console.log('Sconto del 20%', prezzoFinale * 20 / 100 );
} else if (etaPasseggero >= 65) {
    console.log('Sconto del 40%', prezzoFinale * 40 / 100 );
}


