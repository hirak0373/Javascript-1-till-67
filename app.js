/*---------------------------------- ASSIGNMENT 01-------------------------------*/
/*---------------------------------- ALERTS-------------------------------*/
/*

// Question 01
alert("Assalam-o-Alikum")

//Question 02
alert("Error! Please enter a valid passward");



//Question 03
alert("Welcome to JS Land.... "+ "\n" +"  Happy coding!");




Question 04
alert("Welcome to js Land.........") ;
alert("Happy Coding!"+"/n"+"");






//Question 05
alert("Hello I can run JS through my web browser console");




*/

/*---------------------------------- VARIABLES FOR STRINGS-------------------------------*/
/*---------------------------------- ASSIGNMENT 02-------------------------------*/
/*
//Question 01
var username;






//Question02
var myName="Hira Khan";







//Question 03
var message="Hello World";
alert(message);









//Question 04
var name=prompt("Enter your name");
var age=prompt("Enter your age");
var qua=prompt("Enter your qualification");
alert(name);
alert(age + " years old");
alert(qua);





//Question 05
var p= "PIZZA"
var p1 ="";
for (var a=0;a<p.length;a++)
{
    for(var b=0;b<p.length-a;b++)
    {
 p1=p1+p[b]
    }
    p1=p1+"\n";
}
alert(p1);







//Question 06
var email="Hirak0373@gmail.com";
alert("My email address is "+ email)





//Question 07
var book ="A smarter way t learn javascript";
alert("I am trying to learn from the book "+ book);






//Question 08
document.write("yah! I can write html content through javascript");





//Question 09
var a ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);
document.write(a);
*/
/*---------------------------------- VARIABLES FOR NUMBERS-------------------------------*/
/*---------------------------------- ASSIGNMENT 03-------------------------------*/
/*

//Question 01
var age = 21;
alert("I am "+ age + " years old");









//Question 02

var n = 14;
n++;
alert("You have visited this site "+ n + " times");









//Question 03
var birthYear =1999;
document.write("My birth year is "+ birthYear +"<br>"+" Date type of my decleared variable is number");







//Question 04
var Visitors_name ="John Doe";
var Product_title= "T-shirt";
var Quantity = 5;
var store = "XYZ clothing store";

document.write("<b>"+Visitors_name +"</b>" + " ordered <b>" +Quantity+" "+ Product_title+"</b>(s) on "+store);








*/
/*---------------------------------- VARIABLE NAMES: LEGAL & ILLEGAL-------------------------------*/
/*---------------------------------- ASSIGNMENT 04-------------------------------*/
/*
//Question 01
var a ,b ,c ;





//Question 02
var a1,a2,a3,_a4,a$5;
var .a ,#ree ,f*c break, alert;




//Question 03
document.write("<b>Rules for naming JS variables</b><br><br>");
document.write("Variables must begin with a letter,$ or_. For example:$name,_name or name<br>");
document.write("Variable names are case sensetive<br>");
document.write("Variable names should not be JS keywords<br>"); 




/*---------------------------------- MATH EXPRESSIONS-------------------------------*/
/*---------------------------------- ASSIGNMENT 05-------------------------------*/
/*
// Question 01
var a =+prompt("Enter 1st number");
var b =+prompt("Enter 2nd number");
var c = a + b;
document.write("Sum of "+ a +" and " + b +" is " + c );














// Question 02
var c = a - b;
document.write("<br>Subtraction of "+ a +" and " + b +" is " + c  +"<br>");
var c = a * b;
document.write("Multipication of "+ a +" and " + b +" is " + c +"<br>");
var c = a / b;
document.write("Division of "+ a +" and " + b +" is " + c +"<br>");
var c = a % b;
document.write("Modulus of "+ a +" and " + b +" is " + c +"<br>");





//Question 03
var a;
document.write("Value after variable declaration is: "+ a+"<br>");
a = 5;
document.write("Intialized value is : "+ a +"<br>");
a= a+1;
document.write("Value after increment is: "+ a +"<br>");
a=a+7;
document.write("Value after addition is: "+a+"<br>" );
a=a-1;
document.write("Value after decrement is: "+ a +"<br>");
a= a % 3;
document.write("Remainder is: "+a+"<br>");





//Question 04
var ticket_price = 600;
document.write("Total cost to buy 5 tickets to a movie is "+ 5*ticket_price+"PKR");












//Question 05
var b  =5;
for ( var a =1;a<=10;a++)
{

document.write(b +" X "+a+" = "+b*a+"<br>");
}








//Question 06
var CT=25;
var FT=70;
var C=(FT-32)*5/9;
var F=(CT*9/5)+32;
document.write(CT+"<sup>o</sup>C"+" is "+F+"<sup>o</sup>F<br>");
document.write(FT+"<sup>o</sup>F"+" is "+C+"<sup>o</sup>C");













//Question 07
var item1_price=650;
var item2_price=100;
var item1_qua=3;
var item2_qua=7;
var sc =100; 
var chk ="Shopping Cart";
chk = chk.fontsize(20);
var total=(item1_price*item1_qua)+(item2_qua*item2_price)+sc;
document.write(chk+"<br><br>");
document.write("Price of item 1 is: "+item1_price+"<br>");
document.write("Quantity of item 1 is: "+item1_qua+"<br>");
document.write("Price of item 2 is: "+item2_price+"<br>");
document.write("Quantity of item 2 is: "+item2_qua+"<br>");
document.write("Shipping Charges: "+sc+"<br><br>");
document.write("Total cost of order is: "+total+"<br>");












//Question 08
var marks_ob=804;
var total_marks=980;
var per=(marks_ob/total_marks)*100;
var chk ="Marks Sheet";
chk = chk.fontsize(20);
document.write(chk + "<br><br>")
document.write("Total Marks: "+total_marks+"<br>");
document.write("Marks Obtained: "+marks_ob+"<br>");
document.write("Percentage: "+per);






//Question 09
var t =(10 * 104.80 )+(25 * 28);
var c ="Currency in PKR";
c =c.fontsize(20);
document.write(c + "<br><br>");
document.write("Total Currency in PKR: "+t);














//Question 10
var a = 7;
a =(((a + 5)*10)/2);










//Question 11
var birthYear=1992
var currentYear=2020;
var rslt=currentYear-birthYear;
var c = "Age Calculator";
c =c.fontsize(20);
document.write(c+"<br><br>");
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth year: "+birthYear+"<br>");
document.write("Your age is: "+rslt);




//Question 12:
var r = 20;
var pi=3.142;
var c =2*pi*r;
var ac = pi * (r*r);
var z ="The Geometrizer";

z =z.fontsize(20);
document.write(z+"<br><br>");
document.write("Radius of a circle is: "+r+"<br>");
document.write("The Circumference is: "+c+"<br>");
document.write("The area is: "+ac);










//Question 13
var c = "The Lifetime Supply Calculator"
c = c.fontsize(20);

var s = "lays";
var age = 21;
var max_age=90;
var estimated_amount_per_day=2;
var total=(max_age-age)*estimated_amount_per_day;
document.write(c+"<br><br>");
document.write("Favurite snack: "+s+"<br>");
document.write("Current age: "+age+"<br>");
document.write("Estimated max age: "+max_age+"<br>");
document.write("Amount of snacks per day: "+estimated_amount_per_day+"<br>");
document.write("You will need "+total+" "+s+" to last you until the rip old age of "+max_age);















*/












