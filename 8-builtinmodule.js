const os = require('os');

const user = os.userInfo();
console.log(user);

// how long the pc has been running, system up time in sec

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),

}

console.log(currentOS);
