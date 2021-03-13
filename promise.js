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

const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('Preparing data...')

    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    }
    resolve(backendData)
  }, 2000)
})

p.then(data => {
  const p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
      data.modified = true
      resolve(data)
    }, 2000)
  })

  p2.then(clientData => {
    console.log('Data recieved', clientData)
  })
})
