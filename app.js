//p#########CHAPTER-21-TO-25################################
//PROGRAM-1
var firstName = prompt('enter-first-name')
var lastName = prompt('enter-second-name');;
fullName = firstName +' '+ ' ' +lastName
alert('WELCOME MR '+  fullName)

//PROGRAM-2

var fav_mobile_model = prompt('enter-your-favourite-mobile-model')
var n = fav_mobile_model.length;
alert('My Favourite Phone Is :'+ ' '+ fav_mobile_model)
alert('Length Of String Is :'+ ' ' + n)


//PROGRAM-3
var str = "pakistani.";
var n = str.indexOf("n");
alert('String :'+ ' '+ str)
alert('Index Of n Is :'+ ' ' + n)


//PROGRAM-4

var str = "Hello World";
var n = str.lastIndexOf("l");
alert('String :'+ ' '+ str)
alert('Last Index Of l Is :'+ ' ' + n)


//PROGRAM-5

var str = "Pakistani";
var n = str.includes("i");
alert('String :'+ ' '+ str)
alert('Character At Index 3 Is :'+ ' ' + n)


//PROGRAM-6

var firstName = prompt('enter-first-name')
var lastName = prompt('enter-second-name');;
fullName = firstName.concat(lastName)
alert('WELCOME MR '+  ' '+ fullName)


//PROGRAM-7

var city = 'Hyderabad'
var replaced_city = city. replace("Hyder", "Islam")
alert(city)
alert('After Replacement : '+ ' ' + replaced_city)

//PROGRAM-8

var message = 'Ali and Sami are best friends. They play cricket and football together.'
var replaced_and_with_or = message. split("and").join("or")
alert(message)
alert('After Replacement : '+ ' ' + replaced_and_with_or)


//PROGRAM-9

var str_value="472"
var value_2=parseInt(str_value)
alert("Value:" +' '+ str_value)
alert("Type:" +' '+ typeof str_value)
alert("Value:" +' '+ value_2)
alert("Type:" +' '+ typeof value_2)


//PROGRAM-10

var Input_message = prompt('Please-give-any-input')
var converted_message= Input_message.toUpperCase()
alert('User Input :'+ ' '+ Input_message)
alert('Upper Case :'+ ' '+ converted_message)

//PROGRAM-11


//to-be-completed-later-on-it-is-n0t-solveable-right-noww









//PROGRAM-12


const num = 35.36;
const without = num.toString().replace(".", ""); 
alert('Number :'+ ' '+ num)
alert('Result :'+ ' '+ without)


//PROGRAM-13

var Input_message = prompt('Please-give-any-user-name')
var at_the_rate=parseInt(Input_message.includes("@"))
var dot=parseInt(Input_message.includes("."))
var comma=parseInt(Input_message.includes(","))
var exclamation=parseInt(Input_message.includes("!"))
if (at_the_rate===64)
{
    alert('Enter Valid UserName' )
}
else if (dot===46)
{
    alert('Enter Valid UserName' )
}
else if (comma===44)
{
    alert('Enter Valid UserName' )
}
else if (exclamation===33)
{
    alert('Enter Valid UserName' )
}
else
{
    alert('You Have Entered Valid UserName' )
}



//PR0GRAM-14

 A = ["cake","apple pie","cookie","chips","patties"]
 var message=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
 var single_case=message.toLowerCase()
 if (single_case==A[0])
 {
    alert('cake is available at index 0 in our bakery' )
 }
 else if (single_case==A[1])
{
    alert('apple pie is available at index 1 in our bakery' )
} else if (single_case==A[2])
{
    alert('cookie is available at index 2 in our bakery' )
}

else if (single_case==A[3])
{
    alert('chips is available at index 3 in our bakery' )
}
else if (single_case==A[4])
{
    alert('patties is available at index 4 in our bakery' )
}
 else{
    alert('we are sorry, pastry is not avaible in our bakery' )
 }


 //PRPGRAM-15

 //to-be-solved-later-after-code-evaluation





 //PROGRAM-16

 var University="University of Karachi"
var splitted_array = University.split(' '); // empty string separator
alert( splitted_array )


//PROGRAM-17

var message=prompt("PLEASE-GIVE-ANY-INPUT")
var last_index=message.charAt((message.length-1))
alert('User Input :' + ' '+ message)
alert('Last Character Of Input Is :' + ' '+ last_index)



