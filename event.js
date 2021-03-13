console.log('start');

console.log('start 2');

window.setTimeout(function(){
  console.log('Inside timeout, after 2 seconds');
}, 2000)

//-------
console.log('start')

setTimeout(function(){
    console.log('Inside setTimeout')
}, 0)  //ставит событие в конец

console.log('end')
