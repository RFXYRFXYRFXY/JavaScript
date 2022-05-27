var strStr = function(haystack, needle) {
    
    const m=haystack.length,n=needle.length

    
    for(let i=0;i+n<=m;i++){
        let flag=true
        for(let j=0;j<n;j++){
            if(haystack[i+j]!=needle[j]){
                flag=false
                break
            }
        }
        if(flag){
            return i
        }
    }
    return -1
};
