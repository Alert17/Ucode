class Timer {
        title = String();
        delay = Number();
        stopCount = Number();

        constructor(title, delay, stopCount) {
                this.title = title;
                this.delay = delay;
                this.stopCount = stopCount;
        }

        start () {
                console.log('Timer ' + this.title +
                    ' started (delay=' + this.delay +
                    ', stopCount=' + this.stopCount +
                    ')');
        }

        tick (count) {
                console.log('Timer ' + this.title + ' Tick! | cycles left ' + count);
                if (count === 0) {
                        console.log('Timer Bleep stopped');
                }
        }

        stop (timerId) {
                setTimeout(() => clearInterval(timerId), this.delay * this.stopCount);
        }
}

let runTimer = (id, delay, counter) => {
        let timer = new Timer(id, delay, counter);

        timer.start();
        let count = timer.stopCount;
        let timerId = setInterval(() => timer.tick(--count), timer.delay);

        timer.stop(timerId);

}