//PROGRAM-18

//var str="The quick brown fox jumps over the lazy dog"
//var count_the=str.count("the")
//alert('Text :' + ' '+ str)
//alert('There are'+ ' ' + count_the + ' '+ 'occurance(s)of word '+ 'the')

//prompt('give-testing-input')
//alert("testing-line")


//######################################CHAPTER-26-30########################


//PROGRAM-1

var positive_num=prompt('please-input-positive-integer-of-your-choice')
alert('Number  :'+ ' '+ positive_num)
alert('Round Off Value  :'+ ' '+ (Math.trunc(positive_num)))
alert('Floor Value :'+ ' '+ (Math.floor(positive_num)))
/alert('Ceil Value  :'+ ' '+ (Math.ceil(positive_num)))


//PROGRAM-2


var negative_num=prompt('please-input-negative-integer-of-your-choice')
alert('Number  :'+ ' '+ negative_num)
alert('Round Off Value  :'+ ' '+ (Math.round(negative_num)))
alert('Floor Value :'+ ' '+ (Math.floor(negative_num)))
alert('Ceil Value  :'+ ' '+ (Math.ceil(negative_num)))


//PROGRAM-3

var absolute_num=prompt('please-input-negative-or-positive-value-of-your-choice')
alert('Absolute Value Of '+ ' ' + absolute_num +' is'+ ' '+(Math.abs(absolute_num)))


//PROGRAM-4

var random_num1=Math.floor((Math.random() * 10) + 1)
var random_num2=Math.floor((Math.random() * 10) + 2)
alert('Random Dice Value is :'+ ' '+ random_num1)
alert('Random Dice Value is :'+ ' '+ random_num2)


//PROGRAM-5

//var random_num1=Math.floor((Math.random() * 10) + 1)
//var random_num2=Math.floor((Math.random() * 10) + 2)
//var head=Math.random().toString().substr(2, 5).toString()

//alert(head)

//Math.ceil(Math.random()*10000)
//Math.random().toString().substr(2, 5)
//Math.random().toString(2).substr(2, 5)
//Math.random().toString(5).substr(2, 5)
//Math.random().toString(20).substr(2, 6)
//const generateRandomString = function(){
//return Math.random().toString(20).substr(2, 6)}
//const generateRandomString = function(length=6){
//return Math.random().toString(20).substr(2, length)
//const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length)

//var rand_string=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
//var rand_string=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
//var rand_string1=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
//alert( rand_string)
//alert( rand_string1)
//alert('Random Coin Value is :'+ ' '+ random_num2)

var random_num1=Math.floor((Math.random() * 10) + 1)
var random_num2=Math.floor((Math.random() * 10) + 2)
var head="Heads".toString()
var tail="Tails".toString()

alert(random_num1)
alert('Random coin value :' +' '+ head)
alert(random_num2)
alert('Random coin value :' +' '+ tail)


//PROGRAM-6


var one_to_hundred=Math.floor(Math.random() * 100);

alert('Random Number Between 1 and 100 is  :' +' '+ one_to_hundred)


//PROGRAM-7

alert('Welcome to our weight calculator App')
alert('Select option of your choice')
alert('a. 50\nb. 50kgs\nc. 50.2kgs\nd. 50.2kilograms' )
var a=prompt('a. 50  b. 50kgs  c. 50.2kgs  d. 50.2kilograms' )
if(a=='50')
{
    alert('The Weight of userr is :'+' '+a)
}
else if(a=='50kgs')
{
    alert('The Weight of userr is :'+' '+a)
}
else if(a=='50.2kgs')
{
    alert('The Weight of userr is :'+' '+a)
}
else if(a=='50.2kilograms')
{
    alert('The Weight of userr is :'+' '+a)
}
else
{
    alert('Sorry!#####You did not make the right choice , we are exiting####')
}





//PROGRAM-8
var random_num1=Math.floor((Math.random() * 10) + 1)  

