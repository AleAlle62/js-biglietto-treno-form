/*

ESERCIZIO 

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

svolgimento:

1) fare il primo box
2) fare i button che funzionino con i diversi input
3) fare il bottone annulla
4) dare tutti i risultati nel box di sotto 
5) colegare il bottone genera come invio dei dati 
*/



// costanti 

let kilometri =  ('quanti km vuoi fare ?');
let age =  ('quanti anni hai ?');
let cost = (kilometri * 0.21).toFixed(2);

// formula sconti 

// 18
if (age < 18) {
    let sale = (cost * 0.8).toFixed(2);
    console.log(sale + '€');
} 

// 65

else if (age > 65) {
    let sale = (cost * 0.6).toFixed(2);
    console.log(sale + '€');
} else {
    console.log (cost + '€' );
}