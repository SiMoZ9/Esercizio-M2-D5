/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {
  return ( (a === b) ? (a + b) * 3 : (a + b) );
}

console.log(crazySum(10, 5));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", 
 che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(a) {
  return ( (a > 20 && a <= 100) || a === 400 );
}

console.log(boundary(401));


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {

  let reversed_string = "";

  for (let i = str.length - 1; i >= 0; i--) {
     reversed_string += str[i];
  }
  
  return reversed_string;
}

console.log(reverseString("Cotoletta aaaa"));



/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", 
 che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni 
 lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
  let n = "";
  for (let i = 1; i < str.length; i++)
    n = n + str[i];
  
  return str.charAt(0).toUpperCase() + n;
}

function upperFirstAll(str) {
  let phrase = str.split(" "); //divido le parole e le metto in una lista
  let upper_str = []
  
  let final_str;

  for (let i = 0; i < phrase.length; i++) {
        upper_str[i] = phrase[i][0].toUpperCase() + phrase[i].slice(1)
  }

  final_str = upper_str.join(" ");

  return final_str
}

console.log(upperFirst("simone"))
console.log(upperFirstAll("ciao a tutti sono simone e studio ingegeria informatica a tor vergata, sono al terzo anno"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {

  let random_numbers = []

  for (var i = 0; i < n; i++) {
    random_numbers.push(Math.floor(Math.random() * 10))
  }

  return random_numbers
}

console.log(giveMeRandom(10))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1*l2
}

console.log(`Area rettangolo ${area(5, 20)}`)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a) {
  let diff = Math.abs(a - 19)
  return ( ( diff > 19 ) ? diff : diff * 3)
}

console.log(crazyDiff(10))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(str) {
  if (str === "code")
    return str
  
  else
    return "code".concat(str)
}

console.log(codify("armando"))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(a) {
  return ( a % 3 == 0 || a % 7 == 0)
}

console.log(check3and7(5465892))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
  return str.slice(1, str.length - 1)
}

console.log(cutString("gennaro"))