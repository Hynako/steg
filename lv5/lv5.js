function time(num) {
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function showTime() {
   var nowTime = new Date();
   var nowHour = time( nowTime.getHours() );
   var nowMin  = time( nowTime.getMinutes() );
   var nowSec  = time( nowTime.getSeconds() );
   var msg =  nowHour + "時" + nowMin + "分" + nowSec + "秒";
   document.getElementById("time").innerHTML = msg;
}
setInterval('showTime()',1000);
setInterval(clock, 1000);
