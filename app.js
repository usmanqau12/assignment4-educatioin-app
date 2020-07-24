//CHAPTER-38-44

//PROGRAM-1
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
alert('YEAR 2012 IS LEAP YEAR :'+ leapyear(2012))
alert('YEAR 2016 IS LEAP YEAR :'+ leapyear(2016))
alert('YEAR 2020 IS LEAP YEAR :'+ leapyear(2020))
alert('YEAR 2024 IS LEAP YEAR :'+ leapyear(2024))

//PROGRAM-3

function area_triangle()
{
    var side1 = 5; 
    var side2 = 6; 
    var side3 = 7; 
    var s = (side1 + side2 + side3)/2;
    var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    alert('Area of Triangle is : ' + area);
    
}

area_triangle()

//PROGRAM-4


function avg_marks(subj1,subj2,subj3)
{
    var eng = subj1
    var math = subj2
    var phy = subj3
   
    var avg = (eng+math+phy)/3
    return avg
    //alert('AVERAGE MARKS ARE : '+ avg)
    
}

function percent_marks(subj1,subj2,subj3)
{
    // var eng1 = subj1
    // var math1 = subj2
    // var phy1 = subj3
     eng1 = subj1
     math1 = subj2
     phy1 = subj3
    var totalmarks = eng1 + math1 + phy1
    var percent = (totalmarks / 300) * 100
    return percent
   // alert('PERCENTAGE MARKS ARE :' +percent2)
}    




    alert('WELCOME FROM MAIN FUNCTON')
    var res1=avg_marks(70,80,90)
    var res2=percent_marks(70,80,90)
    alert('AVERAGE OF THREE SUBJECTS IS :'+res1 )
    alert('PERCENTAGE OF THREE SUBJECTS IS :'+res2 +'%')

    //PROGRAM-5
    
    function indx_of()
    {
        var str = "Hello world, welcome to the universe.";
    var n = str.indexOf("welcome");
    }
    alert('Index Of Welcome Is' +indx_of())

//PROGRAM-6

// function vowel_remove(){
// var strings = ["bongo drums", "guitar", "flute", "double bass", "xylophone", "piano"];

// strings = strings.map(function (string) {
//     return string.replace(/[aeiou]/g, '')
// });

// alert(strings)
// }
// vowel_remove()

function disemvowel(str) {             
    let newString = " ";                            
    for (let i = 0; i < str.length; i++)  
{           
      if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u")                                   
       {           
       newString += str[i];         
      }
    }
    return newString;   
  }
  alert(disemvowel('ajmal')) 


  //PROGRAM-7

  

//   function vowel_count(str1)
//   {
//     var vowel_list = 'aeiouAEIOU';
//     var vcount = 0;
    
//     for(var x = 0; x < str1.length ; x++)
//     {
//       if (vowel_list.indexOf(str1[x]) !== -1)
//       {
//         vcount += 1;
//       }
    
//     }
//     return vcount;
//   }
//     alert(vowel_count("The quick brown fox"));

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   alert(findOccurrences());
  
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    // Loop over every character
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      // Increase count if both characters are any of the following: aeiou
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }
    
    return count;
  }
  
  // Check if a character is any of the following: aeiou
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
  
  var found = findOccurrences();
  
  alert(found);



  //PROGRAM-8


  function Distance_convertor()
  {
    var distance=parseInt(prompt('please enter distance in km'))
    var meter=distance*1000
    var feet=distance*3280.8
    var inches=distance*39370
    var centi=distance*100000
    alert('Distance in Meters is :'+meter)
    alert('Distance in Feet is :'+feet)
    alert('Distance in Inches is :'+inches)
    alert('Distance in Centi is :'+centi)


  }
Distance_convertor()



//PROGRAM-9

function overtime()
  {
    var overtime=parseInt(prompt('please enter overtime hours'))
   if (overtime>40)
   {
       var pay=12 *overtime
       alert('Your OverTime Pay @ 12 x hour is : '+pay)
   }
   else
   {
       alert('Sorry you worked less than 40 hours')
   }
  }

  overtime()


  //pROGRAM-10

  function findNoteAndCoins(salary) {
    const notes = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const notesCount = [];
  
    let remaining = salary;
    for (const note of notes) {
      if (salary >= note) {
        notesCount.push(Math.trunc(remaining / note));
        remaining = remaining % note;
      } else {
        notesCount.push(0);
      }
    }
  
    return notesCount;
  }
  
  alert(findNoteAndCoins(2316));


//PROGRAM-11


