function stepGenerator () {
    console.log('"exit" for close')
    let number = 1;
    while (true) {
        let newNumb = prompt(`number result: ${number}. Enter a new number: `);


        if (!(isNaN(+newNumb)))
            number += (+newNumb);
        else
            console.error('Invalid number!');

        if (number > 10000)
            number = 1;

        if (newNumb === 'exit')
            break;
    }
}

stepGenerator();
