function Calculator() {

    this.init = (number) =>  {
        this.result = number
        return this;
    };

    this.add = (number) =>  {
        this.result += number;
        return this;
    };

    this.mul = (number) => {
        this.result *= number;
        return this;
    };

    this.div = (number) => {
        this.result /= number;
        return this;
    };

    this.sub = (number) => {
        this.result -= number;
        return this;
    };

    this.alert = () => {
        setTimeout(() => alert(this.result), 5000)
        return this;
    };
}