function convertCurrency(display) {
    //get 1000 
    if (display > 1000) {
        var oneThousand = display / 1000;
        var processedOneThousand = Math.floor(oneThousand);
        alert("1000 has " + processedOneThousand + " Demonination");

        //get 500 remainder
        var oneThousandRemainder = display - (processedOneThousand * 1000);
        alert("So after 1000, " + oneThousandRemainder + " is remaining");

        //calculate 500
        if (oneThousandRemainder > 500) {
            var fiveHundred = oneThousandRemainder / 500;
            var processedFiveHundred = Math.floor(fiveHundred);
            alert("500 has " + processedFiveHundred + " Denomination");

            //get 500 remainder
            var fiveHundredRemainder = oneThousandRemainder - (processedFiveHundred * 500);
            alert("So after 500, " + fiveHundredRemainder + " is remaining");

            if (fiveHundredRemainder > 200) {
                var twoHundred = fiveHundredRemainder / 200;
                var processedTwoHundred = Math.floor(twoHundred);
                alert("200 has " + processedTwoHundred + " Denomination");

                //get 200 remainder
                var twoHundredRemainder = fiveHundredRemainder - (processedTwoHundred * 200);
                alert("So after 200, " + twoHundredRemainder + " is remaining");
            }
            if (twoHundredRemainder > 100) {
                var oneHundred = twoHundredRemainder / 100;
                var processedOneHundred = Math.floor(oneHundred);
                alert("100 has " + processedOneHundred + " Denomination");

                //get 200 remainder
                var oneHundredRemainder = twoHundredRemainder - (processedOneHundred * 100);
                alert("So after 200, " + oneHundredRemainder + " is remaining");


            }
        }

    }
}






//CLASS.16.PROGRAMS

function readMore()
{
  //var text="loremimpsumkjflasddfjlajf;lsdjfjasl;fjals;dfjsdalf;asfksajfl;asdjf;d"
  var text=document.getElementById('para').innerHTML
  //will.copy.inner.html.from.one.paragraph.and.paste,,.it.onto.another.paragraph
//getting.complete.html.inside.a.variable.for.using.data.integration.for.certain.tyhpes

var text1="<ul><li>list.a</li><li>list.b</li><li>list.c</li></ul>"

  var para =document.getElementById('para')
  para.innerHTML=text
}



// //p#########CHAPTER-21-TO-25################################
// //PROGRAM-1
// var firstName = prompt('enter-first-name')
// var lastName = prompt('enter-second-name');;
// fullName = firstName +' '+ ' ' +lastName
// alert('WELCOME MR '+  fullName)

// //PROGRAM-2

// // var fav_mobile_model = prompt('enter-your-favourite-mobile-model')
// // var n = fav_mobile_model.length;
// // alert('My Favourite Phone Is :'+ ' '+ fav_mobile_model)
// // alert('Length Of String Is :'+ ' ' + n)



// //PROGRAM-3
// var str = "pakistani.";
// var n = str.indexOf("n");
// alert('String :'+ ' '+ str)
// alert('Index Of n Is :'+ ' ' + n)


// //PROGRAM-4

// var str = "Hello World";
// var n = str.lastIndexOf("l");
// alert('String :'+ ' '+ str)
// alert('Last Index Of l Is :'+ ' ' + n)


// //PROGRAM-5

// var str = "Pakistani";
// var n = str.includes("i");
// alert('String :'+ ' '+ str)
// alert('Character At Index 3 Is :'+ ' ' + n)


// //PROGRAM-6

// var firstName = prompt('enter-first-name')
// var lastName = prompt('enter-second-name');;
// fullName = firstName.concat(lastName)
// alert('WELCOME MR '+  ' '+ fullName)


// //PROGRAM-7

// var city = 'Hyderabad'
// var replaced_city = city. replace("Hyder", "Islam")
// alert(city)
// alert('After Replacement : '+ ' ' + replaced_city)

// //PROGRAM-8

// var message = 'Ali and Sami are best friends. They play cricket and football together.'
// var replaced_and_with_or = message. split("and").join("or")
// alert(message)
// alert('After Replacement : '+ ' ' + replaced_and_with_or)


// //PROGRAM-9

// var str_value="472"
// var value_2=parseInt(str_value)
// alert("Value:" +' '+ str_value)
// alert("Type:" +' '+ typeof str_value)
// alert("Value:" +' '+ value_2)
// alert("Type:" +' '+ typeof value_2)


// //PROGRAM-10

// var Input_message = prompt('Please-give-any-input')
// var converted_message= Input_message.toUpperCase()
// alert('User Input :'+ ' '+ Input_message)
// alert('Upper Case :'+ ' '+ converted_message)

// //PROGRAM-11


// //to-be-completed-later-on-it-is-n0t-solveable-right-noww









// //PROGRAM-12


// const num = 35.36;
// const without = num.toString().replace(".", ""); 
// alert('Number :'+ ' '+ num)
// alert('Result :'+ ' '+ without)


// //PROGRAM-13

