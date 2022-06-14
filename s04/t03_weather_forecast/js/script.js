let get = (id) => document.querySelector(id);


function createWithClass (tag, type, text) {
    let module = document.createElement(tag)
    module.classList.add(type)

    if (text)
        module.innerHTML = text
    return module
}

function render(forecast)  {
    let module = get('.forecast')
    let date = new Date(forecast.dt * 1000)
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    let day = createWithClass('div', 'day')

    day.insertAdjacentHTML("beforeend",
        `<span class="boldTxt">${days[date.getDay()]}</span>`)
    day.insertAdjacentHTML('beforeend',
        `<span class="date">${date.getDate()}.${+date.getMonth() + 1}</span>`)
    day.insertAdjacentHTML('beforeend',
        `<img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="icon">`)
    day.insertAdjacentHTML('beforeend',
        `<span class="boldTxt"><span>${forecast.temp.day.toFixed(0)}</span>°C</span>`)
    module.append(day)
}

let getForecast = async (lat, lng) => {
    let forecast = fetch(`https://api.openweathermap.org/data/2.5/onecall?\
lat=${lat}&lon=${lng}&exclude=current,minutely,hourly,alerts&cnt=6&units=metric\
&appid=e13ffa4a7ab745bda274278988a240f6`)
        .then(response => response.json())
        .then(data => {
            get('.forecast').append(createWithClass('div', 'city', `${data.timezone}`))
            data.daily.slice(1, 7).map((day) => render(day))
        })
}

let start = async (lat, lng) => {
    console.log(lat)
    try {
        if ((lat === undefined || lng === undefined) && navigator.geolocation)
            navigator.geolocation.getCurrentPosition(position => {
                getForecast(position.coords.latitude, position.coords.longitude)
            })
        else
            getForecast(lat, lng)

    } catch (e) {
        console.log('Error is' + e)
    }
}


let lat = 50.45466
let lng = 30.5238

start(lat, lng);
