// function createCalcFunction(n) {
//   return function() {
//     console.log(1000*n)
//   }
// }
//
// const calc = createCalcFunction(42)
// calc()


// function createIncrementor(n) {
//   return function(num) {
//     return n + num
//   }
// }
//
// const addOne = createIncrementor(1)
//
// console.log(addOne(10))
// console.log(addOne(42))

// function urlGenerator(domain) {
//   return function(url) {
//     return `http://${url}.${domain}`
//   }
// }
//
// const comUrl = urlGenerator('com')
// console.log(comUrl('vk'));

function bind(context, fn){
  return function(...args) {
    fn.apply(context, args)
  }
}

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
  }

const person1 = {name: 'Mike', age: 22, job: 'Frontend'}
const person2 = {name: 'Jake', age: 25, job: 'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()