// var Input_message = prompt('Please-give-any-user-name')
// var at_the_rate=parseInt(Input_message.includes("@"))
// var dot=parseInt(Input_message.includes("."))
// var comma=parseInt(Input_message.includes(","))
// var exclamation=parseInt(Input_message.includes("!"))
// if (at_the_rate===64)
// {
//     alert('Enter Valid UserName' )
// }
// else if (dot===46)
// {
//     alert('Enter Valid UserName' )
// }
// else if (comma===44)
// {
//     alert('Enter Valid UserName' )
// }
// else if (exclamation===33)
// {
//     alert('Enter Valid UserName' )
// }
// else
// {
//     alert('You Have Entered Valid UserName' )
// }



// //PR0GRAM-14

//  A = ["cake","apple pie","cookie","chips","patties"]
//  var message=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
//  var single_case=message.toLowerCase()
//  if (single_case==A[0])
//  {
//     alert('cake is available at index 0 in our bakery' )
//  }
//  else if (single_case==A[1])
// {
//     alert('apple pie is available at index 1 in our bakery' )
// } else if (single_case==A[2])
// {
//     alert('cookie is available at index 2 in our bakery' )
// }

// else if (single_case==A[3])
// {
//     alert('chips is available at index 3 in our bakery' )
// }
// else if (single_case==A[4])
// {
//     alert('patties is available at index 4 in our bakery' )
// }
//  else{
//     alert('we are sorry, pastry is not avaible in our bakery' )
//  }


//  //PRPGRAM-15

//  //to-be-solved-later-after-code-evaluation





//  //PROGRAM-16

//  var University="University of Karachi"
// var splitted_array = University.split(' '); // empty string separator
// alert( splitted_array )


// //PROGRAM-17

// var message=prompt("PLEASE-GIVE-ANY-INPUT")
// var last_index=message.charAt((message.length-1))
// alert('User Input :' + ' '+ message)
// alert('Last Character Of Input Is :' + ' '+ last_index)



// //PROGRAM-18

// //var str="The quick brown fox jumps over the lazy dog"
// //var count_the=str.count("the")
// //alert('Text :' + ' '+ str)
// //alert('There are'+ ' ' + count_the + ' '+ 'occurance(s)of word '+ 'the')

// //prompt('give-testing-input')
// //alert("testing-line")


// //######################################CHAPTER-26-30########################


// //PROGRAM-1

// var positive_num=prompt('please-input-positive-integer-of-your-choice')
// alert('Number  :'+ ' '+ positive_num)
// alert('Round Off Value  :'+ ' '+ (Math.trunc(positive_num)))
// alert('Floor Value :'+ ' '+ (Math.floor(positive_num)))
// /alert('Ceil Value  :'+ ' '+ (Math.ceil(positive_num)))


// //PROGRAM-2


// var negative_num=prompt('please-input-negative-integer-of-your-choice')
// alert('Number  :'+ ' '+ negative_num)
// alert('Round Off Value  :'+ ' '+ (Math.round(negative_num)))
// alert('Floor Value :'+ ' '+ (Math.floor(negative_num)))
// alert('Ceil Value  :'+ ' '+ (Math.ceil(negative_num)))


// //PROGRAM-3

// var absolute_num=prompt('please-input-negative-or-positive-value-of-your-choice')
// alert('Absolute Value Of '+ ' ' + absolute_num +' is'+ ' '+(Math.abs(absolute_num)))


// //PROGRAM-4

// var random_num1=Math.floor((Math.random() * 10) + 1)
// var random_num2=Math.floor((Math.random() * 10) + 2)
// alert('Random Dice Value is :'+ ' '+ random_num1)
// alert('Random Dice Value is :'+ ' '+ random_num2)


// //PROGRAM-5

// //var random_num1=Math.floor((Math.random() * 10) + 1)
// //var random_num2=Math.floor((Math.random() * 10) + 2)
// //var head=Math.random().toString().substr(2, 5).toString()

// //alert(head)

// //Math.ceil(Math.random()*10000)
// //Math.random().toString().substr(2, 5)
// //Math.random().toString(2).substr(2, 5)
// //Math.random().toString(5).substr(2, 5)
// //Math.random().toString(20).substr(2, 6)
// //const generateRandomString = function(){
// //return Math.random().toString(20).substr(2, 6)}
// //const generateRandomString = function(length=6){
// //return Math.random().toString(20).substr(2, length)
// //const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length)

// //var rand_string=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
// //var rand_string=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
// //var rand_string1=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
// //alert( rand_string)
// //alert( rand_string1)
// //alert('Random Coin Value is :'+ ' '+ random_num2)

// var random_num1=Math.floor((Math.random() * 10) + 1)
// var random_num2=Math.floor((Math.random() * 10) + 2)
// var head="Heads".toString()
// var tail="Tails".toString()

// alert(random_num1)
// alert('Random coin value :' +' '+ head)
// alert(random_num2)
// alert('Random coin value :' +' '+ tail)


// //PROGRAM-6


