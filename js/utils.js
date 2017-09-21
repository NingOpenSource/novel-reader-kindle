var renderNumber=function(num){
    if(num<10000){
        return num;
    }else{
        return Math.ceil(num/10000.0*10)/10.0+"万";
    }
}
/**
 * 
 * @param {String} name
 */
function getQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   var r = window.location.search.substr(1).match(reg);
   if (r!=null) return unescape(r[2]); return null;
}