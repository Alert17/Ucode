let firstName = prompt("Enter the first name")
let secondName = prompt("Enter second name")

let res = "Wrong input!";
firstName = firstName[0].toUpperCase() + firstName.slice(1);
secondName = secondName[0].toUpperCase() + secondName.slice(1);
if (isNaN(parseFloat(firstName)) && isNaN(parseFloat(secondName)))
    res = "Greeting, " + firstName + " " + secondName + "!";

console.log(res);
alert(res);
