let TwoCode = function(nums,target){
    for(let i=0 ; i<nums.length ; i++){
        for(let j=i+1 ; j<nums.length ; j++){
            if(target == nums[i] + nums[j]){
                return [i,j];
            }
        }
    }




var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const arr = [];
  
    for (let val of set1) {
      if (set2.has(val)) {
        arr.push(val)
      }
    }
  
    return arr;
  };
  num1 = [1,2,3,4];
  num2 = [5,6,7,8];
  console.log(num1,num2);