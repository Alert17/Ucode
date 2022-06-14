'use strict';

function checkBrackets(str) {

    let checked = 0;
    let mustAdd = 0;
    let i;

    for (i = 0; i < str.length; ++i) {
        if (str[i] === '(')
            checked++;
        else if (str[i] === ')')
            checked ? checked-- : mustAdd++;
    }
    mustAdd += checked;

    return mustAdd;
}

