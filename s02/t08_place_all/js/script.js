function sortEvenOdd(arr) {
    const checkSort = ((a, b) => {
        if (!(a % 2) && (b % 2)) {
            return -1;
        }

        if ((a % 2) && !(b % 2)) {
            return 1;
        }

        return a - b;
    });
    const oddEvenSort = arr => {
        arr.sort(checkSort);
    };
    oddEvenSort(arr);
}


const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
sortEvenOdd(arr);
alert(arr);