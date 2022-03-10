//Assignment1//
let meanAndMedian=(arr)=>{
    arr.sort((num1,num2)=>{
        return num1-num2;
    })
    let median;
    if(arr.length%2!==0){
        median=arr[arr.length/2]
    }else{
        median=(arr[Math.floor((arr.length-1)/2)] + arr[arr.length / 2]) / 2
    }

    let sum=arr.reduce((acc,curr)=>{return acc+=curr},0)

    let mean=sum/(arr.length)

    return({median,mean})

}

console.log(meanAndMedian([1, 3, 4, 2, 6, 5, 8, 7]));
//Assignment2//
let relativeSorting1=(arr,rel)=>{
    let obj={};
    arr.forEach(ele=>{
        obj[ele]=obj[ele]+1||1
    })
    let result=[];

    rel.forEach((reli)=>{
        if(obj.hasOwnProperty(reli)){
            for(let i=0;i<obj[reli];i++){
                result.push(reli)
            }
            delete obj[reli]
        }
    })
    
    for(let i in obj){
        for(let x=1;x<=obj[i];x++){
            result.push(+i)
        }
    }
    console.log(result)
    
}

relativeSorting1([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]);
