function Clock(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    this.setClock = function (seconds) {
        this.hours = parseInt(seconds / 3600);
        this.minutes = parseInt((seconds - this.hours * 3600) / 60);
        this.seconds = seconds - this.hours * 3600 - this.minutes * 60;
    }

    this.setMinutes = function (minutes) {
        this.minutes = minutes;
    }

    this.getHours = function () {
        return this.hours;
    }

    this.tick = function () {
        this.seconds++;
        if (this.seconds == 60) {
            this.seconds = 0;
            this.minutes++;
        }

        if (this.minutes == 60) {
            this.minutes = 0;
            this.hours++;
        }

        if (this.hours == 13)
            this.hours = 1;
    }

    this.now = function () {
        return this.hours + ':' + this.minutes + ':' + this.seconds;
    }

}
let clock1 = new Clock(10, 59, 59);
//clock1.tick();
console.log(clock1.now());