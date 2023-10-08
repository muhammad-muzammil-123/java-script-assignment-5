// #*#*#*#*#*#*#**#*#*#*#*#*#* CHAPTER 26 TO 30  #*#*#*#*#*#*#*#*#*#*#*#*
// ####################### QUESTION NO: 1 ####################
// var userInput = +prompt("Enter a number");
// console.log(userInput)
// console.log(Math.round(userInput));
// console.log(Math.ceil(userInput));
// console.log(Math.floor(userInput));

// ################# QUESTION NO: 2 ######################

// var userNegNum = + prompt("Enter a negative number");
// console.log(userNegNum);
// var roundMethod = Math.round(userNegNum);
// console.log(roundMethod);
// var ceilMethod = Math.ceil(userNegNum);
// console.log(ceilMethod);
// var floorMethod = Math.floor(userNegNum);
// console.log(floorMethod);

// ##################### QUESTION NO: 3 #####################

// var num  = -4;
// console.log("the absolute value of -4 is " + -4 * -1);

// #########################  QUESTION NO: 4 #################

// var dice = Math.floor(Math.random()*6 +1)
// console.log(dice)

// ################### QUESTION NO: 5 #######################
// var toss = Math.floor(Math.random () * 3);
// if(toss === 1){
//     console.log("random coin value of head " , toss);
// }else if( toss === 2){
//     console.log("random coin value of tail ",toss)
// }

// ###################### QUESTION NO: 6 ########################
// var randomNum = Math.round(Math.random() * 100);
// console.log(randomNum);

// ##################### QUESTION NO: 7 ###################

// var num = +prompt("Enter a number");
// console.log(Math.round(num) + "kgs");

// #################### QUESTION NO: 8 ######################
// var num = Math.round(Math.random() * 10);
// var userNum = +prompt("Enter a number ");
// if(userNum === num ){
//     console.log("congratulations");

// }


// #*#*#*#*#*#*#*#*#*#*#*#*#*#*# CHAPTER NO 31 TO 34 #*#*#*#*#*#*#**#*#*#*#*#*#

// ####################### QUESTION NO: 1 #########################
// var date = new Date()
// console.log(date);

// ######################## QUESTION NO: 2 ####################
// var monthName = ["january","february","march","april","may","june","july","august","september","october","november","december"];
// var todayDate = new Date();
// var theMonth = todayDate.getMonth();
// // alert(theMonth);
// var monthInProper = monthName[theMonth];
// alert(monthInProper);

// ######################## QUESTION NO: 3 #####################
// var dayNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var todayDate = new Date();
// var theDay = todayDate.getDay();
// alert( "today is  " + dayNames[theDay].slice(0, 3));

// ######################## QUESTION NO: 4 ##################
// var dayNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var todayDate = new Date();
// var theDay = todayDate.getDay();
//   var todayDay =  "today is  " + dayNames[theDay].slice(0, 3);
//      if(todayDay === "sun" || "sat"){
//         console.log("it's a fun day");
//      }

// ########################## QUESTION NO: 5 ####################
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if(currentDay < 16){
//     console.log("first fifteen days of the months");
// }else{
//     console.log("the last days of the months");
// }

// ################## QUESTION NO: 6 #######################
// var currentDate = new Date();
// var millisecnds = currentDate.getTime();
// console.log( "milliseconds january 1 since 1970" + millisecnds);
// console.log( "seconds in january 1970" + millisecnds / 1000)
// console.log("minutes since january 1970 " + Math.round( millisecnds / (1000 *60 * 60)));
// console.log("days since january 1970 "+ Math.round( millisecnds / (1000 * 60 * 60 *24)));
// console.log("motns since january 1970 " + Math.round(millisecnds / (1000 * 60 * 60 *24 *30)))
// console.log("motns since january 1970 " + Math.round(millisecnds / (1000 * 60 * 60 *24 *30 * 12)))

// ############################# QUESTION NO: 7 ####################
// var currentDate = new Date();
// var hours = currentDate.getHours();
// if(hours <=  12 ){
// console.log("it's Am")
// }else{
//     console.log("it's PM")
// }

// ########################## QUESTION NO: 8 ########################

// var pastRamadan = new Date("23 march 2023");
// var todayDate = new Date();
// var diff = todayDate.getTime() - pastRamadan.getTime();
// console.log(diff / (1000 * 60 * 60 * 24 ));

// ####################### QUESTION NO: 9 #####################



// var userAge = new Date(prompt("Enter your age"));
// var todayDate = new Date();
// var diff = todayDate.getTime() - userAge.getTime();
// console.log("your age is " +  Math.round(diff / (1000  * 60 * 60 *24 * 30 *12)));
// console.log("your birth day year is " + userAge.getFullYear());




























































































