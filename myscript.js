// FASE 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studentData = {
    firstName: "stefano",
    lastName: "ferrera",
    age: 30 
};

// FASE 2
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var key in studentData) {
    console.log(studentData[key]);

}

// FASE 3
// Creare un array di oggetti di studenti.

var newClass = 
[{
    'firstName': "Anna",
    'lastName': "Otto",
    'age': 18
},
{
    'firstName': "Marica",
    'lastName': "Rossi",
    'age': 28
}, 
{
    "firstName": "Dario",
    "lastName": "Lampa",
    "age": 39   
}, 
{
    "firstName": "Umberto",
    "lastName": "Umberti",
    "age": 27
}, 
{
    firstName: "Giada",
    lastName: "Stelle",
    age: 23
}, 
{
    firstName: "Dina",
    lastName: "Lampa",
    age: 20
}];


// FASE 4 + FASE 5
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// come già detto, newClass è un array, quindi posso pushare al suo interno altri oggetti/studenti
var newStudent = {};

// verifico che l'utente completi i campi con caratteri validi
newStudent.firstName = UpFirstLetter(prompt('Inserisci il tuo nome'));

while (newStudent.firstName === "") {
    alert('Devi inserire il tuo nome!!!');
    newStudent.firstName = UpFirstLetter(prompt('Inserisci il tuo nome'));
}

newStudent.lastName = UpFirstLetter(prompt('Inserisci il tuo cognome'));

while (newStudent.lastName === "") {
    alert('Devi inserire il tuo cognome!!!');
    newStudent.lastName = UpFirstLetter(prompt('Inserisci il tuo cognome'));
}

newStudent.age = parseInt(prompt('Inserisci la tuà età.'));

while (isNaN(newStudent.age)) {
    alert('Devi inserire la tua età in numero!!!');
    newStudent.age = parseInt(prompt('Inserisci la tuà età.'));
}

newClass.push(newStudent);

var studentList = [];


// siccome newClass è un array, posso fare un normale ciclo for
for (var i = 0; i < newClass.length; i++) {
    // definisco una variabile alla quale associo ogni singolo oggetto/alunno
    var element = newClass[i];
    // in questo modo posso stampare i valori che desidero usando
    // la dot notation .nome della chiave che voglio
    // oppure le parentesi quadre ['chiave che voglio stampare'] N.B. in questo caso ho bisogno degli apici!!! 
    console.log(element['lastName'], element.firstName);

    studentList.push(element['lastName']+ " " + element.firstName);

    var student = document.getElementById('student');
    student.innerHTML += "<li>" + element.lastName + " " + element.firstName + "</li>";
}

console.log(studentList);

console.log(newStudent);

console.log(newClass);


// FUNZIONE

function UpFirstLetter(word) {

    var upWord = word.charAt(0).toUpperCase() + word.slice(1);

    return upWord;
   
}
