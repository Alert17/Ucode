class Movie {
    constructor(options) {
        this.title = options.title;
        this.poster = options.poster;
        this.date = options.date;
        this.info = options.info;
        this.actors = options.actors;
    }
}

let charlie = new Movie({
    title: "Charlie",
    poster: "./assets/images/charlie.jpg",
    date: "July 10, 2005",
    info: "Charlie and the Chocolate Factory is a 2005 musical fantasy film directed by Tim Burton and written by John" +
        " August, based on the 1964 British novel of the same name by Roald Dahl. The film stars Johnny Depp as Willy " +
        "Wonka and Freddie Highmore as Charlie Bucket, alongside David Kelly, Helena Bonham Carter, Noah Taylor, Missi" +
        " Pyle, James Fox, Deep Roy, and Christopher Lee. The storyline follows Charlie as he wins a contest along with" +
        " four other children and is led by Wonka on a tour of his chocolate factory." ,
    actors: ["Johnny Depp", "Freddie Highmore", "David Kelly", "Helena Bonham Carter"]
})

let wick = new Movie({
    title: "John Wick",
    poster: "./assets/images/wick.jpg",
    date: "September, 19, 2014",
    info: "John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial" +
        " debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki," +
        " Bridget Moynahan, Dean Winters, Ian McShane, John Leguigzamo, and Willem Dafoe. It is the first installment " +
        "in the John Wick franchise.",
    actors: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Adrianne Palicki"]
})

let jent = new Movie({
    title: "The Gentlemen",
    poster: "./assets/images/jent.jpg",
    date: "December 3, 2019",
    info: "The Gentlemen is a 2019 action comedy film[5][6][7] written, directed and produced by Guy Ritchie, who" +
        " developed the story along with Ivan Atkinson and Marn Davies. The film stars Matthew McConaughey, Charlie" +
        " Hunnam, Henry Golding, Michelle Dockery, Jeremy Strong, Eddie Marsan, Colin Farrell, and Hugh Grant. It" +
        " follows an American marijuana kingpin in England who is looking to sell his business, setting off a chain" +
        " of blackmail and schemes to undermine him.",
    actors: ["Matthew McConaughey", "Charlie Hunnam", "Henry Golding", "Michelle Dockery"]
})

let movies = new Set();

movies.add(charlie)
movies.add(wick)
movies.add(jent)


let renderFilmInfo = (set) => {
    let activeFilm = document.querySelector(".li-active"),
        div = document.querySelector('.film-info'),
        actors = document.createElement("div"),
        prevPoster = document.querySelector(".poster")

    div.innerHTML = ""
    if (prevPoster)
        prevPoster.remove()

    actors.setAttribute('class', 'actors')

    for (let movie of set) {
        if (activeFilm.innerHTML === movie.title) {
            div.innerHTML = `<div class="film-name"><p>${movie.title}</p></div>`
            div.innerHTML += `<div class="date"><p>${movie.date}</p></div>`
            for (let i of movie.actors)
                actors.insertAdjacentHTML("beforeend", `<p>${i}</p>`)

            div.append(actors)
            div.insertAdjacentHTML("beforeend", `</div><div class="description"><p>${movie.info}</p></div></div>`)
            div.insertAdjacentHTML('afterend', `<div class="poster"><img src="${movie.poster}" alt="${movie.title}"></div>`)


            break;
        }
    }
}

let renderFilmList = (set) => {
    let ul = document.querySelector("ul"),
        firstLi = true;
    ul.innerHTML = "";
    for (let movie of set) {
        let li = document.createElement("li")
        if (firstLi) {
            li.setAttribute('class', 'li-active')
        }
        firstLi = false
        li.innerHTML = movie.title
        ul.append(li)
    }
    ul.onclick = (event) => {
        let li = event.target;
        document.querySelector(".li-active").classList.remove("li-active")
        li.classList.add("li-active")
        renderFilmInfo(set)
    }
    renderFilmInfo(set);
}

let renderCollection = (target) => {
    document.querySelector(".category-active").classList.remove('category-active')
    target.classList.add("category-active")

    renderFilmList(movies)

}

let intMain = () => {
    let btnsCollect = document.querySelector("nav");
    btnsCollect.onclick = (event) => renderCollection(event.target)
    renderFilmList(movies)
}

intMain();
