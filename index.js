//1
function sumOfThreeAndFive(){
    let sum = 0; 
    for (let i = 0; i < 1000; i++){
        if (i % 3 === 0 && i % 5 === 0){
            sum += i;
        }
        
    }
    return sum; 
  
}
// console.log(sumOfThreeAndFive())

function greaterNum(num1,num2){
    if( typeof num1 && typeof num2 !== "number"){
        return null 
    }  else {
  if (num1 < num2 ){
      return num2
  } else if (num1 > num2){
      return num1
  } else {
      return  "both integers are equal"
  }
 }
} 

console.log(greaterNum(1,2))

function oddAndEvenInFifteen(){
    for (let i = 0; i <= 15; i++){
        if ( i % 2 === 0){
            console.log (`${i} is even`)
        } else {
            console.log(`${i} is odd`)
        }
        
    }
  
}
oddAndEvenInFifteen()

function sortThreeNums(num1,num2,num3){
    if (num1 > num2 > num3 ){
        console.log(num1,num2,num3)
    } else if (num3 > num2 > num1){
        
        console.log(num3,num2,num1)
        }else { 
            console.log(num2,num1,num3)
        }
    }

sortThreeNums(1,2,3)