/*---------------------------------- MATH EXPRESSIONS-------------------------------*/
/*---------------------------------- ASSIGNMENT 06-------------------------------*/
/*---------------------------------- Chapter 6-9-------------------------------*/
/*
//Question 01
var a = 10;
document.write("Results: "+"<br>");
document.write("The value of a is: "+a+"<br>");
document.write(".......................<br><br>");
document.write("The value of ++a is: "+ ++a +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of a++ is: "+ a++ +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of --a is: "+ --a +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The value of a-- is: "+ a-- +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");




//Question 02:
var a=2,b=1;
document.write("a is: "+a+"<br>");
document.write("b is: "+b+"<br>");
var r = --a - --b + ++b + b--;

document.write("result is: "+r+"<br>");
// --a = 1
//--a - --b = 1 - 0 = 1
//--a - --b + ++b = 1 - 0 + 1 = 2
//--a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3










//Question 03
var name = prompt("Enter your name: ");
document.write("Assalam-o-alikum "+name);





//Question 05

var b ;
b = prompt("Enter a number: ");
if (b === "")
{
    b = 5;
}
for ( var a =1;a<=10;a++)
{

document.write(b +" X "+a+" = "+b*a+"<br>");
}




//Question 06

var a =prompt("Enter 1st subject name: ");
var b =prompt("Enter 2nd subject name: ");
var c =prompt("Enter 3rd subject name: "); 
var a1 = +prompt("obtained marks of "+a+": ");
var b1 = +prompt("obtained marks of "+b+": ");
var c1 = +prompt("obtained marks of "+c+": ");

//var a = "Maths";
//var b = "English";
//var c = "Urdu";
//var a1 =54;
//var b1 = 54;
//var c1 = 54;
var t = 100;
var tt = t+t+t;


var total = a1 + b1 + c1;
var per1 = (a1/t)*100;
var per2 = (b1/t)*100;
var per3 = (c1/t)*100;
var per = (total/tt)*100;
var l1 = 9 - a.length;
document.write("<table><b><tr><td>Subject</td><td>Total Marks </td><td>Obtained Marks</td><td>Percentage</td> </tr></b><tr></tr>")
document.write("<tr>"+"<td>"+a+"</td><td>"+t+ "</td><td>"+ a1+"</td><td>"+per1 +"%</td>"+"</tr>");
document.write("<tr><td>"+b+"</td><td>"+t+"</td><td>"+b1+"</td><td>"+per2 +"%</td></tr>");
document.write("<tr><td>"+c+"</td><td>"+t+"</td><td>"+c1+"</td><td>"+per3 +"%</td></tr>");
document.write("<tr><td></td><td>"+(tt)+"</td><td>"+total+"</td><td>"+per+"%</td></tr></table>");
*/
/*---------------------------------- USER INPUT & CONDITIONAL STATEMENT-------------------------------*/
/*---------------------------------- ASSIGNMENT 07-------------------------------*/
/*---------------------------------- Chapter 9 - 11-------------------------------*/
/*





//Question 01
var city=prompt("Enter a city: ");
if (city === "karachi")
{
    alert("Welcome to city of lights");
} 
else
{
    alert("Welcome..");
}













//Question 02
var gender=prompt("Enter your gender: ");
if (gender === "male")
{
    alert("Good Morning Sir");
} 
else if(gender === "female")
{
    alert("Good Morning Ma'am");
}




















//Question 03
var colour=prompt("Enter a colour: ");
if (colour === "red")
{
    alert("Must Stop");
} 
else if(colour === "yellow")
{
    alert("Ready to move");
}
else if(colour === "green")
{
    alert("move now");
}






//Question 04
var fuel = +prompt("Enter a remaining fuel in a car(in liters): ");
if (fuel < 0.25)
{
    alert("Please refill the fuel in your car")
}












//Question 05
 var a = 4;
 if (++a === 5){
    alert("given condition for variable a is true");
}

//Display

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

//Not Display



var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//Condion 2 and 4 display



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//Alert mxg will display


if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
// True will dispaly
if("car" < "cat"){
    alert("car is smaller than cat");
    }
//alert mxg display becz both word lenght are same




//Question 06
var a = +prompt("Enter marks of 1st subject: ");
var b = +prompt("Enter marks of 2nd subject: ");
var c = +prompt("Enter marks of 3rd subject: ");
var t = +prompt("Enter total marks: ");
var obtained = a + b + c;
var per = (obtained / t)*100;
document.write("Total marks: "+t+"<br>");
document.write("Marks obtained: "+obtained+"<br>");
if(per<=100 && per>=80)
{
    document.write("Grade: A-one<br>");
    document.write("Remarks: Excellent<br>");

}
else if(per<=79 && per>=70)
{
    document.write("Grade: A<br>");
    document.write("Remarks: Good<br>");

}
else if(per<=69 && per>=60)
{
    document.write("Grade: B<br>");
    document.write("Remarks: You need to improve<br>");

}
else if(per<60)
{
    document.write("Grade: Fail<br>");
    document.write("Remarks: Sorry<br>");

}


//Question 07
var b =6;
var a = +prompt("Store a secret number (ranging from 1 to 10)");

if (a === b)
{
    alert(a + "Bingo! Correct answer");
}

else if(a === --b)
{
   
    alert(  "Close enough to the correct answer");
}

//Question 08
var n = prompt("Enter a number: ");
if (n % 3 === 0 )
{
    alert("number is divisible by 3.");
}
else
{
    alert("Not divisible by 3.");
} 

//Question 09
var n = prompt("Enter a number: ");
if (n % 2 === 0 )
{
    alert("number is even.");
}
else
{
    alert("number is odd.");
} 

//Question 10
var t = +prompt("Enter a tempreture: ");
if (t > 40)
{
    alert("It is too hot outside.");
}
else if (t <= 39 && t > 30)
{
    alert("The Weather today is Normal.");
}
else if (t <= 29 && t > 20)
{
    alert("Today’s Weather is cool.");
}
else if(t <= 19 && t > 10)
{
    alert("OMG! Today’s weather is so Cool.");
}









//Question 11
a = +prompt("Enter 1st number: ");
b = +prompt("Enter 2nd number: ");
o = prompt("Enter operator: ");
if (o === '+')
{
    alert(a+b);
}
else if (o === '-')
{
    alert(a-b);
}
else if (o === '*')
{
    alert(a8b);
}
else if (o === '/')
{
    alert(a/b);
}
if (o === '%')
{
    alert(a%b);
}


*/
/*---------------------------------- IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS-------------------------------*/
/*---------------------------------- ASSIGNMENT 12-13-------------------------------*/
/*

//Question 01
var ch = prompt("Enter a character: ");
var index = 0;

var i = ch.charCodeAt(index);
if(i >=65 && i<=90)
{
document.write("Given input is a upper case letter");
}
else if(i >=97 && i<=122)
{
document.write("Given input is a lower case letter");
}
else if(i >=48 && i<=57)
{
document.write("Given input is a number");
}
else
{
    document.write("Given character is a special character");
}


//Question 02
var a =prompt("Enter 1st integer: ");
var b =prompt("Enter 2nd integer: ");
if (a > b)
{
    document.write(a);
} 
else if(b > a)
{
    document.write(b);
}
else if(a === b )
{
    document.write("a and b are equal");
}



//Question 03
var n = +prompt("Enter a number: ");
if(n > 0)
{
    document.write("Number is positive");
}
else if ( n === 0)
{
    document.write("Number is zero");
}
else if(n < 0)
{
    document.write("Number is negative");
}


//Question 04

var ch = prompt("Enter a character: ");
if (ch === "a" ||ch === 'e' ||ch === 'i' ||ch === 'o' ||ch === 'u')
{
    document.write("True");
}
else{
    document.write("False");
}






//Question 05
var pas= "@hsk"
var a = prompt("Enter your passward: ");
if (a === "")
{
    prompt("Please enter a passward: ");
}
else if (a === pas)
{
    document.write("Correct! The password you entered matches the original password");
}
else
{
    document.write("Incorrect password");
}



//Question 06
var greeting;
var hour = 13;
if (hour < 18)
 {
greeting = "Good day";
document.write(greeting);
 }
else
{
greeting = "Good evening";
document.write(greeting);
}





//Question 07
var time = prompt("Enter a time in 24 hours clock format(like:1935): ");
if(time >= 0000 && time < 1200)
{
alert("Good Morning");
}
else if(time >= 1200 && time < 1700)
{
    alert("Good Afternoon");
}
else if(time >= 1700 && time <2100)
{
    alert("Good Evening");
}
else if(time >= 2100 && time <=2359)
{
    alert("Good Night");
}
*/
/*---------------------------------- ARRAYS -------------------------------*/
/*---------------------------------- ASSIGNMENT 13 - 15 -------------------------------*/
/*
//Question 01
var a = [];



//Question 02
var s = new Array(3,2,5,"ali");


//Question 03:
var b = ["Hira","Ali","Taimoor","Hina","Rahila"];


//Question 04:
var c = [1,2,3,4,5,6,7,8,9];


//Question 05:
var d = [true,false,true,true,false];


//Question 06
var e = ["Hira",'s',21,true];


//Question 07
var qua = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
var b = 1;
var z ="Qualification";
z =z.fontsize(20);
document.write(z+"<br><br>");
for(var a = 0 ; a<qua.length;a++)
{
    document.write(b+") "+qua[a] +"<br>");
    b++;
}




//Question 08
var s = ["hira", "ali","rahila"];
var score = [400,350,375];
var t = 500;
var s1 = [];
for(var x = 0 ; x< score.length ; x++)
{
    s1[x]= (score[x]/t)*100;
}
for (var x = 0 ; x < s1.length ; x++)
{
    document.write("Score of "+s[x]+" is "+score[x]+". Percentage: "+s1[x]+"%<br>");
}




//Question 09
var colour = ["red","orange","yellow","purple"];
document.write(colour+"<br>");
var ba= prompt("Enter a colour you want to add at the begining of the array: ");
colour.unshift(ba);
document.write(colour+"<br>");
var ba= prompt("Enter a colour you want to add at the end of the array: ");
colour.push(ba);
document.write(colour+"<br>");
colour.unshift("silver","white");
document.write(colour+"<br>");
colour.shift();
document.write(colour+"<br>");
colour.pop();
document.write(colour+"<br>");
var j = +prompt("At which index you wants to add a color: ");
var v = prompt("Enter a colour name: ");
colour.splice(j-1,0,v);
document.write(colour+"<br>");

var j = +prompt("At which index you wants to delete a color: ");
var v = prompt("Enter a how many colour you want to delete: ");
colour.splice(j-1,v);
document.write(colour+"<br>");



//Question 10
var a=[320,230,450,112,456,246];
document.write(a+"<br>");
a =a.sort()
document.write(a);




//Question 11
var cities = ["karachi","lahore","Islamabad","Quetta","Peshawar"];
var selected_cities = [cities.slice(1,4)];
document.write(cities+"<br>");
document.write(selected_cities);


//Question 12
var arr = ["This" , " is ",  "my" , " cat"];
document.write(arr.join(" "));


//Question 13(chk)
var devices = ["Keyboard","mouse","speaker","joystick","camera"];
document.write("Devices: <br>");
for (var x = 0 ;x<devices.length;x++)
{
    var z =devices[x];
    devices.unshift();
    document.write(z+"<br>");
}





//Question 14
var devices = ["Keyboard","mouse","speaker","joystick","camera"];
document.write("Devices: <br>");
for (var x = devices.length ;x>0;x--)
{
    var z =devices.pop();
   
    document.write(z+"<br>");
}



//Question 15
var phone_manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
document.write("<select>");

for(var a = 0;a<phone_manufacturers.length;a++)
{
    document.write("<option>"+phone_manufacturers[a]+"</option>");
}
document.write("</select>");


*/

