var cron = require('node-cron');

//execute every 1 min
cron.schedule('*/5 * * * * *', function(){
    var shell = require('./child_helper');

    var commandList = [
        "node hello.js",
        // "npm run script -- PeterGood"
    ]

    shell.series(commandList , function(err){
    //    console.log('execute many commands in a row'); 
        console.log('done')
    });
});
