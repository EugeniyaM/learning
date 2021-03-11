//Prototype

// const person = new Object({
//     name: 'Maxim',
//     age: 25,
//     greet: function(){
//       console.log('Greet!')
//     }
//   })
//
// Object.prototype.sayHello = function(){
//   console.log('Hello!');
// }
//
// const lena = Object.create(person)
// lena.name = 'Elena'
//
// const str = new String("I am string")


//this, call, bind, apply

//this - контекст
//bind - возвращает новую функцию, которая привязала к себе новый контекст не вызывает существующую функцию, не вызывает функцию сразу

// function hello() {
//   console.log('Hello',this);
// }
//
// const person = {
//   name: 'Jane',
//   age: 24,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(window),
//   sayHelloDoc: hello.bind(document),
//   logInfo: function(job, phone){
//     console.group(`${this.name} info:`)  //group(``) Передает строку которая может быть заголовком группы
//     console.log(`Name is ${this.name}`)  // `текст ${выражение}` - шаблонные литералы/строки
//     console.log(`Age is ${this.age}`)
//     console.log(`Job is ${job}`) //без this т.к. параметр указан в функции
//     console.log(`Phone is ${phone}`)
//     console.groupEnd() //конец группы
//    }
// }
//
// const lena = {
//   name: 'Elena',
//   age: 23
// }
//
// person.logInfo.bind(lena,'Frotend', '271-27-27')() // bind(lena) - изменен контекст с person на lena
//
// //способы использования bind
// //1
// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog('Frotend', '271-27-27')
//
// //2
// const fnLenaInfoLog1 = person.logInfo.bind(lena,'Frotend', '271-27-27')
// fnLenaInfoLog1()
//
// //метод call - задает контекст,параметры и сразу же вызывает функцию
// person.logInfo.call(lena,'Frotend', '271-27-27')
//
// //метод apply - в отличие от call в качестве параметров функции передает массив
// person.logInfo.apply(lena, ['Frotend', '271-27-27'])


///===================

const array = [1,2,3,4,5]

Array.prototype.multBy = function(n){
  console.log('multBy', this)
  return this.map(function(i){
    return i*n
  })

}

console.log(array.multBy(2))