/*---------------------------------- ARRAYS AND LOOP  -------------------------------*/
/*---------------------------------- ASSIGNMENT 17-20  -------------------------------*/
/*
//Question 01

var myArr = [[],[],[]];

//Question 02
var a =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
var l = a[0].length;
for (var x = 0; x<a.length; x++)
{
    for(var y =0 ;y<l;y++)
    {
        document.write(a[x][y]);
    }
    document.write("<br>");
}


//Question 03
for(var b = 0 ; b<=10;b++)
{
    document.write(b+"<br>");
}


//Question 04
var a = +prompt("Enter a number to show its multiication table: ");
var b =+prompt("Enter lenght of multipication table: ");
for (var x = 1 ; x <= b ; x++)
{
    document.write(a + " X " + x + " = "+ x*a +"<br>");
}


//Question 05
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(var a = 0; a<fruits.length;a++ )
{
    document.write(fruits[a]+"<br>");
}
for(var b = 0;b<fruits.length;b++)
{
    document.write("Element at index "+b+ " is "+fruits[b]+"<br>");
}



//Question 06
var Counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var Reverse_counting= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var Even= [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var Odd= [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
var Series= ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
document.write("<b>Counting".fontsize(14)+"</b><br><br>"+Counting+"<br>");
document.write("<b>Reversecounting".fontsize(14)+"</b><br><br>"+Reverse_counting+"<br>");
document.write("<b>Even".fontsize(14)+"</b><br><br>"+Even+"<br>");
document.write("<b>Odd".fontsize(14)+"</b><br><br>"+Odd+"<br>");
document.write("<b>Series".fontsize(14)+"</b><br><br>"+Series+"<br>");



//Question 07
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var s = prompt("Welcome to ABC bakery what do you want: ");
var g = A.includes(s);

if (g === true)
{
    document.write(s+" is <b> available</b> at index number "+A.indexOf(s)+" in our bakery");
}
else
{
    document.write("We are sorry "+s+" is <b> not available</b> in our bakery");
}




//Question 08
var A = [24, 53, 78, 91, 12];
document.write("Array Items: "+A+"<br>");
var d =0;
for (var b = 0; b< A.length;b++)
{
    if (d<A[b])
    {
        d = A[b];
    }
}
document.write("Largest Number is: "+d);


//Question 09
for (var a = 1; a <=20 ; a++)
{
    var k = 5*a+", ";
    document.write(k);
    

}
*/