// var one_to_hundred=Math.floor(Math.random() * 100);

// alert('Random Number Between 1 and 100 is  :' +' '+ one_to_hundred)


// //PROGRAM-7

// alert('Welcome to our weight calculator App')
// alert('Select option of your choice')
// alert('a. 50\nb. 50kgs\nc. 50.2kgs\nd. 50.2kilograms' )
// var a=prompt('a. 50  b. 50kgs  c. 50.2kgs  d. 50.2kilograms' )
// if(a=='50')
// {
//     alert('The Weight of userr is :'+' '+a)
// }
// else if(a=='50kgs')
// {
//     alert('The Weight of userr is :'+' '+a)
// }
// else if(a=='50.2kgs')
// {
//     alert('The Weight of userr is :'+' '+a)
// }
// else if(a=='50.2kilograms')
// {
//     alert('The Weight of userr is :'+' '+a)
// }
// else
// {
//     alert('Sorry!#####You did not make the right choice , we are exiting####')
// }





// //PROGRAM-8
// var random_num1=Math.floor((Math.random() * 10) + 1)  

// var guess=prompt('Please Enter Random Number From 1to 10')
// if(guess===1)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else if(guess===2)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else if(guess===3)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else if(guess===4)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else if(guess===5)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else if(guess===6)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else if(guess===7)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else if(guess===8)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else if(guess===9)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else if(guess===10)
// {
//     alert('congratulation Your Guess is Correct')
// }
// else
// {
//     alert('Try Again!')
// }


// //########END-OF-CHAPTER-6##########################################

// //PROGRAM-1

// // var myDate = new Date()
// // var myDay = myDate.getDay()

// // // Array of days. 
// // var weekday = ['Sunday', 'Monday', 'Tuesday', 
// //     'Wednesday', 'Thursday', 'Friday', 'Saturday' 
// // ]; 
// // alert('Today is : ' + weekday[myDay]);
// // alert('\n');

// // // get hour value. 
// // var hours = myDate.getHours(); 
// // var ampm = hours >= 12 ? 'PM' : 'AM'; 
// // hours = hours % 12; 
// // hours = hours ? hours : 12; 
// // var minutes = myDate.getMinutes(); 
// // minutes = minutes < 10 ? '0' + minutes : minutes; 
// // var myTime = hours + " " + ampm + " : " + minutes +  
// //     " : " + myDate.getMilliseconds(); 
// // alert('\tCurrent time is : ' + myTime)


// //By default, JavaScript will use the browser's time zone and display a date as a full text string:
// //Mon Jun 22 2020 20:27:09 GMT+0500 (Pakistan Standard Time)
// var d = new Date();
// // var day=d.getDate();
// // var month=d.getMonth() + 1;
// // var hours=d.getHours();
// // var minutes=d.getMinutes();
// // var year=d.getFullYear();
// // var seconds= d.getSeconds();
// // alert(day+' '+month+' '+year+' '+hours+' '+minutes+' '+seconds)
// alert(d)



// //PROGRAM-2
// //There are 4 ways to create a new date object:
// // new Date()
// // new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // new Date(milliseconds)
// // new Date(date string)

// //SEVEN-NUMBERS-SPECIFIY-ALL-DETAILS-IN-SPECIFIED-ORDER
// //YEAR-MONTH-DAY-HOUR-MINUTE-SECONDS-MILISECONDS
// // var d = new Date(2018, 11, 24, 10, 33, 30, 0);
// // //6 numbers specify year, month, day, hour, minute, second:
// // var d = new Date(2018, 11, 24, 10, 33, 30);
// // //5 numbers specify year, month, day, hour, and minute:
// // var d = new Date(2018, 11, 24, 10, 33);
// // //4 numbers specify year, month, day, and hour:
// // var d = new Date(2018, 11, 24, 10);
// // //3 numbers specify year, month, and day:
// // var d = new Date(2018, 11, 24);
// // //2 numbers specify year and month:
// // var d = new Date(2018, 11);
// //You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

// //return-the-number-of-the-month
// var current_month = d.getMonth();
// alert('Current Month  :'+' '+current_month)

// //Return the name of the month (not just a number):

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// alert('Current Month  :'+' '+n)


// //PROGRAM-3


// var d = new Date();
// var day = new Array();
// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednessday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "Saturday";
// day[7] = "Sunday";
// day[8] = "Monday";
// day[9] = "Tuesday";
// day[10] = "Wednessday";
// day[11] = "Thursday";
// day[12] = "Friday";
// day[13] = "Saturday";
// day[14] = "Sunday";
// day[15] = "Monday";
// day[6] = "Tuesday";
// day[17] = "Wednessday";
// day[18] = "Thursday";
// day[19] = "Friday";
// day[20] = "Saturday";
// day[21] = "Sunday";
// day[22] = "Monday";
// day[23] = "Tuesday";
// day[24] = "Wednessday";
// day[25] = "Thursday";
// day[26] = "Friday";
// day[27] = "Sunday";
// day[28] = "Monday";
// day[29] = "Tuesday";
// day[30] = "Wednessday";
// day[31] = "Thursday";

