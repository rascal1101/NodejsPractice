var myModule = require("./module.js");

myModule.func1(10).then(function(data){
  console.log(data);
}, function(err){
  console.log(err);
});