var guess=prompt('Please Enter Random Number From 1to 10')
if(guess===1)
{
    alert('congratulation Your Guess is Correct')
}
else if(guess===2)
{
    alert('congratulation Your Guess is Correct')
}
else if(guess===3)
{
    alert('congratulation Your Guess is Correct')
}
else if(guess===4)
{
    alert('congratulation Your Guess is Correct')
}
else if(guess===5)
{
    alert('congratulation Your Guess is Correct')
}
else if(guess===6)
{
    alert('congratulation Your Guess is Correct')
}
else if(guess===7)
{
    alert('congratulation Your Guess is Correct')
}
else if(guess===8)
{
    alert('congratulation Your Guess is Correct')
}
else if(guess===9)
{
    alert('congratulation Your Guess is Correct')
}
else if(guess===10)
{
    alert('congratulation Your Guess is Correct')
}
else
{
    alert('Try Again!')
}


//########END-OF-CHAPTER-6##########################################

//PROGRAM-1

// var myDate = new Date()
// var myDay = myDate.getDay()

// // Array of days. 
// var weekday = ['Sunday', 'Monday', 'Tuesday', 
//     'Wednesday', 'Thursday', 'Friday', 'Saturday' 
// ]; 
// alert('Today is : ' + weekday[myDay]);
// alert('\n');

// // get hour value. 
// var hours = myDate.getHours(); 
// var ampm = hours >= 12 ? 'PM' : 'AM'; 
// hours = hours % 12; 
// hours = hours ? hours : 12; 
// var minutes = myDate.getMinutes(); 
// minutes = minutes < 10 ? '0' + minutes : minutes; 
// var myTime = hours + " " + ampm + " : " + minutes +  
//     " : " + myDate.getMilliseconds(); 
// alert('\tCurrent time is : ' + myTime)


//By default, JavaScript will use the browser's time zone and display a date as a full text string:
//Mon Jun 22 2020 20:27:09 GMT+0500 (Pakistan Standard Time)
var d = new Date();
// var day=d.getDate();
// var month=d.getMonth() + 1;
// var hours=d.getHours();
// var minutes=d.getMinutes();
// var year=d.getFullYear();
// var seconds= d.getSeconds();
// alert(day+' '+month+' '+year+' '+hours+' '+minutes+' '+seconds)
alert(d)



//PROGRAM-2
//There are 4 ways to create a new date object:
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

//SEVEN-NUMBERS-SPECIFIY-ALL-DETAILS-IN-SPECIFIED-ORDER
//YEAR-MONTH-DAY-HOUR-MINUTE-SECONDS-MILISECONDS
// var d = new Date(2018, 11, 24, 10, 33, 30, 0);
// //6 numbers specify year, month, day, hour, minute, second:
// var d = new Date(2018, 11, 24, 10, 33, 30);
// //5 numbers specify year, month, day, hour, and minute:
// var d = new Date(2018, 11, 24, 10, 33);
// //4 numbers specify year, month, day, and hour:
// var d = new Date(2018, 11, 24, 10);
// //3 numbers specify year, month, and day:
// var d = new Date(2018, 11, 24);
// //2 numbers specify year and month:
// var d = new Date(2018, 11);
//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

//return-the-number-of-the-month
var current_month = d.getMonth();
alert('Current Month  :'+' '+current_month)

//Return the name of the month (not just a number):

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
alert('Current Month  :'+' '+n)


//PROGRAM-3


var d = new Date();
var day = new Array();
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednessday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";
day[7] = "Sunday";
day[8] = "Monday";
day[9] = "Tuesday";
day[10] = "Wednessday";
day[11] = "Thursday";
day[12] = "Friday";
day[13] = "Saturday";
day[14] = "Sunday";
day[15] = "Monday";
day[6] = "Tuesday";
day[17] = "Wednessday";
day[18] = "Thursday";
day[19] = "Friday";
day[20] = "Saturday";
day[21] = "Sunday";
day[22] = "Monday";
day[23] = "Tuesday";
day[24] = "Wednessday";
day[25] = "Thursday";
day[26] = "Friday";
day[27] = "Sunday";
day[28] = "Monday";
day[29] = "Tuesday";
day[30] = "Wednessday";
day[31] = "Thursday";

var current_day = day[d.getDate()];
alert('Current Day  :'+' '+current_day)
//Extract the whole string:
// var str = "Hello world!";
// var res = str.slice(0);
//Extract parts of a string:
// var str = "Hello world!";
// var res = str.slice(0, 5)

//Extract from position 3, and to the end:

// var str = "Hello world!";
// var res = str.slice(3);

