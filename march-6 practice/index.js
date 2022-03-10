//Assignment1//
function reverseNum(n, str = String(n)) {
    const thisDigit = str[str.length - 1];
    const recursiveResult = str.length === 1 ? '' : reverseNum(str.slice(0, str.length - 1));
    return Number(thisDigit + recursiveResult);
  }

console.log(  reverseNum(5567443413));
//Assignment2//
function findMean(A, N)
    {
        if (N == 1)
            return A[N - 1];
        else
            return ((findMean(A, N - 1) * (N - 1) + A[N - 1]) / N);
    }
let arr=[1,3,4,5234,342,1]
   console.log(findMean([1,3,4,5234,342,1],arr.length) );
   //Assignment3//
   
let binarySearch=(arr, low, high, target)=>{
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
 
       
        if (arr[mid] == target)
            return mid;
 
        
        if (arr[mid] > target)
            return binarySearch(arr, low, mid - 1, target);
 
        
        return binarySearch(arr, mid + 1, high, target);
    }
 
    return -1;
}

