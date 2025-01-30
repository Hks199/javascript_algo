// let count = 2;
// let arr = []
//     for(let i = 2; i <= i; i++){
//       if(i === 2 || i === 3 || i === 5 || i === 7){
//           arr.push(i);
//       }else if(i%2 === 0 || i%3 === 0 || i%5 === 0 || i%7 === 0 ){
//         continue;
//       }else{
//         arr.push(i)
//       }
//       if(arr.length === 10){
//          break;
//       }
//       count++;
//     }
//     const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     console.log(sum);


function checkPrimeNumber(number){
   if(number <= 1){
      return false;
   }else{
      for(let i = 2; i < Math.sqrt(number); i++){
          if(number % i == 0){
            return false
          }
      }
      return true;
   }
}
let arr = [1,0,4,7,5,6,8,5,9]
checkPrimeNumber()
arr.forEach((num)=>{
    if(checkPrimeNumber(num)){
        console.log("Its not a prime Number")
    }else{
        console.log("Its a prime number");
    }
})

