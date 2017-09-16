var renderNumber=(num)=>{
    if(num<10000){
        return num;
    }else{
        return Math.ceil(num/10000.0*10)/10.0+"万";
    }
}