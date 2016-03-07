var exec = require('child_process').exec;

function start(response){
  console.log('request-handler "start" was called.');
  // var content = 'empty';
  
  exec('ls -lah', function(error, stdout, stderror){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
    // content = stdout;
  });
  
  // return content;
}
function upload(response){
  console.log('request-handler "upload" was called.');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello upload');
  response.end();
  // return 'hello upload';
}
module.exports.start = start;
module.exports.upload = upload;