/*------------------------  Chapters 21-25  --------------------------------*/
/*------------------------  String Methods  ----------------------------------*/

/*
//Question 01
var firstName = prompt("Enter your First Name: ");
var lastName = prompt("Enter your Last Name: ");
var fullName = firstName + " " + lastName;
alert("Assalam-o-aikum "+ fullName);



//Question 02
var phn = prompt("Enter your favorite mobile phone model: ");
var len = phn.length;
document.write("My favorite phone is: "+phn+"<br>");
document.write("Length of string is: "+len);



//Question 03
var word = "Pakistani";
var indexof=word.indexOf("n");
document.write("String: "+word+"<br>");
document.write("Index of 'n' is: "+indexof);



//Question 04
var word = "Hello World";
var lindexof=word.lastIndexOf("l");
document.write("String: "+word+"<br>");
document.write("Last Index of 'l' is: "+lindexof);



//Question 05
var word = "Pakistani";
var ch = word.charAt(3);
document.write("String: "+word+"<br>");
document.write("Character at  Index 3 is: "+ch);


//Question 06
var firstName = prompt("Enter your First Name: ");
var lastName = prompt("Enter your Last Name: ");
var fullName = firstName.concat(" ",lastName);
alert("Assalam-o-aikum "+ fullName);



//Question 07
var word = "Hyderabad"
var c = word.indexOf("Hyder");
var word1 =word.slice(0,c)+"Islam"+word.slice(c+5);
document.write("City: "+word+"<br>");
document.write("After replacement: "+word1);



//Question 08:
var message = "Ali and Sami are best friends. They play cricket and football together.";
message = message.replace(/and/g,"&");
document.write(message);



//Question 09:
var value = "472";
var value1 =Number(value);
document.write("value: "+value+"<br>");
document.write("Type: "+typeof(value) +"<br>");
document.write("value: "+value1+"<br>");
document.write("Type: "+typeof(value1) +"<br>");


//Question 10:
var input=prompt("Enter a string: ");
document.write("User input: "+input+"<br>");
document.write("Uppercase: "+input.toUpperCase());


//Question 11:
var input=prompt("Enter a string: ");
document.write("User input: "+input+"<br>");
document.write("Titlecase: "+input.slice(0,1).toUpperCase() +input.slice(1).toLowerCase() );




//Question 12:
var num = 35.36 ;
num1 = num.toString();
num1 = num1.replace(".","");
document.write("Number: "+num+"<br>");
document.write("Result: "+num1);


//Question 13
var username = prompt("Enter user name: ");
for (var a = 0 ; a< username.length;a++)
{
    var chk = username.charCodeAt(a);
    if(chk === 33 || chk === 44 || chk === 46 || chk === 64 )
    {
        alert("Please enter a valid username!");
    }
}


//Question 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Welcome to ABC bakery.What do you want to order!");
var c = b.toLowerCase();
var flag = false;
for(var i =0;i<A.length;i++)
{
    if(A[i] === c)
    {
        flag = true;
        document.write(b+" is avaliable at index "+i+" in our bakery");
    }
}
if (flag === false)
{
    document.write("We are very sorry!! "+b+ " is not avaliable in our bakery " );
}



//Question 15
var pas =prompt("Enter a passward: ");
var flag1 = true; 
for (var a = 0;a< pas.length;a++)
{
    var c = pas.charCodeAt(a);
    if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122) || (+c >= 48 && +c <= 57) )
    {
        
    } 
    else
    {
        flag1 = false;
        document.write("Entered passward is: "+pas+"<br>");
        document.write("PAssward is incorrect!! It can contain only numbers and alphabets "+"<br>")
        alert("PAssward is incorrect!!");
        document.write("Please Enter a valid passward");
        break;
    }

    
}
var c = pas.charCodeAt(0);
if(flag1 === true)
{
    if (c >= 48 && c <= 57)
    {
        document.write("Entered passward is: "+pas+"<br>");
        document.write("Passward cannot start with a number"+"<br>");
        document.write("Please Enter a valid passward");
        alert("Passward cannot start with a number");
    } 
    else
    {
        if (pas.length < 6)
        {
            alert("passward must at least 6 characters long!!");
            document.write("Entered passward is: "+pas+"<br>");
            document.write("passward must at least 6 characters long!!"+"<br>")
            document.write("Please Enter a valid passward");
        }   
        else
        {
            document.write("Entered passward is: "+pas);
        }
    }

}



//Question 16
var university = "University of Karachi";
var a = university.split("");

for(var i =0 ; i< a.length ; i++)
{
    document.write(a[i]+"<br>");
}



//Question 17
var input = prompt("Enter a string: ");
var c = input[input.length -1];
document.write("User Input: "+input+"<br>");
document.write("Last character of input: "+c);



//Question 18
var text ="The quick brown fox jumps over the lazy dog";
var c = text.split(" ");
var count = 0;
for( var a = 0 ; a<c.length ;a++)
{
    if (c[a].toLowerCase() === "the")
    {
        count=count+1;
    }
}
document.write("Text: "+text+"<br>");
document.write("There are "+count+" occouraces of word 'the'");
*/

