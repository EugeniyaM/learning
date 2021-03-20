function calcValues(a,b) {
  return [
    a + b,
    undefined,
    a * b,
    a / b
  ]
}

// const [sum, sub = 'No sub', mult, ...other] = calcValues(10, 7)
// console.log(sum,sub, mult, other)

const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: "Moscow"
  }
}
//
// const {name: firstName, age, car = 'no car', address:{city:homeTown, country}} = person
//
// console.log(firstName, age, homeTown, country, car)

function logPerson({name: firstName, age}) {
  console.log(firstName + ' ' + age)
}

logPerson(person)
