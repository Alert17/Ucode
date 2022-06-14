let animal = prompt("What animal is the superhero most similar to?")
let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.")
let age = prompt("How old is the superhero?")

gender = gender.toLowerCase();

let hero = animal + '-';
if (gender === "male" && age >= 18) {
    hero += "man";
} else if (gender === "male" && age < 18) {
    hero += "boy";
} else if (gender === "female" && age >= 18) {
    hero += "woman";
} else if (gender === "female" && age < 18) {
    hero += "girl";
} else if (age >= 18) {
    hero += "hero";
} else {
    hero += "kid";
}

alert("The superhero name is: " + hero);