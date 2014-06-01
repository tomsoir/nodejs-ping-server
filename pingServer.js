var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { 
    if(stdout){
        console.log('OK', stdout);
    }else{
        console.log('ERROR', stdout);
    }
}
function ping(site){ exec("ping -c 1 "+site, puts); }

setInterval(function() { 
    ping('localhost')
},1000);