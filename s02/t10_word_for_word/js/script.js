let checkRepeats = (x) => {
    let arr = [];
    for (let i = 0; i < x.length; i++)
        if (x[i])
            arr.push(x[i]);

    let completed = [];
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        if (!~completed.indexOf(curr));
            completed.push(curr);
    }
    return completed;
}

let addWords = (obj, words) => {
    let full = Object.values(obj);
    full = String(full) + " " + words;
    full = full.split(" ");
    full = checkRepeats(full);
    obj["words"] = full.join(" ");
    return obj;
}



let removeWords = (obj, words) => {
    let deleted = Object.values(obj);
    deleted = String(deleted);
    deleted = deleted.split(" ");
    deleted = checkRepeats(deleted);
    let deleteds = checkRepeats(words.split(" "));

    for (let i = 0; i < deleteds.length; i++) {
        let item = deleteds[i];
        let index = deleted.indexOf(item);
        if (index > -1)
            deleted.splice(index, i);
    }
    obj["words"] = deleted.join(" ");
    return obj;
}


let changeWords = (obj, words, newwords) => {
    let complited = Object.values(obj)
    complited = String(complited)
    complited = complited.split(" ")
    complited = checkRepeats(complited)
    let news = checkRepeats(newwords.split(" "))
    let olds = checkRepeats(words.split(" "))

    for (let i = 0; i < olds.length; i++) {
        let item = olds[i];
        let index = complited.indexOf(item);
        if (index > -1) {
            complited.splice(index, i);
        }
    }
    for (let i = 0; i < news.length; i++) {
        let item = news[i];
        complited.push(item);
    }

    obj["words"] = complited.join(" ");
    return obj;
}
