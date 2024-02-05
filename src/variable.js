import React from 'react'

// Const
// const harga = 3000;
// const harga = 400;

// Var
// var harga = 20000;
// if (true) {
//    var  harga = 30000
// }

// Let
let harga = 20000;
if(true) {
    let harga = 30000;
}

const Variable = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
    </div>
  )
}

export default Variable
