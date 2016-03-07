var exec = require('child_process').exec;

function start(response){
  console.log('request-handler "start" was called.');
  // var content = 'empty';
  var body = 
  '<!DOCTYPE html> ' +
  '<html> ' +
  '<head> ' +
  '<meta http-equiv="Content-Type" content="text/html"/> ' +
  '<meta charset="utf-8"/> ' +
  '</head> ' +
  '<body> ' +
  '<form action="/upload" method="post"> ' +
  '<textarea name="text" rows="20" cols="60"></textarea> ' +
  '<input type="submit" value="submit text"/> ' +
  '</form> '+
  '</body> '+
  '</html>';
  
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
  
  // exec('ls -lah', function(error, stdout, stderror){
    // content = stdout;
  // });
  
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
