console.log('Request data...');

// setTimeout(() => {
//   console.log('Preparing data...')
//
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//
//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data recieved', backendData)
//   }, 2000)
// }, 2000)


//-------------------------------------------------------
//Promise
//.then - операция будет выполнена после выполнения resolve()
//.finally - выйдет в любом случае
//.reject - отклонение/ошибка
//.catch - выйдет в случае .reject
//promise.all() - .all представляет массив, только для глобального Promise, выполняет действие после последнего эл-та массива
//promise.race() - .race принимает набор promise и отработает первый promise

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...')
//
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData)
//   }, 2000)
// })
//
// p.then(data => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//     }, 2000)
//   })
// }).then(clientData => {
//   console.log('Data recieved', clientData)
// }).catch(err => console.log('Error', err))
// .finally(() => {
//   console.log('Finally');
// })

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

sleep(1000).then(() => console.log('After 1 second'))
sleep(2000).then(() => console.log('After 2 seconds'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('All promises');
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('All promises');
})
























//
