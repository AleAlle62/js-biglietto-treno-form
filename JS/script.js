/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const inputName = document.getElementById('name')
const inputDistance = document.getElementById('kilometres')
const inputAge = document.getElementById('age')
const btnGenerate = document.getElementById('btn-generate')
const btnReset = document.getElementById('btn-reset')
const pricePerKilometer = 0.21;
const name = inputName.value

const outputTicket = document.querySelector('.ticket')
const outputName =  document.getElementById('ticket-name')
const outputPrice =  document.getElementById('ticket-price')
const outputKm =  document.getElementById('ticket-km')


// al click del tasto genera esegue tutti i comandi 

btnGenerate.addEventListener('click', function(){

    const distance = parseFloat(inputDistance.value)
    const age = inputAge.value
    const basePrice = pricePerKilometer * distance;
    let discountRate = 0;
    
    switch (age) {
        case 'min':
            discountRate = 20;
            break;
    
        case 'over':
            discountRate = 40;
            break;
    
    
        default :
            discountRate = 0;
            break;
    }
    
    let totalPrice = basePrice - basePrice * discountRate / 100;
    
    
    totalPrice = Math.round(totalPrice * 100) / 100;
    console.log('Il prezzo del biglietto è: ' + totalPrice);
    
    outputName.innerHTML = inputName.value
    outputPrice.innerHTML = totalPrice + '€'
    outputTicket.classList.remove('hidden')
    outputKm.innerHTML = inputDistance.value + 'km'
})


