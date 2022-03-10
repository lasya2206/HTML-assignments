//Assignment1//
const swap=(arr,index1,index2)=>{
    [arr[index1],arr[index2]]=[arr[index2],arr[index1]];
    }
    const bubbleSort=(arr)=>{
    const n=arr.length
    let isSwap;
        for( let i=n;i>0;i--){
            isSwap=true
            for(let j=0;j<i-1;j++){
                if(arr[j]<arr[j+1]){
                    swap(arr,j,j+1)
                    isSwap=false
                }
            }
            if(isSwap){
                break;
            }
        }
        return arr
    
    }

let sortinDecending=(str)=>{
    let arr=[]
    for(let i=0 ;i<str.length;i++){
       arr.push(str.charCodeAt(i))
    }
    let res=String.fromCharCode(...bubbleSort(arr))
    console.log(res)
}
sortinDecending("Lasya")
//Assignment2//
const swap1=(arr,index1,index2)=>{
    [arr[index1],arr[index2]]=[arr[index2],arr[index1]];
    }
    const bubbleSort1=(arr)=>{
    const n=arr.length
    let isSwap1;
        for( let i=n;i>0;i--){
            isSwap1=true
            for(let j=0;j<i-1;j++){
                if(arr[j]<arr[j+1]){
                    swap1(arr,j,j+1)
                    isSwap1=false
                }
            }
            if(isSwap1){
                break;
            }
        }
        return arr
    
    }

let sortinDecending1=(str)=>{
    let arr=[]
    for(let i=0 ;i<str.length;i++){
       arr.push(str.charCodeAt(i))
    }
    let res=String.fromCharCode(...bubbleSort1(arr))
    console.log(res)
}
sortinDecending1("LLLLASYA");
//Assignment3//

let power=(x,y)=>{
    if(y===0){
        return 1
    }
    return x*power(x,y-1)

}

console.log(power(2,5));
//Assignment4//
function gcd(a, b)
{
    
    if (a == 0)
    return b;
    if (b == 0)
    return a;
 
    
    if (a == b)
        return a;
 
    
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}
console.log(gcd(4,8));