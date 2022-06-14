
function concat(...phrases) {
    path.count = 0;

    function path() {
        let str = prompt("Enter string: ");

        if (str === null)
            return phrases[0];

        path.count++;

        return phrases[0].concat(" ", str);
    }

    return arguments.length === 1 ? path : phrases[0].concat(" ", phrases[1]);
}
