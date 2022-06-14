let houseMixin = {

    //Replace
    wordReplace: function (word, place) {
        let words = this.description.split(' ');
        let result = '';

        words.forEach(value => {
            result += (value === word) ? place : value;
            result += ' ';
        });

        this.description = result.trim();
    },

    //Insert
    wordInsertAfter(word, insertion) {
        let words = this.description.split(' ');
        let result = '';
        words.forEach(value => {
            result += value + ' ';
            result += (value === word) ? insertion + ' ' : '';
        });
        this.description = result.trim();
    },

    //Delete
    wordDelete(word) {
        let res = this.description.split(word);
        this.description = res.join('');
    },

    //Encrypt
    wordEncrypt() {
        let words = Object.assign([], this.description);
        let result = '';
        words.forEach(c => {
            result += String.fromCharCode(c.charCodeAt(0) - 13);
        });
        this.description = result;
    },

    //Decrypt
    wordDecrypt() {
        let words = Object.assign([], this.description);
        let result = '';
        words.forEach(c => {
            // if (c.match(/[A-Za-z]/g)) {
            result += String.fromCharCode(c.charCodeAt(0) + 13);
            // } else {
            //     result += c;
            // }
        });
        this.description = result;
    }
}

