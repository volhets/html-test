var names = 'Юра, Коля, Тарас, Володя';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  alert( 'Вам сообщение ' + arr[i] );
}