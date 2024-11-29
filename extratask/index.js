//! YOXLANILIB
//?TASK
// let numbers = [-1, 2, -3, 4, -5, 6];
// function remove(arr) {
//     return arr.map(function(el){
//        if(el < 0){
//            return Math.abs(el)
//        }
//        else{
//         return el;
//        }

//     })
// }
// console.log(remove(numbers));

//?TASK1
// function capitalizeWords(str) {
//    let result = str.split(' ')
//    let arr= result.map(function(el){
//       return el[0].toUpperCase()+el.slice(1)
//    })
//    return arr.join(' ')
// }
// console.log(capitalizeWords("hello world!"));

//?TASK2
// function arrayDifference(arr1,arr2) {
//   return arr1.filter(function(el){
//       return !arr2.includes(el)
//   })
// }
// console.log(arrayDifference([1,2,3],[2,3,4]));

//?TASK3
// function arrayIntersection(arr1,arr2) {
//   return arr1.filter(function(el){
//     return arr2.includes(el)
//   })
// }
// console.log(arrayIntersection([1,2,3],[2,3,4]));

//?TASK4
// function arrayUnion(arr1,arr2) {
//     arr2.forEach(function(el){
//       if(!arr1.includes(el)){
//          arr1.push(el)
//       }
//     })
//     return arr1
  
// }
// console.log(arrayUnion([1,2,3],[2,3,4]));

//?TASK5
// function rotateArray(arr,n) {
//   let l=arr.length
//   n=n%l
//   let part1=arr.slice(-n)
//   let part2=arr.slice(0, length - n)
//  return part1.concat(part2)
   
// }
// console.log(rotateArray([1,2,3,4],5));

//?TASK1
// const isPalindrome=(str)=>{
//     return str==str.split('').reverse().join('')
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("madison"));

//?TASK2
// function fibonacci(n) {
//     let arr=[0,1]
//     for(let i=2;i<n;i++){
//         arr[i]=arr[i-1]+arr[i-2]
        
//     }
//     return arr;
// }
// console.log(fibonacci(7));

//?TASK3
// function sumEvenNumbers(arr) {
//     let sum=0
//     arr.forEach(function(el){
//         if(el%2==0){
//             sum+=el
            
//         }
//     })
//      return sum;
// }
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

//?TASK4
// function countWords(str) {
//     return str.split(' ').length
// }
// console.log(countWords("This is a test string"));

//?TASK5
// function isSorted(arr) {
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]<arr[i-1]){
//         return false
//     }
//   }
//   return true

// }
// console.log(isSorted([1, 2, 3, 4, 5]))
// console.log(isSorted([1, 3, 2, 4, 5]))

//?CLOSURE

//?TASK1
// function inner(n) {
//     function outer(){
//        return n
//     }
//     return outer
// }
// let result=inner(7)
// console.log(result());


//?TASK2
// function innerFn() {
//     let n=Math.floor(Math.random()*10)
//     function outer(){
//      return n
//     }
//     return outer
// }
// let res=innerFn()
// console.log(res());

//! YOXLANILMAYANLAR
// Task1
const calculateAverage=arr=>{
    let sum=0
    arr.forEach(el=>sum+=el)
    return sum/arr.length
}
console.log(calculateAverage([2, 4, 6, 8]))

// Task2
const isEven=num=>(num%2==0)
console.log(isEven(4));
console.log(isEven(7));

// Task3
const celsiusToFahrenheit=C=>((C*1.8)+32)
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));

// Task4
const findMin=arr=>(Math.min(...arr))
console.log(findMin([3, 7, 2, 8, 5]))

// Task5
const removeDuplicates=array=>{
   return array.filter((el,i)=>array.indexOf(el)==i)
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))