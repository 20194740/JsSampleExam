function difBetweenDate(date1,date2){
// To calculate the time difference of two dates in milliesecond
var Difference_In_Time = date2.getTime() - date1.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
 return Difference_In_Days;

}



var date1 = new Date(prompt('enter first date (07/30/2022)'));
var date2 = new Date(prompt('enter second date (07/30/2022)'));
  console.log(`Difference In Days= ${difBetweenDate(date1,date2)}`);