// var current_day = day[d.getDate()];
// alert('Current Day  :'+' '+current_day)
// //Extract the whole string:
// // var str = "Hello world!";
// // var res = str.slice(0);
// //Extract parts of a string:
// // var str = "Hello world!";
// // var res = str.slice(0, 5)

// //Extract from position 3, and to the end:

// // var str = "Hello world!";
// // var res = str.slice(3);

// //Extract the characters from position 3 to 8:

// // var str = "Hello world!";
// // var res = str.slice(3, 8);

// //Extract only the first character:
// // var str = "Hello world!";
// // var res = str.slice(0, 1);

// //Extract only the last character:

// // var str = "Hello world!";
// // var res = str.slice(-1);


// //PROGRAM-4


// var d = new Date();
// var day = new Array();
// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednessday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "Saturday";
// day[7] = "Sunday";
// day[8] = "Monday";
// day[9] = "Tuesday";
// day[10] = "Wednessday";
// day[11] = "Thursday";
// day[12] = "Friday";
// day[13] = "Saturday";
// day[14] = "Sunday";
// day[15] = "Monday";
// day[6] = "Tuesday";
// day[17] = "Wednessday";
// day[18] = "Thursday";
// day[19] = "Friday";
// day[20] = "Saturday";
// day[21] = "Sunday";
// day[22] = "Monday";
// day[23] = "Tuesday";
// day[24] = "Wednessday";
// day[25] = "Thursday";
// day[26] = "Friday";
// day[27] = "Sunday";
// day[28] = "Monday";
// day[29] = "Tuesday";
// day[30] = "Wednessday";
// day[31] = "Thursday";

// var current_day = day[d.getDate()];
// if (current_day=='Saturday')
// {
//     alert('Its Fun Day')
// }
// else if (current_day=='Sunday')
// {
//     alert('Its Fun Day')
// }
// else
// {
//     alert('Its Working Day')
// }


 
// //PROGRAM-5


// var day=d.getDate();
// if (day===15)
// {
//     alert('First Fifteen Days Of The Month')
// }
// else
// {
//     alert('Last Fifteen Days Of The Month')
// }


// //PROGRAM-6


// var d = new Date();
// var total_miliseconds = d.getTime()
// var total_minutes =  d.getUTCMinutes()
// alert('Current Date :'+ ' '+ d)
// alert('Elapsed Miliseconds Since Jan 1, 1970 :'+ ' '+ total_miliseconds)
// alert('Elapsed Minutes Since Jan 1, 1970 :'+ ' '+ total_minutes)

// //Zero time is January 01, 1970 00:00:00 UTC.




// //PROGRAM-7

// var am_pm=d.getHours()
// if (am_pm < 12) {
//     alert('Its AM')
//     //alert('good morning')
// //   } else if (am_pm < 18) {
// //     console.log('good afternoon')
//   } else {
//     alert('Its PM')
//     //alert('good evening')
//   }




//   //PROGRAM-8

// //   var lastday = function(y,m){
// //     return  new Date(y, m +1, 0).getDate();
// //     }
// // alert(lastday(2020,12))
// var d = new Date(2020, 11, 31, 23, 58, 58, 0);
// alert('Later Date  :'+' '+d)







// //PROGRAM-14

// //function K_electric(cust_name,cur_month,no_units,charge_per_unit,net_amount,late_payment,gorss_amount)
// // function K_electric()

// // {
// // //A = ["cake","apple pie","cookie","chips","patties"]

// //  alert('Welcome to k_Electric.What help do you want sir/madam?')
// //  alert('\na. Customer Name\nb. Current Month\nc. Number of units\nd. Charges per unit\ne. Net Amount Payable (within Due Date)\nf. Late Payment Surcharge\ng. Gross Amount Payable (after Due Date)')
// // var cust_name=(prompt('enter-your-name'))
// // var current_month=(prompt('enter-month-name'))
// // var no_of_units=parseInt(prompt('enter-no-of-units'))
// // var charge_per_unit=16
// // var net_amount_payable=no_of_units*charge_per_unit
// // var late_payment_surcharge=350
// // var gross_amount_payable=net_amount_payable+late_payment_surcharge
// // return [cust_name,current_month,no_of_units,charge_per_unit,net_amount_payable,gross_amount_payable]
// // }

// // [cust_name,cur_month,no_of_units,charge_per_unit,net_amount_payable,gross_amount_payable]=K_electric()
// // alert('\nCustomer Name; '+' '+cust_name+'\nMonth; '+' '+current_month+' '+'\nNumber Of Units'+' '+'\nCharge per Unit :'+' '+charge_per_unit+' '+'\nNet Amount Payable (Within Due Date)' +' '+net_amount_payabl+' '+'\nGross Amount Payable (After Due Date)' +' '+gross_amount_payable)




 
 
