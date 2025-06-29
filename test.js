//   import {produce} from 'immer'

      
//       const employe = {name: 'Mir', address: {country: 'Bangladesh', city: 'dhaka'}}


//       const employe2 = produce(employe, (draft) =>{
//         draft.name = 'mezva',
//         draft.address.city = 'chitagong'
//       })
 
//     //   console.log(employe === employe2);
      
//       console.log(employe);
//       console.log(employe2);
       
   

// curried
const add = (a) => (b) => a + b ;

console.log(add(3)(5));



//  const totalPrice = (amount, discount) => amount - amount * discount;

//  console.log(totalPrice(200, 0.2));


const totalPrice = (discount) => (amount) =>  amount - amount * discount;
const withDiscount = totalPrice(0.3)
console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(250));

  
























