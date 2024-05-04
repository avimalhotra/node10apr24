const netList = require('network-list');

netList.scan({}, (err, arr) => {
    console.log(arr); // array with all devices
});