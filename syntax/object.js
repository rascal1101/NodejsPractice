var members = ['egoing', 'k8805', 'hoya']
console.log(members);

var i = 0;
while(i < members.length){
  console.log('array loop', members[i]);
  i = i + 1;
}
var roles = {
  'programmer':'egoing',
  'designer' : 'k8805',
  'manager' : 'hoya'
}

console.log(roles);
for(var name in roles){
  console.log('object => ', name, 'value => ', roles[name]);
}
