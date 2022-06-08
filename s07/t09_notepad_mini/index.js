const express = require('express')

const PORT = process.env.PORT ?? 8080

const app = express()

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', function (req, res) {
    res.render('index')
})

const x = 3;
const y = 10;

let array = ['Name', 'Strength', 'Age',
    "Black Panther", '66', '53',
    'Captain America', '79', '137',
    'Captain Marvel', '97', '26',
    'Hulk', '80', '49',
    'Iron Man', '88', '48',
    'Spider-Man', '78', '16',
    'Thanos', '99', '1000',
    'Thor', '95', '1000',
    'Yon-Rogg', '73', '52'];

document.getElementById('placeholder').innerHTML = '';



function tableCreate() {
    let placeHolder = document.getElementById('placeholder');
    let mainTable = document.createElement('table');
    let tableBody = document.createElement('tbody');

    let row;
    let cell;
    let tableInfo;
    let id = 0;

    for (let j = 0; j < y; ++j) {
        row = document.createElement('tr');
        for (let i = 0; i < x; ++i) {
            cell = document.createElement('td');

            cell.setAttribute('id', id);

            if (id <= 2 && id >= 0)
                cell.setAttribute('onclick', `tableSort(${id})`);

            tableInfo = document.createTextNode(`${array[id++]}`);

            cell.appendChild(tableInfo);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    mainTable.appendChild(tableBody);
    placeHolder.appendChild(mainTable);
    mainTable.setAttribute('id', 'table');
}

function tableSort (n) {
    let rows;
    let shouldSwitch;
    let i;
    let row1;
    let row2;

    let switchCount = 0;
    let mainTable = document.getElementById('table');
    let switching = true;
    let direction = 'asc';


    while (switching) {
        switching = false;
        rows = mainTable.rows;
        for (i = 1; i < (rows.length - 1); ++i) {
            shouldSwitch = false;
            row1 = rows[i].getElementsByTagName('td')[n].innerHTML.toLowerCase();
            row2 = rows[i + 1].getElementsByTagName('td')[n].innerHTML.toLowerCase();
            if ((direction === 'asc' && tableSortComparator(row1, row2)) ||
                (direction === 'desc' && tableSortComparator(row2, row1))) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
            switchCount++;
        } else if (!switchCount && direction === "asc") {
            direction = "desc";
            switching = true;
        }
    }


    let msg = document.getElementById('notification');
    let name = document.getElementById(n).innerHTML;
    msg.innerHTML = `Sorting by ${name}, order: ${direction.toUpperCase()}`;
}

function tableSortComparator(row1, row2)  {
    let num1 = Number.parseFloat(row1);
    let num2 = Number.parseFloat(row2);

    if (num1===+num1 && num2===+num2)
        return num1 > num2;

    return row1 > row2;

}


tableCreate();