
// console.log is a function that displays a message in the console of the browser
console.log('Hello World!');

// alert is a function that displays a message to the user in a pop-up window

// var alertMessage = 'Violence detected!';
// alert(alertMessage);

// confirm is a function that displays a message to the user in a pop-up window with two buttons: OK (true) and Cancel (false)

// var result = confirm('Are you sure you want to delete this file?');
// console.log('Result : ', result);

// prompt is a function that asks the user for input in a pop-up window and returns the input as a string

// var response = prompt('What is your name?');
// console.log('Response : ', response);

// The way we declare objects in JavaScript is by using the curly braces {} and the key-value pairs
var person = {
    // property: value
    // key: value
    name: 'John',
    age: 30,
    city: 'New York'

}
// For accessing the properties of an object, we use the dot notation (name of the object followed by a dot and the name of the property)
console.log('Person.name --->', person.name);

// For accessing the properties of an object, we can also use the bracket notation (name of the object followed by a bracket and the name of the property in quotes)
console.log('Person["name"] --->', person['name']);

// The way we declare arrays in JavaScript is by using the square brackets [] and the elements of the array

var arr = ['John', 30, 'New York'];

// For accessing the elements of an array, we use the bracket notation (name of the array followed by a bracket and the index of the element)
console.log('arr[0] --->', arr[0]);

var persons = [
    {
        name: 'Farouk',
        age: 23,
        city: 'New York'
    },
    {
        name: 'Firas',
        age: 20,
        city: 'Las Vegas'
    },
    {
        name: 'Nour',
        age: 21,
        city: 'Saoudi Arabia'

    }
]
alert('Welcome to the Person Search App!');
console.log('persons[0].name --->', persons[0].name);
console.log('persons.length', persons.length);

// Function that searches for a person in the persons array and returns the person object if found or not found if not found
function searchPerson(name) {
    console.log('name --->', name);
    let verif = false;
    // Tant  que le nom n'est pas trouvé dans le tableau persons on continue de demander à l'utilisateur de saisir un nom
    while (verif == false) {
        // On parcourt le tableau persons pour vérifier si le nom saisi par l'utilisateur existe dans le tableau
        for (let i = 0; i < persons.length; i++) {
            // Si le nom saisi par l'utilisateur existe dans le tableau, on retourne l'objet correspondant
            if (persons[i].name == name) {
                verif = true;
                return persons[i];
            } else {
                alert('No results found for ' + name);
            }

        }
    }
}



// Function that searches for a person in the persons array and returns an array of all the matches found
function searchPerson(name, persons) {
    console.log('name --->', name);
    var newArr = [];

    for (let i = 0; i < persons.length; i++) {
        if (persons[i].name.toLowerCase().includes(name.toLowerCase())) {
            newArr.push(persons[i]);
        }
        console.log('newArr --->', newArr);
    }
    return newArr;

}

var ret = searchPerson(prompt('Enter a name'), persons);

console.log('ret --->', ret);

// Function that searches for a person in the persons array and returns the person object if found or asks the user for another name if not found
function searchPerson(name, persons) {
    console.log('name --->', name);

    for (let i = 0; i < persons.length; i++) {
        if (
            persons[i].name.toLowerCase() === name.toLowerCase()
        ) {
            return persons[i];
        }
    }

    // If the loop completes without finding a match, prompt the user for another name
    let newName = prompt('Person not found. Please enter another name');

    // Recursively call the function with the new name and the same persons array
    return searchPerson(newName, persons);

}