//Extract the characters from position 3 to 8:

// var str = "Hello world!";
// var res = str.slice(3, 8);

//Extract only the first character:
// var str = "Hello world!";
// var res = str.slice(0, 1);

//Extract only the last character:

// var str = "Hello world!";
// var res = str.slice(-1);


//PROGRAM-4


var d = new Date();
var day = new Array();
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednessday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";
day[7] = "Sunday";
day[8] = "Monday";
day[9] = "Tuesday";
day[10] = "Wednessday";
day[11] = "Thursday";
day[12] = "Friday";
day[13] = "Saturday";
day[14] = "Sunday";
day[15] = "Monday";
day[6] = "Tuesday";
day[17] = "Wednessday";
day[18] = "Thursday";
day[19] = "Friday";
day[20] = "Saturday";
day[21] = "Sunday";
day[22] = "Monday";
day[23] = "Tuesday";
day[24] = "Wednessday";
day[25] = "Thursday";
day[26] = "Friday";
day[27] = "Sunday";
day[28] = "Monday";
day[29] = "Tuesday";
day[30] = "Wednessday";
day[31] = "Thursday";

var current_day = day[d.getDate()];
if (current_day=='Saturday')
{
    alert('Its Fun Day')
}
else if (current_day=='Sunday')
{
    alert('Its Fun Day')
}
else
{
    alert('Its Working Day')
}


 
//PROGRAM-5


var day=d.getDate();
if (day===15)
{
    alert('First Fifteen Days Of The Month')
}
else
{
    alert('Last Fifteen Days Of The Month')
}


//PROGRAM-6


var d = new Date();
var total_miliseconds = d.getTime()
var total_minutes =  d.getUTCMinutes()
alert('Current Date :'+ ' '+ d)
alert('Elapsed Miliseconds Since Jan 1, 1970 :'+ ' '+ total_miliseconds)
alert('Elapsed Minutes Since Jan 1, 1970 :'+ ' '+ total_minutes)

//Zero time is January 01, 1970 00:00:00 UTC.




//PROGRAM-7

var am_pm=d.getHours()
if (am_pm < 12) {
    alert('Its AM')
    //alert('good morning')
//   } else if (am_pm < 18) {
//     console.log('good afternoon')
  } else {
    alert('Its PM')
    //alert('good evening')
  }




  //PROGRAM-8

//   var lastday = function(y,m){
//     return  new Date(y, m +1, 0).getDate();
//     }
// alert(lastday(2020,12))
var d = new Date(2020, 11, 31, 23, 58, 58, 0);
alert('Later Date  :'+' '+d)
























//################  CHAPTER-35-38#####################################


//PROGRAM-1


function Current_date() {
    var d = new Date();
    alert(d)
}

Current_date()



//PROGRAM-2


function greeting(fname, lname) {
    full_name=fname+'  '+lname
    alert('Welcome Mr/Mrs/Miss :'+' '+full_name)
  }
greeting('usman','awan')


//PROGRAM-3

function SUM() {
    no1=parseInt(prompt('Please-Input-Number-1'))
    no2=parseInt(prompt('Please-Input-Number-2'))
    sum=no1+no2
    return sum
  }
Return_value=SUM()
alert('Sum Of Two Numbers is :'+' '+Return_value)



//PROGRAM-4









//PROGRAM-5

function SQUARE(NO) {
    
    
    return NO*NO
  }
return_square=SQUARE(5)
alert('The Square of number is :'+'  '+return_square)





//PROGRAM-6

// function Calculator(num1, num2,operator) {
    
//     if(operator===43)
//     {
//         sum=num1+num2
//         alert('Your Calculator Sum Ans is :'+ ' '+sum)
//     }
//     else if (operator===45)
//     {
//         substract=num1-num2
//         alert('Your Calculator Substract Ans is :'+ ' '+substract)
//     }
//     else if (operator===246)
//     {
//         divide=num1/num2
//         alert('Your Calculator Divide Ans is :'+ ' '+divide)
//     }
//     else if (operator===158)
//     {
//         prod=num1*num2
//         alert('Your Calculator Multiply Ans is :'+ ' '+prod)
//     }
//     else{
//         alert('Sorry You did give the correct operator, program is exiting!')

//     }
// }

    
//PROGRAM-7








