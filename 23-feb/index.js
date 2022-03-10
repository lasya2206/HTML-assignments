//Assignment1//
console.log("jjj")

let binarySearch=(arr,target,lowerBound,UpperBound)=>{
    let low=0
    let high=arr.length-1
    
    let result=-1
    while(low<=high){
        let mid=Math.floor(low + (high-low)/2)
     
        if(target===arr[mid]){
            result=mid
           
           if(lowerBound!=UpperBound){
            if(lowerBound==true){
                high=mid-1
                
            }
            if(UpperBound==true){
                low=mid+1
            }
           }

           
        }else if(target>arr[mid]){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return result

}

let frequencyCalculator=(arr,target)=>{

    let lowerIndex=binarySearch(arr,target,true,false)
    let upperIndex=binarySearch(arr,target,false,true)
    
    return (upperIndex-lowerIndex)+1
}

let frequency=frequencyCalculator([1,1,2,2,4,5,5,6,6,6,6,9,10,11],11)

console.log(frequency);
//Assignment2//
let binarySearch1=(arr,target)=>{

    let low=0;
    let high=arr.length-1

    while(low<=high){
        let mid=Math.floor(low+(high-low)/2)
        if(target.charCodeAt(0)===arr[mid].charCodeAt(0)){
            return mid
        }else if(target.charCodeAt(0)>arr[mid].charCodeAt(0)){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return -1
}

console.log(binarySearch(['a','b','d','e','f','g','h','i','x','z'],"g"));
//Assignment3//
let smallestMissing=(arr)=>{
    let low=0;
    let high=arr.length-1;

    while(low<=high){
    let mid=Math.floor(low + (high-low)/2)
        
        if(arr[mid]===mid){

            low=mid+1

        }else{
            high=mid-1
        }

    }
    return low
}

console.log(smallestMissing([0, 1, 2, 3, 4, 5, 6]));
//Assignment4//
let foundInsert=(arr,target)=>{

    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid =Math.floor(low+(high-low)/2)
        if(arr[mid]===target){
            return mid
        }else if(target>arr[mid]){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return low
}

console.log(foundInsert([1,3,5,6],2));