/*------------------------  Chapters 26-30  --------------------------------*/
/*------------------------  Math Methods  ----------------------------------*/
/*
//Question 01:
var input = prompt("Enter a positive number: ");
document.write("Number: "+input+"<br>");
document.write("round of value: "+Math.round(input)+"<br>");
document.write("floor value: "+Math.floor(input)+"<br>");
document.write("ceil value: "+Math.ceil(input)+"<br>");



//Question 02:
var input = prompt("Enter a negative number: ");
document.write("Number: "+input+"<br>");
document.write("round of value: "+Math.round(input)+"<br>");
document.write("floor value: "+Math.floor(input)+"<br>");
document.write("ceil value: "+Math.ceil(input)+"<br>");



//Question 3:
var input = prompt("Enter a negative number: ");
document.write("The absolute value of "+input+" is "+Math.abs(input));



//Question 04:
var a = Math.random() * 6 ;
var b = Math.ceil(a);
document.write("Random dice value: "+b);


//Question 05:
var a = Math.random() * 2 ;
var b = Math.ceil(a);
if ( b === 1)
{
    document.write(b+"<br>");
    document.write("Random coin value: Head");
}
else
{
    document.write(b+"<br>");
    document.write("Random coin value: Tail");
    
}



//Question 06:
var a = Math.random() * 100 ;
var b = Math.ceil(a);
document.write("Random number between 1 and 100: "+b);



//Question 07
var input = prompt("Enter your weight in kiligrams: ");
var n = 0;

n = parseFloat(input);
document.write(n+"<br>");




//Question 08
var a = Math.random() * 10 ;
var b = Math.ceil(a);
var c = +prompt("Enter a number between 1 to 10: ");
if (c === b)
{
    alert("Congratulation you guess a correct number");
}
else
{
    alert("Sorry!!! try again...");
}
*/

/*------------------------  Chapters 31-34  --------------------------------*/
/*------------------------  DATE METHODS  ----------------------------------*/
/*

//Question 01:
var a = new Date();
document.write(a);




//Question 02:
var a = new Date();
a=a.getMonth();

if(a === 0)
{
document.write("Current month: january");
}
else if(a === 1)
{
document.write("Current month: Febuary");
}

else if(a === 2)
{
document.write("Current month: March");
}
else if(a === 3)
{
document.write("Current month: April");
}
else if(a === 4)
{
document.write("Current month: May");
}
else if(a === 5)
{
document.write("Current month: June");
}
else if(a === 6)
{
document.write("Current month: July");
}
else if(a === 7)
{
document.write("Current month: August");
}
else if(a === 8)
{
document.write("Current month: September");
}
else if(a === 9)
{
document.write("Current month: Octuber");
}
else if(a === 10)
{
document.write("Current month: November");
}
else if(a === 11)
{
document.write("Current month: December");
}



//Question 03

var a = new Date();
a=a.getDay();
if (a === 0)
{
    document.write("Today is Sun");
}
else if (a === 1)
{
    document.write("Today is Mon");
}
else if (a === 2)
{
    document.write("Today is Tue");
}
else if (a === 3)
{
    document.write("Today is Wed");
}
else if (a === 4)
{
    document.write("Today is Thu");
}
else if (a === 5)
{
    document.write("Today is Fri");
}
else if (a === 6)
{
    document.write("Today is Sat");
}





//Question 04

var a = new Date();
a=a.getDay();
if (a === 0 ||a === 6)
{
    document.write("Its fun day");
}




//Question 05
var a = new Date();
a=a.getDate();
if (a >= 1 && a<= 15)
{
    document.write("First fifteen days of the month");
}
else if(a >=16 && a <= 31)
{
    document.write("Last days of the month");
}




//Question 06
var a = new Date();
var b = a.getTime();
var c =Math.ceil(b/(1000*60)) ;
document.write("Current Date: "+a+"<br>");
document.write("Elapsed miliseconds since january1 ,1970: "+b+"<br>");
document.write("Elapsed minutes since january1 ,1970: "+c+"<br>");




//Question 07
var a = new Date();
var b = a.getHours();
if(b >=0 && b <= 11 )
{
    alert("Its AM");
}
else if(b >=12 && b <= 23 )
{
    alert("Its AM");
}




//Question 08
var later_date = new Date("May 31,2020");
document.write("Later Date: "+later_date);




//Question 09
var Ramdan_date = new Date("Apr 25,2020");
var today_date   = new Date();
var diff = today_date-Ramdan_date;
diff =diff/(1000*60*60*24);
diff =Math.ceil(diff)
alert(diff+" days passed since 1st Ramadan, 2020");



//Question 10
var date1 = new Date("Jan 1,2015 ");
var date = new Date("Dec 5,2015 22:50:16");

var a = date.getTime();
var b = date1.getTime();
var diff = a - b;
diff = diff/(1000*60);
diff =Math.ceil(diff);

document.write("On refference date"+new Date("Dec 5,2015 22:50:16")+","+diff+" second has passed since begining of 2015");







//Question 11:
var date = new Date();
var h = date.getHours();

document.write("current date: "+date+"<br>");
h = h-1
date.setHours(h)
document.write("1 hour ago,it was "+date);






//Question 12:
var date = new Date();
var h = date.getFullYear();

document.write("current date: "+date+"<br>");
h = h-100
date.setFullYear(h)
document.write("100 year back,it was "+date);





//Question 13:
var age = +prompt("Enter your age: ");

var date = new Date();
var h = date.getFullYear();
h = h-age;
date.setFullYear(h)
var by= date.getFullYear();
document.write("Your age is: "+age+"<br>");
document.write("Your birth year is: "+by);






//Question 14
var costumerName = "Hira Khan";
var date = new Date();
var c_month = date.getMonth();
var nbr_of_units = 334;
var charges_per_unit = 16;
var Late_Payment_Surcharge = 350;
var Net_Amount_Payable  = nbr_of_units * charges_per_unit ;
var Gross_amount_payable = Net_Amount_Payable + Late_Payment_Surcharge;
document.write("Costumer Name"+costumerName+"<br>");
document.write("Month: "+c_month+"<br>");
document.write("charges per unit: "+charges_per_unit.toFixed(2)+"<br>");
document.write("Number of units: "+nbr_of_units.toFixed(2)+"<br>");
document.write("Net Amount Payable: "+Net_Amount_Payable.toFixed(2)+"<br>");
document.write("Late Payment Surcharge: "+Late_Payment_Surcharge.toFixed(2)+"<br>");
document.write("Gross Amount payable: "+Gross_amount_payable.toFixed(2)+"<br>");


*/


