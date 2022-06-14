let get = (id) => document.querySelector(id);
let getAll = (id) => document.querySelectorAll(id);

let countSpan = get('#counter')
let maxSpan = get('#maxImages')
let imgBlock = get('#imgBlock')

let counter = 0
let maxImages = 10

let images = [
    './assets/images/1.jpg',
    './assets/images/2.jpg',
    './assets/images/3.jpg',
    './assets/images/4.jpg',
    './assets/images/5.jpg',
    './assets/images/6.jpg',
    './assets/images/7.jpg',
    './assets/images/8.jpg',
    './assets/images/9.jpg',
    './assets/images/10.jpg'
]

function renderImg()  {
    images.map((img) => {
        imgBlock.insertAdjacentHTML('beforeend',
            `<img class="image lazy" src="./assets/images/temp.gif" data-src="${img}" alt="${img}">`)
    })
}

function addCounter()  {
    counter += 1
    countSpan.innerHTML = counter
    if (counter === maxImages) {
        let div = get('.counter')
        div.style.background = 'green'
    }
}

function lookForVisible()  {
    let imgAll = getAll('.lazy')

    if ('IntersectionObserver' in window) {
        let checkImg = new IntersectionObserver((entries, observer) => {
            entries.map((entry) => {
                if (entry.isIntersecting) {
                    let lazyImg = entry.target
                    lazyImg.src = lazyImg.dataset.src
                    lazyImg.style.width = '600px'
                    lazyImg.classList.remove('lazy')
                    checkImg.unobserve(lazyImg)
                    addCounter();
                }
            })
        })
        imgAll.forEach((lazyImage) => checkImg.observe(lazyImage))
    }
}

maxSpan.innerHTML = maxImages;
renderImg()
lookForVisible()