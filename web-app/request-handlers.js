function start(){
  console.log('request-handler "start" was called.');
  return 'hello start';
}
function upload(){
  console.log('request-handler "upload" was called.');
  return 'hello upload';
}
module.exports.start = start;
module.exports.upload = upload;
