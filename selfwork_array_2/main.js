// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
//   Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.




// codice senza funzione


let input = [3, 5, 10, 2, 8];


let media = input.reduce((acc, n)=> acc + n) / input.length; 

console.log(media);

let minori = input.filter((n)=> n < media);

let maggiori = input.filter((n)=> n > media);


console.log(minori);
console.log(maggiori);



//codice scritto con funzione



function media(arr1){

    let media = arr1.reduce((acc, n)=> acc + n) / arr1.length; 
    let minori = arr1.filter((n)=> n < media);
    let maggiori = arr1.filter((n)=> n > media);
    return console.log(`la media di ${arr1} è ${media} \n ${maggiori} sono maggiori di ${media}, \n ${minori} sono minori di ${media}`);
    
}


let input = [3, 5, 10, 2, 8];

let risultato = media(input);

console.log(risultato);
