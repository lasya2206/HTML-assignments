var sortColors = function(nums) {
    var counts = [0, 0, 0];
 var len = nums.length;
 for (var i = 0; i < len; i++) {
   counts[nums[i]]++;
 }
 for (var j = 0; j < len; j++) {
   nums[j] = j < counts[0] ? 0 : (j < counts[0] + counts[1] ? 1 : 2);
 }
};
Array = [2,0,2,1,1,0];


console.log(Array);
var sortArray = function(nums) {
    var n = nums.length;
   for (var i = 0; i <n-1; i++) {
       var min = i;
       for (var j = i+1; j < n; j++ ) {
           if (nums[j] < nums[min]) {
               min = j;    
           }
       }
       var temp = nums[i];
       nums[i] = nums[min];
       nums[min] = temp;
   }
   return nums;
};

