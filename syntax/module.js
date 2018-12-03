module.exports = {
  func1: function(data){
    return new Promise(function(resolve, reject){
      console.log(data);
      if(data==10){
        this.func1(data+1);
      }else if(data==11){
        resolve(data + " : success");
      }else {
        reject("fail");
      }
    });
  },

  func2: function(data, resolve, reject){
    resolve(data + " : success");
  }
}
