String.prototype.removeDuplicates = function () {
        let str = this.split(' ');
        let new_str = [];

        for (let i = 0; i < str.length; i++)
                if (!hasDuplicate(str[i], str, i))
                        new_str.push(str[i]);

        let resStr = '';
        new_str.forEach((value) => resStr += value + ' ')
        return resStr.trim();
};

function hasDuplicate (word, arr, count) {
        if (word === "")
                return true;

        for (let i = 0; i < count; i++)
                if (word === arr[i])
                        return true;

        return false;
}
