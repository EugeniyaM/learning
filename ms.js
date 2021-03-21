const obj = {
  name: 'Jane',
  age: 25,
  job: 'Frontend'
}

const entries1 = [
  ['name', 'Jane'],
  ['age', 25],
  ['job', 'Frontend']
]


// console.log(Object.entries(obj)) //Object into massive (method Object.entries())
// console.log(Object.fromEntries(entries1)) //massive into object (method Object.fromEntries())

const map = new Map(entries1)

map
.set('newField', 42)
.set(obj, 'Value of object')
.set(NaN, 'NaN??')

// map.delete('job')

// console.log(map.has('job'))
// console.log(map);
// console.log(map.size);
// map.clear()
// console.log(map.size);


//===================================================================

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// for (let val of map.values()) {
//   console.log(val)
// }

// for (let key of map.keys()) {
//   console.log(key)
// }

// map.forEach((val, key, m) => {
//   console.log(val, key);
// })


// ====================================================================

// console.log(map);
// const array = Array.from(map)
//
// const mapObj = Object.fromEntries(map.entries())
//
// console.log(mapObj);


// ====================================================================

const users = [
  {name: 'Elena'},
  {name: 'Alex'},
  {name: 'Irina'}
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000*60))
  .set(users[2], new Date(new Date().getTime() + 5000*60))

function lastVisit(user) {
  return visits.get(user)
}


console.log(lastVisit(users[1]));