//  //var single_case=message.toLowerCase()
// //  if (single_case==A[0])
// //  {
// //     alert('cake is available at index 0 in our bakery' )
// //  }
// //  else if (single_case==A[1])
// // {
// //     alert('apple pie is available at index 1 in our bakery' )
// // } else if (single_case==A[2])
// // {
// //     alert('cookie is available at index 2 in our bakery' )
// // }

// // else if (single_case==A[3])
// // {
// //     alert('chips is available at index 3 in our bakery' )
// // }
// // else if (single_case==A[4])
// // {
// //     alert('patties is available at index 4 in our bakery' )
// // }
// //  else{
// //     alert('we are sorry, pastry is not avaible in our bakery' )
// //  }

















// //################  CHAPTER-35-38#####################################


// //PROGRAM-1


// function Current_date() {
//     var d = new Date();
//     alert(d)
// }

// Current_date()



// //PROGRAM-2


// function greeting(fname, lname) {
//     full_name=fname+'  '+lname
//     alert('Welcome Mr/Mrs/Miss :'+' '+full_name)
//   }
// greeting('usman','awan')


// //PROGRAM-3

// function SUM() {
//     no1=parseInt(prompt('Please-Input-Number-1'))
//     no2=parseInt(prompt('Please-Input-Number-2'))
//     sum=no1+no2
//     return sum
//   }
// Return_value=SUM()
// alert('Sum Of Two Numbers is :'+' '+Return_value)



// //PROGRAM-4




// // function Calc(num1, num2,operator) {
    
// //     // if(operator===43)
// //     if(operator=='+')
// //     {
// //         sum=num1+num2
// //         return sum
// //     }
// //     // else if (operator===45)
// //     else if (operator=='-')
// //     {
// //         substract=num1-num2
// //         //alert('Your Calculator Substract Ans is :'+ ' '+substract)
// //         return substract
// //     }
// //     // else if (operator===246)
// //     else if (operator=='/')
// //     {
// //         divide=num1/num2
// //         // alert('Your Calculator Divide Ans is :'+ ' '+divide)
// //         return divide
// //     }
// //     // else if (operator===158)
// //     else if (operator=='*')
// //     {
// //         prod=num1*num2
// //         // alert('Your Calculator Multiply Ans is :'+ ' '+prod)
// //         return prod
// //     }
// //     else{
// //         alert('Sorry You did give the correct operator, program is exiting!')

// //     }
// // }


// // result=Calc(2,3,'+')
// // alert(result)




// function calc(par1, par2, par3) {
//     var number1 = par1;
//     var operator;
//     var number2;
//     if (typeof par2 === 'string') {
//       operator = par2;
//     } else {
//       number2 = par2;
//       operator = par3;
//     }
//     if (typeof operator === "undefined") {
//       return "wrong data provided"
//     } else {
//       if (operator == "+") {
//         return number1 + (number2 || 0);
//       } else if (operator == "-") {
//         return number1 - (number2 || 0);
//       } else if (operator == "*") {
//         return number1 * (typeof number2 === 'undefined' ? 1 : 0);
//       } else if (operator == "/") {
//         return number1 / (typeof number2 === 'undefined' ? 1 : 0);
//       }
//     }
//   }


// alert(calc(50, '+'));
// alert(calc(50, '*'));
// alert(calc(50, 20, '+'));
// alert(calc(50, undefined, '*'));
// alert(calc(50, 10));





// //PROGRAM-5

// function SQUARE(NO) {
    
    
//     return NO*NO
//   }
// return_square=SQUARE(5)
// alert('The Square of number is :'+'  '+return_square)





// //PROGRAM-6


// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// alert(factorial(3))



// //PROGRAM-7









// //PROGRAM-8

// // function pythagorean(sideA, sideB){
// //     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
// //   }
  
// //   alert(pythagorean(4, 3))


// // function Calculate_hypo(base,perp,hypo) 
// //     {
        
        
        
// //         calculate_square()
// //         {
// //             base=base*base
// //             perp=perp*perp
// //             hypo=hypo*hypo
            
// //             return [base,perp,hypo]

// //         }
// //         [base,perp,hypo]=calculate_square()
// //         hypo=base+perp
// //         alert('Hypotaneous of Triangle  is :'+' '+hypo)
// //     }
// // Calculate_hypo(1,2,3)



// //PROGRAM-9

// function Calculate_Area(width,height) 
// {

//     var Area=width*height
//     return Area
// }
// result=Calculate_Area(1,2)
// alert('Area Of Rectangle is :'+'  '+result)


