function createElem(str)  {
    let elem = document.createElement('p');
    elem.textContent = str;
    list.append(elem);
}

function showCookies()  {
    let cookies = document.cookie.split(';');
    if (!cookies || (cookies.length <= 1 && cookies[0] === ''))
        createElem('[Empty]');
    else
        for (let i in cookies) {
            createElem(`--> ${cookies[i].split('=')[1]}`);
            cookieCount++;
        }
}

function addCookies()  {
    let expDate;
    let textValue = text.value.trim();

    if (text.value === '' || textValue.length === 0) {
        alert('It\'s empty. Try to input something in "Text input".');
        return;
    }
    if (cookieCount === 0)
        document.querySelector("#cookiesList p").remove();

    expDate = new Date();
    expDate.setDate(expDate.getDate() + 30);
    document.cookie = `${cookieCount}=${textValue};expires=${expDate.toUTCString()};path=/`;

    createElem(`--> ${textValue}`);
    text.value = '';
    cookieCount++;
}

function clearCookies()  {
    if (confirm("Are you sure?")) {

        document.querySelectorAll('#cookiesList p').forEach(p => p.remove());
        createElem('[Empty]');

        let all = document.cookie.split(';');
        for (let i in all)
            document.cookie = `${all[i].split('=')[0]}='';expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;

        cookieCount = 0;
    }
}

let list = document.querySelector("#cookiesList");
let cookieCount = 0;

showCookies();