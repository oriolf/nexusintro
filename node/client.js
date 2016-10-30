var nexus = require('./nxjs.js');

nexus.dial('ws://localhost:443', function(nc, err) {
    nc.login('root', 'root', function() {
        nc.taskPush('demo.hello', null, 5, function(res, err) {
            console.log('Result: ', res);
        });
    });
});