// function Calculate_Area1(width=2,height=2) 
// {
//     var Area=width*height
//     return Area
    
// }
// result1=Calculate_Area1()
// alert('Area Of Rectangle is :'+'  '+result1)



// //PROGRAM-10


// // function isPalindrome(str) {
// //     str = str.toLowerCase();
// //     let len = str.length - 1;
// //     for (let i = 0; i < str.length; i++) {
// //         if (str[i] != str[len - i]) {
// //             return false;
// //         }
// //         if (i == len - i) return true;
// //     }
// //     return true;
// // }
// // console.log(isPalindrome('madam')); // true
// // console.log(isPalindrome('Step on no pets')); // true
// // console.log(isPalindrome('hello')); // false


// function paliCheck(str) {

//     // removes spaces in the string 
//     let str1 = str.replace(/\s/g, '');

//     // reverses string 
//     let str2 = str1.split('').reverse().join('');

//     // compares original and reversed string
//    // let result = str1 == str2 ? console.log(str + ' is a palindrome') : console.log(str + ' is not a palindrome')
//    if(str1==str2) 
//    {
//        alert(str + ' is a palindrome')
//    }
//    else
//    {
//     alert(str + ' is a not palindrome')
//    }
// }

// paliCheck("madam");
// paliCheck("airplane");
// paliCheck("nurses run");
// paliCheck("mom");
// paliCheck("race car");



// // function checkPal(word){
// //     if (typeof word === "string")
// //       return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
// //     else {
// //     return "Please enter a string."}
// //   }
  
// //   alert(checkPal("Racecar"));    
// //   /* true */
// //   alert(checkPal("racecar"));     
// //   /* true */
// //   alert(checkPal("race"));          
// //   /* false*/
// //   alert(checkPal(12345));         
// //   /* Please enter a string.*/

// //   var i = prompt("give the number");
// //   function palidrome(i)
// //   {
// //   if(i.split('').reverse().join("").toLowerCase()==i.toLowerCase())
// //   {
// //   console.log(i.split('').reverse().join("").toLowerCase());
// //   return true;
  
// //   }
// //   else
// //   {
// //   console.log(i.split('').reverse().join("").toLowerCase());
// //   return false;
// //   }
// //   }
  
// //   alert(palidrome(i));

  

// // function isPalindrome(word) {
// //     var unified = word.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
// //     var reversedString = unified.split("").reverse().join("");
// //     if(unified === reversedString) {
// //     alert(word + " is a palindrome")
// //     } else {
// //       alert(word + " is not a palindrome")
// //     }
// //   }
  
// //   isPalindrome("madam")



// // function j(str) {
// //     if(str.length%2===0){
// //    var c1=str.substring(0,(str.length/2))
// //    var c2=str.substring(str.length/2,str.length)
// //    alert(c1)// to check if the string have split properly(only for paranoid programmers :-P)
// //    alert(c2)
// //    }
// //     c2=c2.split("").reverse().join("")
// //     if(c1===c2){
// //       alert("palindrome")
// //     }
// //     else {
// //       alert("not a palindrome")
// //     }
       
// //   }
// //     j('abccba')



// // function wordsUpper(str) {
// //     var arrStr = str.split(' ');
// //     var strUp='';
// //     for (var i = 0; i < arrStr.length; i++) {
// //     var tmp = arrStr[i];
// //     var up = tmp.replace(tmp.slice(0,1),tmp.slice(0,1).toUpperCase());
// //     strUp+= up+" ";
// //     }
// //     alert(strUp);
// // }
// // wordsUpper('the quick brown fox');



// // function capitalize (phrase) {
// //     let arr = phrase.split(" ");
    
// //     for (var i = 0; i < arr.length; i++) {
// //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
// //     }
    
// //     return arr.join(" ");
// //     }
    
// //     alert(capitalize('the quick brown fox'));





//     function upperLetter(str){
//         var output = "", temp=""
//         for(var i= 0; i < str.length; i++){
//         if(i == 0){
//         temp = output + str[0].toUpperCase();
//         }
//         if(i == 1){
//         output = temp
//         }
//         output = output + str[i];
        
//         if(str[i] == " "){
//         i = i + 1;
//         output = output + str[i].toUpperCase();
//         }
//         }
//         return output;
//         }
        
//         alert(upperLetter("the quick brown fox"));




//     //PROGRAM-12



//     function findLongestWord(str) {
//         // Step 1. Split the string into an array of strings
//         var strSplit = str.split(' ');
//         // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
//         // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
          
//         // Step 2. Initiate a variable that will hold the length of the longest word
//         var longestWord = 0;
      
//         // Step 3. Create the FOR loop
//         for(var i = 0; i < strSplit.length; i++){
//           if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
//           longestWord = strSplit[i].length; // ...then longestWord takes this new value
//            }
//         }
//         /* Here strSplit.length = 9
//            For each iteration: i = ?   i < strSplit.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
//            1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
//            2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
//            3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
//            4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
//            5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
//            6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
//            7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
//            8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
//            9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
//            10th iteration:       9             no               
//            End of the FOR Loop*/
      
