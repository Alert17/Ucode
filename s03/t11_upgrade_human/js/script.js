'use strict';

let get = (id) => document.querySelector(id);
let getAll = (id) => document.querySelectorAll(id);

let timerId;
let msg = get('#message');
let msgTime = 10;
let maxCalories = 500;
let plusCalories = 200;
let sec = 1000;

function reverseButtons (events, on, off) {
    for (let event of events) {
        let onclick = event.getAttribute(on);
        event.setAttribute(off, onclick);
        event.removeAttribute(on);
    }
}

function showMessage (interval, str, newStr = '', calories) {
    msg.innerHTML = str;
    let time = +interval * sec;
    clearTimeout(timerId);
    if (!calories || calories < maxCalories)
        timerId = setTimeout(() => msg.innerHTML = newStr, time);
    else
        timerId = setTimeout(() => msg.innerHTML = '', time);
}


class Human {
    constructor(options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.gender = options.gender;
        this.age = options.age;
        this.calories = options.calories;
    }

    sleepFor() {
        let sleepTime = 3

        let events = getAll('[onclick]');
        reverseButtons(events, 'onclick', 'off');
        setTimeout(() => reverseButtons(events, 'off', 'onclick'), +sleepTime * 1000);
        showMessage(+sleepTime, 'I\'m sleeping', 'I\'m awake now');
    }

    feed() {
        if (this.calories >= maxCalories) {
            showMessage(10, 'I\'m not hungry');
            return;
        }
        this.calories += plusCalories;

        if (this.calories > maxCalories)
            this.calories = maxCalories;

        get("#calories > span").innerHTML = this.calories;

        showMessage(msgTime, 'Nom nom nom', 'I\'m still hungry', this.calories);
    }

    makingHungry() {
        let calories = get('#calories > span');

        this.calories -= plusCalories;
        if (this.calories < 0)
            this.calories = 0;

        calories.innerHTML = this.calories;
    }

    retry() {
        location.reload();
    }
}

class Superhero extends Human {
    constructor(option) {
        super(option);
    }

    fly() {
        showMessage(msgTime, 'I\'m flying');
    }

    fightWithEvil() {
        showMessage(msgTime, 'Khhhh-chh...<br> Bang-g-g-g... <br> Evil is defeated!');
    }
}

let person = new Superhero({
    firstName: 'James',
    lastName: 'Notbond',
    gender: 'male',
    age: 32,
    calories: 0
});

function getNewValue(target)  {
    let key = target.getAttribute('id'),
        p = get(`#${key}`),
        span = p.querySelector('span'),
        newValue = prompt(`Enter new value for ${key}:`);

    if (newValue && newValue.length < 10) {
        if (typeof person[key] === 'number') {
            if (!isNaN(+newValue)) {
                person[key] = newValue;
                span.innerHTML = newValue;
            } else {
                alert("Incorrect input");
            }
        } else {
            person[key] = newValue;
            span.innerHTML = newValue;
        }
    } else
        alert("Incorrect input");

}

function renderProperties()  {
    let div = document.querySelector("#properties");

    for (const [key, value] of Object.entries(person)) {
        div.insertAdjacentHTML("beforeend",
            `<p class="property" id="${key}" onclick="getNewValue(this)">${key}: ` +
            `<span class="propValue">${value}</span></p>`);
    }
}

function turnToSuperhero()  {
    if (person.calories < maxCalories) {
        showMessage(msgTime, "I\'m too hungry, feed me");
        return;
    }
    maxCalories = 1000;
    get('#human').setAttribute('src', 'assets/images/superhero.png');
    get("#turn").insertAdjacentHTML('afterend',
        '<br><button onclick="person.fly()">Fly</button>' +
        '<button onclick="person.fightWithEvil()">Fight with evil</button><br>');
    get("#properties").removeChild(get("#turn"));
}

renderProperties();
setTimeout(() => {
    setTimeout(function run() {
        person.makingHungry();
        setTimeout(run, 60 * sec);
    });
}, 5 * sec);


alert("Welcome to the superhero-tamagochi")
alert("For the edit name, surname, age or smth - press on a desired characteristic")
