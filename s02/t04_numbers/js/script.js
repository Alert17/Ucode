let first = prompt("Enter first number: ")
let second = prompt("Enter second number: ")
;

for (let i = first; i <= second; i++) {
    let str = "is ";
    if (!(i % 2)) {
        str += "even";
    }

    if (!(i % 3)) {
        if (str > "is ")
            str += ", "
        str += "a multiple of 3"
    }

    if (!(i % 10)) {
        if (str > "is ")
            str += ", "
        str += "a multiple of 10"
    }
    if (str === "is ")
        str = "-"

    console.log(i + " " + str);
}