//         //Step 4. Return the longest word
//         return longestWord; // 6
//       }
      
//      // findLongestWord("The quick brown fox jumped over the lazy dog");
//      alert(findLongestWord('Web Development Tutorial'))





//  //PROGRAM-13


//     function char_count(str, letter) 
//     {
//     var letter_Count = 0;
//     for (var position = 0; position < str.length; position++) 
//     {
//         if (str.charAt(position) == letter) 
//         {
//         letter_Count += 1;
//         }
//     }
//     return letter_Count;
//     }

//     alert('Sample arguments: '+ char_count( 'JSResourceS.com', 'J'))



    







//     //PROGRAM-14

//     function Calculate_Circumference(radius) 
//     {

//         var circumference=2*3.1415*radius
//         return circumference
//     }
//     result1=Calculate_Circumference(2) 
//     alert('Circumference Of Circle is :'+'  '+result1)


//     function Calculate_area(radius) 
//     {

//         var area=3.1415*(radius*radius)
//         return area
//     }
//     result2=Calculate_area(2) 
//     alert('Area Of Circle is :'+'  '+result2)



// //###################END-OF-CHAPTER-35-38###################################


// function K_electric()

// {
//     //A = ["cake","apple pie","cookie","chips","patties"]

//     alert('Welcome to k_Electric.What help do you want sir/madam?')
//     alert('\na. Customer Name\nb. Current Month\nc. Number of units\nd. Charges per unit\ne. Net Amount Payable (within Due Date)\nf. Late Payment Surcharge\ng. Gross Amount Payable (after Due Date)')
//     var cust_name=(prompt('enter-your-name'))
//     var current_month=prompt('enter-month-name-in-english')
//     var no_of_units=parseInt(prompt('enter-no-of-units'))
//     var charge_per_unit=16
//     var net_amount_payable=no_of_units*charge_per_unit
//     var late_payment_surcharge=350
//     var gross_amount_payable=net_amount_payable+late_payment_surcharge
//     return [cust_name,
//             current_month,
//             no_of_units,
//             charge_per_unit,
//             net_amount_payable,
//             late_payment_surcharge,
//             gross_amount_payable]
// }

//     [
//     cust_name,
//     current_month,
//     no_of_units,
//     charge_per_unit,
//     net_amount_payable,
//     late_payment_surcharge,
//     gross_amount_payable
//     ]=K_electric()
//     alert('\nCustomer Name :'+' '+cust_name+
//     '\nMonth :'+' '+current_month+
//     '\nNumber Of Units :'+' '+no_of_units+
//     '\nCharge per Unit :'+' '+charge_per_unit+
//     '\nNet Amount Payable (Within Due Date) :' +' '+net_amount_payable+
//     '\nLate Payment Surcharge :' +' '+late_payment_surcharge+
//     '\nGross Amount Payable (After Due Date) :' +' '+gross_amount_payable)


// //PROGRAM

//     // function Calculate_hypo(base,perp) 
//     // {
        
        
        
//     //     calculate_square()
//     //     {
//     //         var base=base*base
//     //         var perp=perp*perp
//     //         var hypo=hypo*hypo
            
//     //         return [base,perp,hypo]

//     //     }

//     //     [base,perp,hypo]=calculate_square()
//     //     return hypo=base+perp
        
//     // }
//     // result=Calculate_hypo(1,2)
//     // alert(result)


//     //###################################CHAPTER#1#######################################

//     //PROGRAM-1

//     function DisplayAlert() {
//         var newLine = "\r\n"
//         var msg = "Showing how to add line break."
//         msg += newLine;
//         msg += "Line Break can be easily added in JavaScript.";
//         msg += newLine;
//         msg += "Simply Easy Learning";
//         msg+= newLine;
//         msg += "TutorialsPoint.com";
//         alert(msg);
//      }
//      DisplayAlert()


//      //PROGRAM-2

//     var s_name='abc'
//     var s_class='xi'
//     var s_age='20'
//     var s_cat='civilian'
//     alert(s_name+s_class+s_age+s_cat)

//     //PROGRAM-3

//     var pizza='PIZZA'
//     alert(pizza)
//     pizza=pizza.split()
//     alert(pizza)
    

//     //PROGRAM-4

//     var email='absde.12@gmail.com'
//     alert('My e-mail address is :'+ ' '+email)

//     var book='A smarter way to learn JavaScript'
//     alert('I am trying to learn from the book :'+ ' '+book)


//     var name='Muhammad-Usman'
//     var title='T-Shirts'
//     var qty=5
//     alert(name+' '+'ordered'+ ' '+qty+ ' '+title)


