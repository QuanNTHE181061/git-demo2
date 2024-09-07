/**
 * Các hàm built in
 *  Alert
 * Console
 * Confirm
 * Prompt
 * Set timeout
 * Set interval
 */
var x='AAAAA'
console.log('Đây là console') ; //In ra trong console
console.log(x);
//console.warn();
//console.error();
//confirm('Xac nhan ban du tuoi');
//prompt('Bao nhieu tuoi');
/*
setTimeout(function()
{
          alert('Sau 1 giay')
}
,2000) 
*/
setInterval(function() {
    console.log('Day la log'+Math.random())
},1000 )
