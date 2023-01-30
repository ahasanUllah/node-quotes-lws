const School = require('./school');

const school = new School();
school.firstPeriods();

// register an events
school.on('bellRing', ({ period, text }) => {
    console.log(`Start second periods because ${period} ${text}`);
});
