const EventEmmiter = require('events');

class School extends EventEmmiter {
    firstPeriods() {
        console.log('event started');

        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'periods ended',
            });
        }, 2000);
    }
}

module.exports = School;
