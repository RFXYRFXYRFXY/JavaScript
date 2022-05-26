var singleNumber = function(nums) {
    let arr=nums
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++)
        if(arr[i]==arr[j]){
            arr[i]=undefined
            arr[j]=undefined
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]==undefined){
            arr.splice(i,1)
            i=i-1
        }

    }
    console.log(arr)
    return arr
};
