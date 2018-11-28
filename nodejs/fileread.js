var fs = require('fs');

fs.readFile('./readfile/sample.txt', 'utf8', function(err, data){
  console.log(data);
});
