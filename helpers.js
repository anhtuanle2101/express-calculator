function mean(nums){
    let sum=0;
    for (let num of nums){
        sum+=num;
    }
    return sum/nums.length;
}

function median(nums){
    let sorted = nums.sort();
    if(sorted.length % 2 == 0){
        return (sorted[Math.floor((nums.length-1)/2)]+sorted[nums.length/2])/2;
    }else{
        return sorted[Math.floor(nums.length/2)];
    }
}

function mode(nums){
    let sorted = nums.sort();
    let max = 0;
    let count=1;
    let result=nums[0];
    for (let i=0; i< nums.length-1;i++){
        if (sorted[i] === sorted[i+1]){
            count++;
            if (count>max){
                max=count;
                result=sorted[i];
            }
        }else{
            count=1;
        }
    }
    return result;
}

module.exports={mean, median, mode};