/*------------------------  Chapters 35-38  --------------------------------*/
/*------------------------  FUNCTIONS  ----------------------------------*/

/*
//Question 01
function a ()
{
    document.write(new Date());
}

a();








//Question 02
var first_Name=prompt("Enter your first name: ");
var last_Name=prompt("Enter your last name: ");
function b(first,last)
{
    document.write("Assalam-o-alikum "+first+" "+last);
}
b(first_Name,last_Name);



//Question 03:
var first_Nbr=+prompt("Enter first number: ");
var second_Nbr=+prompt("Enter second number: ");
function add(first,second)
{
    document.write(first+second);
}
add(first_Nbr,second_Nbr);







//Question 04:
var first_Nbr=+prompt("Enter first number: ");
var second_Nbr=+prompt("Enter second number: ");
var opt=prompt("Enter operator: ");
function calc(f,s,o)
{
    if(o === "+")
    {
        var c = f+s;
        document.write("Sum is: "+c);
    }
    else if(o === '-')
    {
        document.write("Subtraction is: "+f-s);
    }
    else if(o === '*')
    {
        document.write("Multipication is: "+f*s);
    }
    else if(o === '/')
    {
        document.write("Division is: "+f/s);
    }
    else{
        document.write("Wrong operator!");
    }
}
calc(first_Nbr,second_Nbr,opt);








//Question 05:
var input = +prompt("Enter a number: ");
function sqr(a)
{
    return a*a;
}
document.write("Square of "+input+" is: "+sqr(input));







//Question 06:
var input = +prompt("Enter a number: ");
var fac =1;
function factorial(num)
{
for (var a = num; a>0; a--)
{
    fac = fac * a;
}
return fac;
}
document.write("Factorial of "+input+" is: "+factorial(input));







//Question 07:
var a = +prompt("Enter start number: ");
var b = +prompt("Enter end number: ");
function count1(a,b)
{
    for(var c = a;c<=b;c++)
    {
        document.write(c+"<br>");
    }
}
count1(a,b);






//Question 08:
var base = +prompt("Enter a base: ");
var per = +prompt("Enter a perpendicular: ");
function calculateHypotenuse(b,p)
{
    function sqr (n)
    {
        return n*n
    }
    var bsqr = sqr(b);
    var psqr = sqr(p);
    h = bsqr+psqr;
    document.write("Hypotenuse"+"<sup>2</sup>"+"  = "+h);
document
}
calculateHypotenuse(base,per);







//Question 09:
var height = 4;
function area(w,h)
{
    var area = w*h;
    return area;
}
document.write("Area of rectangle is: "+area(6,height));







//Question 10:
function pal(word,l)
{
    var chk = "";
    for(var a=l-1; a >= 0; a--)
    {
         chk =chk+word[a]; 
    }
    if(chk === word)
    {
        document.write("Word is palandrome");
    }
    else
    {
        document.write("Word is not palandrome");
    }
}
var input = prompt("Enter a word to check its palandrome or not:");

input = input.toLowerCase();
var l =input.length;
pal(input,l);






//Question 11
var a = "the quick brown fox";

function chng(str)
{
    var s= [];

    s = str.split(" ");
    
    for (var a = 0 ;a< s.length;a++ )
    {

        var str1 = s[a];
        var  chk = "";
        for (var b = 0 ; b< str1.length ; b++)
        {

            if ( b === 0)
            {
                chk = chk + str1[b].toUpperCase();
            }
            else
            {
                chk = chk + str1[b];
            }

        }

       s[a]=chk; 

    }
    var ss ="";
   for ( var a = 0 ; a< s.length; a++)
   {
        ss= ss +" "+s[a];
   }
   document.write(ss);
}
chng(a);







//Question 12:
function longestword(str)
{
    var s= [];

    s = str.split(" ");
    var a = 0;
    var chk = "";

    for (var  b = 0 ; b<s.length;b++ )
    {
        if (s[b].length > a)
        {
            a = s[b].length;
            chk = s[b];
        }
    }    
    document.write(chk);
}

longestword("Web Development Tutorial");






//Question 13:
function Count(str,ch)
{
    
var a = 0

 for (var b = 0; b < str.length; b++) 
 {
    if (str[b] === ch) 
      {
      a += 1;
      }
  }
  return a;

}
document.write(Count("JSResourceS.com","o"));






//Question 14:
var pi = 3.14;
var radius = +prompt("Enter the value of radius: ");
function calcCircumference(r)
{
    var circumtance = 2 * pi * r
    document.write("The circumference is: "+circumtance+"<br>");
}
function calcArea(r)
{
    var area  = pi * r *r;
    document.write("The area is: "+area+"<br>");
}
calcCircumference(radius);
calcArea(radius);
*/


























