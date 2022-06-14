function getFormattedDate(dateObject) {
    let res;
    res = dateObject.getDate() + "." + dateObject.getMonth() + "." + dateObject.getFullYear() + " "
    res += (dateObject.getHours() < 10) ? "0" + dateObject.getHours() : dateObject.getHours()
    res += ":"
    res += (dateObject.getMinutes() < 10) ? "0" + dateObject.getMinutes() : dateObject.getMinutes()
    res += " "
    switch (dateObject.getDay()) {
        case 0:
            res += "Sunday"
            break;
        case 1:
            res += "Monday"
            break;
        case 2:
            res += "Thursday"
            break;
        case 3:
            res += "Wednesday"
            break;
        case 4:
            res += "Tuesday"
            break;
        case 5:
            res += "Friday"
            break;
        case 6:
            res += "Saturday"
            break;
    }
    return res;
}

const date0 = new Date('42 03:24:00')
alert(getFormattedDate(date0));
