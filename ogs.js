const person = Object.create(
  {},
  {
    name:{
      value:'Jane',
      enumerable: true, //дискриптор, обозначающий видимость
      writable: true, //дикриптор, позволяющий изменять значение
      configurable: true //дискриптор, позволяющий манипулировать с ключами объекта, возможность удалять поля
    },
    birthYear: {
      value: 1996,
      enumerable: false,
      writable: false,
      configurable: false
    },
    age: {
      get(){
        return new Date().getFullYear() - this.birthYear
      },
      set(value){
        document.body.style.background = 'red'
          console.log("set age", value);
      }
    }
  }
)



for (let key in person) {
  console.log('Key', person[key])
}
