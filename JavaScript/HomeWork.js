var arr = [3, 2, 1]
var newArr=''

for(var i = 0; i < arr.length; i++){
newArr = newArr + arr[i] + ' больше, чем '
}
console.log(newArr.slice(0, 29))