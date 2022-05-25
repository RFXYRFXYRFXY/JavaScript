var romanToInt = function(s) {
    var array=s.slice();
    var sum=0,num=0;
    for(let i=array.length;i>=0;i--){
        switch(s[i]){
            case 'I':{
                if(num==5||num==10){
                sum-=1;
                }else
                sum+=1;
                num=1;
                break;
            }
            case 'V':{           
                sum+=5;
                num=5;     
                break;
            }
            case 'X':{
                if(num==50||num==100)
                sum-=10;
                else
                sum+=10;
                num=10;
                break;
            }
            case 'L':{
                sum+=50;
                num=50;
                break;
            }
            case 'C':{
                if(num==500||num==1000)
                sum-=100;
                else
                sum+=100;
                num=100;
                break;
            }
            case 'D':{
                sum+=500;
                num=500;
                break;
            }
            case 'M':{
                
                sum+=1000;
                num=1000;
                break;
            }
        }
    }
    return sum;
};