/************************ Chapter 38-42 ************************/
/**********************FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS********************/
/*
//Question 01:
function power(a,b)
{
    return a**b;
}
var a = +prompt("Enter a number: ");
var b = +prompt("Enter power of a number: ");
var c = power(a,b);
document.write(a + "<sup>"+b+"</sup>"+" "+"="+" "+c);


//Question 02:
var year = +prompt("Enter a year: ");

function leapyr(year)
{
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
    {
        document.write(year +" is a leap year")
    }
    else
    {
        document.write(year +" is not a leap year")
    }
}
leapyr(year);



//Question 03
var a = 3;
var b = 4;
var c = 3;
function calS(a ,b,c)
{
    return (a+b+c)/2;
}
function area(a,b,c){
    var S =calS(a,b,c);
    var area = S*(S-a)*(S-b)*(S-c);
    document.write("Area of triangle is: "+area);
}
area(a,b,c);




//Question 04:
function main()
{
var a = +prompt("Enter marks of 1st subject:");
var b = +prompt("Enter marks of 2nd subject:");
var c = +prompt("Enter marks of 3rd subject:");
document.write("1st subject marks: "+a+"<br>");
document.write("2nd subject marks: "+b+"<br>");
document.write("3rd subject marks: "+c+"<br>");
document.write("Average: "+avg(a,b,c)+"<br>");
document.write("Percentage: "+per(a,b,c)+"<br>");

}
function avg(a,b,c)
{
    var average = (a+b+c)/3
    return average
}
function per(a,b,c)
{
    var percentage = ((a+b+c)/300)*100;
    return percentage;
}
main();



//Question 5:
var str = prompt("Enter a string: ");
var a = prompt("Enter a character whom you want to know index of:");
for(var i =0 ;i<str.length;i++)
{
    if (str[i]==a)
    {
        document.write("Index of "+a+" is: "+i);
        break;
    }
    else if( i == (str.length-1))
    {
        document.write("Given character not exist in a string");
    }

}





//Question 06:

var str = "A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. You may already know that you can use a computer to type documents, send email, play games, and browse the Web. You can also use it to edit or create spreadsheets, presentations, and even videos.";
str1 = "";
for (var i =0 ; i< str.length; i++)
{
    if (str[i]!='a' && str[i]!='e'&& str[i]!='i'&& str[i]!='o'      && str[i]!='u' && str[i]!="A"&&str[i]!='E'&&str[i]!='I'&&str[i]!='O'&&str[i]!='U')
    
    {
        str1 = str1 +str[i]
    }
}
document.write("String: "+str+"<br>");
document.write("String without vowels: "+str1)


//Question 07
var str = "Pleases read this application and give me gratuity";
var count = 0;
document.write("String: "+str+"<br>");
for ( var i =0 ; i< str.length ; i++ )
{
    switch (str[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            if (str[i+1]=='a' || str[i+1]=='e'|| str[i+1]=='i'|| str[i+1]=='o'      || str[i+1]=='u' || str[i+1]=="A"||str[i+1]=='E'||str[i+1]=='I'||str[i+1]=='O'||str[i+1]=='U')
            {
                count++;
                document.write(str[i]+str[i+1]+" ");
            }
    
}
}
document.write("<br>"+"Count: "+count);





//Question 08:
var dis = +prompt("Enter distance in kilmeters: ")
function meter(dis)
{
    var m = dis * 1000;
    document.write(dis +"km in meter is: "+m+"<br>");
}
function feet(dis)
{
    var feet = dis * 3280.839895;
    document.write(dis +"km in feet is: "+feet+"<br>");
}
function inches(dis)
{
    var inche = dis * 39370.1;
    document.write(dis +"km in inches is: "+inche+"<br>");
}
function cm(dis)
{
    var cnm = dis * 100000;
    document.write(dis +"km in centemetres is: "+cnm+"<br>");
}
meter(dis);
feet(dis);
inches(dis);
cm(dis);





//Question 09
var hour = +prompt("Enter working hours: ");
if (hour > 40)
{
    var h = hour -40;
    var overtime = h * 12;
    document.write("Employee overtime pay is: "+overtime);
}
else
{
    document.write("Employee overtime pay is: "+0);
}



//Question 10
var amount = prompt("Enter a amount to withdraw: ");
document.write("you will have "+Math.floor(amount / 100)+" hundred notes "+Math.floor((amount%100)/50)+" Fifty notes "+Math.floor(((amount%100)%50)/10)+" ten notes");


*/

/*************************Chapter 43-48 *******************/
/**********************EVENTS *******************************/


//Question 01:
function about()
{
    alert("This page contains javascript practise question");
}

//Question 02:
 function thanks()
 {
     alert("Thanks for buying");
 }



 //Question 03
 function removeElement(elementId) {
    // Removes an element from the document.
    var element = document. getElementById(elementId);
//alert(elementId)
    element.parentNode.removeChild(element)
    }



//Question 04:
function setnew(a)
{
    var a = document.getElementById("img1");
    a.src="new2.jpg"
}
function setnew1(a)
{
    var a = document.getElementById("img1");
    a.src="new1.jpg"
}



//Question 05:
var count =00;
var id = document.getElementById("count");
function inc()
{
    count++;
    id.innerHTML=count;
}
function dec()
{
    count--;
    id.innerHTML=count;
}








/****************************Chapter 49-52  *************************/
/*********************** EVENTS ******************/


//Questin 01:
function signup()
{
//    alert("fh")
    var username = document.getElementById("username")
    var passward = document.getElementById("passward")
    var rpassward = document.getElementById("rpassward")
    var p1 = document.getElementById("informationsignup")
    //var TestVar = form.inputbox.value();
   // alert ("You typed: " + TestVar);
    

    p1.innerHTML="<h3>INFORMATION ENTERED IN SIGNUP FORM</h3>"+"User Name: "+username.value+"<br>"+"Passward: "+passward.value+"<br>"+"Rewrite passward: "+rpassward.value ;
    
}



