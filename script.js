/*
JSNACK 1
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
*/

/*
const firstNumber = parseInt(prompt("Inserisci un numero"));
const secondNumber = parseInt(prompt("Inserisci un numero"));

console.log(firstNumber, secondNumber);

const text = document.getElementById("text");

if(firstNumber > secondNumber){
    text.innerHTML = firstNumber;
} else if (secondNumber > firstNumber){
    text.innerHTML = secondNumber;
} else {
    text.innerHTML = "non vale, sono uguali";
}
*/



/* 
JSNACK 2
L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/*
const firstWord = prompt("Inserisci una parola");
const secondWord = prompt("Inserisci un'altra parola");

console.log(firstWord, secondWord);

if(firstWord.length < secondWord.length){
    text.innerHTML = `La parola più corta è: ${firstWord}, quella più lunga è ${secondWord}`;
} else if(secondWord.length < firstWord.length){
    text.innerHTML = `La parola più corta è: ${secondWord}, quella più lunga è ${firstWord}`;
} else{
    text.innerHTML = `non vale, ${firstWord} e ${secondWord} sono lunghe uguali`;
}
*/



/*
JSNACK 3
Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
*/

/*
let result = 0;

for (let i = 0; i <= 5; i++){
    let number = parseInt(prompt("inserisci un numero"));

    result += number;
}

console.log("la somma dei numeri è: ", result);
*/



/*
JSNACK 4
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/
/*
let array = [];

for (let i = 0; i < 6; i++){
    let number = parseInt(prompt("inserisci un numero"));

    if(number % 2 !== 0){
        array.push(number);
    }
}

console.log(array);
*/



/*
JSNACK 5
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/
/*
// seleziono input
const inputUserName = document.getElementById("username");
const sendButton = document.getElementById("sendbutton");


// creare lista invitati
const invitati = ["Giulio Rossi", "Thomas Grande", "Silvia Torre", "Ben Ten", "Marta Carta", "Giacomo Giove"];
console.log(invitati);


// controllare se la persona può accedere, e scrivere un messaggio sull'esito del controllo
// funzionamento click
sendButton.addEventListener("click",

    function(){

        let nameFound = false;
    
        // chiedere all'utente il suo nome
        let userName = inputUserName.value;
        console.log(userName);
     
        // controllo se il nome è nella lista invitati
        let i = 0;
        while(i < invitati.length && nameFound === false){
            
            // prendo elemento iesimo della lista
            let invitatiElement = invitati[i];

            if(invitatiElement === userName){
                nameFound = true;
            }
            
            i++
        }
        

        if(nameFound === true){
            alert("Lei può partecipare alla festa, benvenuto")
        }
        else{
            alert("Lei non è nellal lista degli invitati, torni a casa")
        }
    }
);
*/



/*
JSNACK 6
 Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
*/
/*
let array = [];

let i = 0;
while (i < 6){
    let number = parseInt(prompt("inserisci un numero"));

    if(number % 2 !== 0){
        array.push(number);
    }
    
    i++
}

console.log(array);
*/

/*
JSNACK 7
Crea un array vuoto. 
Continua a chiedere all’utente numeri e se sono dispari li inserisci nell’array vuoto, fino a quando il tuo array non è composto da 6 numeri dispari.
*/
/*
let array = [];

while (array.length < 6){
    let number = parseInt(prompt("inserisci un numero"));

    if(number % 2 !== 0){
        array.push(number);
    }
}

console.log(array);
*/


/////////// CICLO FOR EACH ///////////

/*
JSNACK 8
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/
/*
const animali = [
    {
        "nome" : "bradipo",
        "famiglia" : "bradypodidae",
        "classe" : "mammifero"
    },
    {
        "nome" : "pantegana",
        "famiglia" : "muridae",
        "classe" : "mammifero"
    },
    {
        "nome" : "ape",
        "famiglia" : "apidae",
        "classe" : "insetto"
    },
    {
        "nome" : "struzzo",
        "famiglia" : "struthionidae",
        "classe" : "avi"
    },
];

const mammiferi = animali.filter (animal => animal.classe === "mammifero");
// const mammiferi = animali.filter ((animal) => {
//     if (animal.classe === "mammifero"){
//         return true
//     }
// });
console.log("mammiferi: ", mammiferi);
*/

/*
JSNACK 9
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/
/*
const text = document.getElementById("text");

const persone = [
    {
        "nome" : "Franco",
        "cognome" : "Casa",
        "eta" : "22"
    },
    {
        "nome" : "Silvia",
        "cognome" : "Pazzo",
        "eta" : "12"
    },
    {
        "nome" : "Teresa",
        "cognome" : "Valle",
        "eta" : "65"
    },
    {
        "nome" : "Luca",
        "cognome" : "Orto",
        "eta" : "34"
    },
    {
        "nome" : "Giulio",
        "cognome" : "Frizzi",
        "eta" : "3"
    },
];

const maggiorenni = persone.map((person) => {
    if(person.eta >= 18){
        return `${person.nome} ${person.cognome} puoi guidare`;
    } else{
        return `${person.nome} ${person.cognome} non puoi guidare`;
    }
});

console.log(maggiorenni);

text.innerHTML = maggiorenni;
*/



/*
JSNACK 10
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const auto = [
    {
        "marca" : "audi",
        "modello" : "a6",
        "alimentazione" : "diesel"
    },
    {
        "marca" : "ford",
        "modello" : "fiesta",
        "alimentazione" : "benzina"
    },
    {
        "marca" : "fiat",
        "modello" : "500",
        "alimentazione" : "elettrico"
    },
    {
        "marca" : "volksvagen",
        "modello" : "tiguan",
        "alimentazione" : "gpl"
    },
    {
        "marca" : "nissan",
        "modello" : "qashqai",
        "alimentazione" : "diesel"
    },
    {
        "marca" : "fiat",
        "modello" : "panda",
        "alimentazione" : "benzina"
    },
    {
        "marca" : "audi",
        "modello" : "q4",
        "alimentazione" : "diesel"
    },
    {
        "marca" : "volksvagen",
        "modello" : "caddy",
        "alimentazione" : "gpl"
    },
    {
        "marca" : "renault",
        "modello" : "clio",
        "alimentazione" : "metano"
    },
    {
        "marca" : "opel",
        "modello" : "corsa",
        "alimentazione" : "diesel"
    },
];

const benzina = auto.filter ((macchina) => macchina.alimentazione === "benzina");
console.log(benzina);

const diesel = auto.filter ((macchina) => macchina.alimentazione === "diesel");
console.log(diesel);

const altriTipi = auto.filter ((macchina) => macchina.alimentazione !== "benzina" && macchina.alimentazione !== "diesel");
console.log(altriTipi);