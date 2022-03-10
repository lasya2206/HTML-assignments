//Assignment1//
let max=(array)=> {
    if (array.length === 1) {  // Step1: set up your base case
        return array[0]
   } else {  
       return Math.max(array.shift(), max(array)) // Step2: rec case
   }
  }

  let min=(array)=> {
    if (array.length === 1) {  // Step1: set up your base case
        return array[0]
   } else {  
       return Math.min(array.shift(), min(array)) // Step2: rec case
   }
  }  

console.log(max([1,-1,0,2,-2,3,-3,4,-4]))
console.log(min([1,-1,0,2,-2,3,-3,4,-4]))
//Assignment2//
let n=5;
let fibSeriesUsingRecursion=(n)=>{
    if(n<=1){
        return n;
    }else{
        return fibSeriesUsingRecursion(n-1) + fibSeriesUsingRecursion(n-2)
    }
}

for(let i=1;i<=n;i++){
    console.log(fibSeriesUsingRecursion(i))
}
//Assignment3//
let recurEven=(n)=>{
    if(n<0){
        return
    }else{
        if(n%2===0){
            console.log(n)
            recurEven(n-2)
        }else{
            recurEven(n-1)
        }
    }
}

recurEven(76);
//Assignment4//
let factorial=(n)=> {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }

console.log(factorial(5));
//Assignment5//
let PalChecker=( str , start , end)=>{
    // If there is only one character
    if (start == end)
        return true;

    
    if ((str.charAt(start)) != (str.charAt(end)))
        return false;

    
    if (start < end + 1)
        return PalChecker(str, start + 1, end - 1);

    return true;
}
let str="geeg"
console.log(PalChecker(str,0,str.length-1));