//Question 02
function details()
{
    var a = "One of the best things about a new season is the fresh crop of handbags that come along with it. If you’re willing to spend the money, a designer bit of arm candy can be an investment. From cross-body bags to sleek ";
    var p = document.getElementById("details")
    p.innerHTML = a;
}



//Question 03
var i = 1;

function addItem()
{
    var l = document.getElementById("Sname")
    var tr = document.createElement("tr");
    var li = document.createElement("td");
    var text = document.createTextNode(i)
    li.appendChild(text)
    i++;
    tr.appendChild(li)
console.log (li)

    var text = document.createTextNode(l.value)
    var li = document.createElement("td");
    li.setAttribute("class","lidec")
    li.appendChild(text)
    var ul = document.getElementById("list")
    l.value = ""
    tr.appendChild(li)
    var li = document.createElement("td");
    var l = document.getElementById("class")
    var text = document.createTextNode(l.value)
    li.setAttribute("class","lidec")
    li.appendChild(text)
    l.value = ""
    tr.appendChild(li)
    //Delete Button
    var DelBtn = document.createElement("button");
    var text = document.createTextNode("Delete");
    DelBtn.appendChild(text)
        
    // Delete Button Attribute
    DelBtn.setAttribute("class","Btn");
    DelBtn.setAttribute("onclick","Del(this)");
    var li = document.createElement("td");
    li.appendChild(DelBtn)
    tr.appendChild(li)    
     //Edit Button
     var DelBtn = document.createElement("button");
     var text = document.createTextNode("Edit");
     var li = document.createElement("td");
     DelBtn.appendChild(text)
         
     // Edit Button Attribute
     DelBtn.setAttribute("class","Btn");
     DelBtn.setAttribute("onclick","Edit(this)");
     li.appendChild(DelBtn)    
     tr.appendChild(li)
    
     ul.appendChild(tr)
   // console.log(li)

}



function DelAll()
{
    var ul = document.getElementById("list")
    ul.innerHTML="";
}



function Del(e)
{
e.parentNode.parentNode.remove()
}



function Edit(e)
{
   console.log( e.parentNode.parentNode.childNodes[1].innerHTML)
 var j =  prompt(" Enter new value or edit ",e.parentNode.parentNode.childNodes[1].innerHTML);
 var k =  prompt(" Enter new value or edit ",e.parentNode.parentNode.childNodes[2].innerHTML);
 e.parentNode.parentNode.childNodes[1].innerHTML =j; 
 e.parentNode.parentNode.childNodes[2].innerHTML =k; 
}



/****************************Chapter 53 to 58 ***************************/
/****************************EVENTS **********************/
function showImg(e)
{
console.log(e.src)
var i = document.getElementById("modelImage")
i.src = e.src;
}
function zoomin()
{
   var a =  document.getElementById("para").style.fontSize ;
   a += 10;
   var c ="" 
   for (var z = 0; z< a.length ; z++)
   {
    if (a[z]=='p')
    {
        break;
    }
    else
    {
         c +=a[z];
    }
   }
   c =parseInt(c) + 10 
   c = c + "px";
   
   document.getElementById("para").style.fontSize = c;
   
console.log(para.style.fontSize)
   // myImg.style.fontSize = (currWidth + 50) + "px";
}

function zoomout()
{
   var a =  document.getElementById("para").style.fontSize ;
   a += 10;
   var c ="" 
   for (var z = 0; z< a.length ; z++)
   {
    if (a[z]=='p')
    {
        break;
    }
    else
    {
         c +=a[z];
    }
   }
   c =parseInt(c) - 10 
   c = c + "px";
   
   document.getElementById("para").style.fontSize = c;
   
console.log(para.style.fontSize)
   // myImg.style.fontSize = (currWidth + 50) + "px";
}














/****************************Chapter 58 - 67 **************/
/************************** DOM ***************************/
document.write("<b>Question 1</b> <br><br>");
//  part i
 var element = document.getElementById("main-content");

// part ii
var ch=element.children;
for(i=0;i<ch.length;i++)
{
document.write(ch[i].innerHTML+"<br>");
}

// part iii 
var ele=document.getElementsByClassName("render");
for(i=0;i<ele.length;i++)
{
document.write(ele[i].innerHTML+"<br>");
}

// part iv
var elem=document.getElementById("first-name");
elem.value="Hira";
document.write("<br>"+elem.value+"<br>");

// part v
var elem=document.getElementById("last-name");
elem.value="Khan";
document.write("<br>"+elem.value+"<br>");

var elem=document.getElementById("email");
elem.value="Hirak0373@gmail.com";
document.write(elem.value+"<br>");

//QUESTION 02

document.write("<br><b>Question 2</b> <br><br>");

//part i
var x = document.getElementById("form-content").nodeType;
document.write("<br><br>Node type of form-content is: "+x+"<br>");

//part ii

var y = document.getElementById("lastName").nodeType;
document.write("<br><br>Node type of lastName is: "+ y+"<br>");
var ch=document.getElementById("lastName").childNodes.length;
for(i=0;i<ch;i++)
{
    var chnt=document.getElementById("lastName").childNodes[i].nodeType;
    document.write("Node type of lastName child node is: "+chnt+"<br>");
}
// part iii
document.getElementById("lastName").textContent="Last Name : Khan";

// part iv
var chldele = document.getElementById("main-content").firstElementChild;
document.write("<br><br>Main-content first child element text: "+chldele.textContent+"<br>");

var childele = document.getElementById("main-content").lastElementChild;
document.write("Main-content last child element text: "+childele.textContent);

// part v
var x = document.getElementById("lastName").previousElementSibling.innerHTML; 
document.write("<br><br>Previous sibling of lastName is:   "+x);
var x = document.getElementById("lastName").nextElementSibling.innerHTML; 
document.write("<br>Next sibling of lastName is:    "+x);

// part vi
var nt=document.getElementById("email").nodeType;
var pn=document.getElementById("email").parentNode.nodeName;

document.write("<br><br>Node type of element with ID email is: "+nt);
document.write("<br>Parent Node of element with ID email is: "+pn);
