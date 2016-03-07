// var exec = require('child_process').exec;
var querystring = require('querystring');
var fs = require('fs');

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
  '<form action="/upload" enctype="multipart/form-data" method="post"> ' +
  '<input type="file" name="upload"></input> ' +
  '<input type="submit" value="Upload file"/> ' +
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
function upload(response, postData){
  console.log('request-handler "upload" was called.');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You wrote: ' + querystring.parse(postData).text);
  response.end();
  // return 'hello upload';
}

function show(response){
  console.log(('request-handler "show" was called'));
  response.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStreem('/tmp/test.png').pipe(response);
}
module.exports.start = start;
module.exports.upload = upload;
module.exports.show = show;
