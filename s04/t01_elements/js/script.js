function correctErrors(value, attr) {
    let attribute, data;

    attribute = value.getAttribute('class');
    if (!attr || !attr.length || (attribute !== 'good' && attribute !== 'evil'&& attribute !== 'unknown'))
        value.setAttribute('class', 'unknown');


    data = value.getAttribute('data-element');
    if (!data || !data.length)
        value.setAttribute('data-element', 'none');

}

function createDivs(value, data) {
    let list;
    let allElements;

    allElements = data.split(' ');

    for (let i = 0; i < allElements.length; ++i) {
        list = document.createElement('div');
        list.className = `elem ${allElements[i]}`;
        if (allElements[i] === 'none') {
            let line = document.createElement('div');
            line.className = `line`;
            list.appendChild(line);
        }
        value.appendChild(list);
    }
}

function addPowers() {
    let value;
    let attribute;

    for (let i = 0; (value = document.getElementsByTagName('li')[i]); ++i) {
        attribute = value.attributes;
        correctErrors(value, attribute);
        value.appendChild(document.createElement('br'));
        createDivs(value, value.getAttribute('data-element'));
    }
}

addPowers();