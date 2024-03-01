//Assignment#4

//var heading ="Rules for naming JS variables"
document.write("<h1> Rules for naming JS variables </h1>")

document.write("<br> Variable names can only contain,numbers,$ and For example:$my_1stVariable")
document.write("<br> Variable must begin with a letter,$ or _ , For example:$name,_name or name")
document.write("<br> Variable names are case sensitive")
document.write("<br> Variable names should not be JS Keywords")




//Assignment#5

//Q1  sum of two variable

var x = 3
var y = 5
var z = x + y
document.write("<br><br>Sum of 3 and 5 is " +z)

//Q2 subtraction of two variable

var z = x - y
document.write("<br><br>Subtraction of 3 and 5 is "+z)

//Q3 multiplication of two variable

var z = x * y
document.write("<br><br>Multiplication of 3 and 5 is "+z)

//Q4 divison of two variable

var z = x / y 
document.write("<br><br>Divison of 3 and 5  is "+z)

//Q5 Modulus of two varibale 

var z = x % y
document.write("<br><br>Modulus of 3 and 5 Remainder  is "+z)

//Q6 Increment the variable

x++
document.write("<br><br>Initail value: 3 After increment is "+x)

// Q7 Decrement the variable

x--
document.write("<br><br> After decrement is "+x)

// Q8 write a script to store one movie ticket 600 pkr calculate the cost of buying 5 tickets?

var price = 600
var ticket = 5
var output = price * ticket
document.write("<br><br> Total cost to buy 5 ticket to a movie is "+output)

// Q9 write a script multiplication table

var table = 2
document.write("<br><br><h1>Table of 2</h1>")

document.write("<br><br>2 x 1 = "+table*1)
document.write("<br><br>2 x 2 = "+table*2)
document.write("<br><br>2 x 3 = "+table*3)
document.write("<br><br>2 x 4 = "+table*4)
document.write("<br><br>2 x 5 = "+table*5)
document.write("<br><br>2 x 6 = "+table*6)
document.write("<br><br>2 x 7 = "+table*7)
document.write("<br><br>2 x 8 = "+table*8)
document.write("<br><br>2 x 9 = "+table*9)
document.write("<br><br>2 x 10 = "+table*10)

// Q10 The Temperature Converter


var celsius = 25
var fahrenheit = (celsius*9/5)+32
document.write("<br><br><h3>Temperature converter</h3>")
document.write("<br><br> Farhrenheit "+fahrenheit)

var Farhrenheit = 77
var celsius = (fahrenheit-32)*5/9
document.write("<br><br> celsius "+celsius)

// Q11 e-commerce website

document.write("<br><br><h1>Shopping Cart</h1>")
document.write("<br>Price of item 1 is 650")
document.write("<br>Quantity of item 1 is 3")
document.write("<br>Price of item 2 is 100")
document.write("<br>Quantity of item 2 is 7")
document.write("<br>Shipping Charges 100")

var item_1 = 650
var item_2 = 100
var quantityOfitem1 = 3
var quantityOfitem2 = 7
var shipping = 100
var order_1 = item_1*quantityOfitem1
var order_2 = item_2*quantityOfitem2
var total = order_1+order_2+shipping
document.write("<br><br>Total cost of your order is "+total)

// Q12 Marks Sheet

document.write("<br><br><h1>Marks Sheet</h1>")
document.write("<br><br>Total marks: 980<br> Marks obtained: 804")

var marks = 980
var studentMarks = 804
var percentage = studentMarks/marks*100
document.write("<br><br>percentage:"+percentage)

// Q13 convert the currency

document.write("<br><br><h1>Currency in PKR</h1>")

// 1 us dollar = 104.80 pakistani rupee
// 1 Saudi riyal = 28 pakistani rupee

var usDollar = 10
var pakistaniRupee = 104.80
var pkr = usDollar*pakistaniRupee
var saudiRiyal = 25 
var pakistani = 28
var rupee = saudiRiyal*pakistani
var currency = pkr+rupee
document.write("<br><br>Total Currency in PKR: "+currency)

// Q14 Age calculate

document.write("<br><br><h1>Age Calculator</h1>")

var currentYear = 2016
var birthYear = 1992 
var age = currentYear-birthYear
document.write("<br><br>Current Year: 2016 <br> Birth Year: 1992")
document.write("<br><br>Your Age is: "+age)

// Q15 The Geometrizer

document.write("<br><br><h1>The Geometrizer</h1>")

var radius = 20
var circumfere = 2*3.142*radius
var area = 3.142*radius*radius

document.write("<br><br>Radius of a circle: 20")
document.write("<br><br>The circumference is: "+circumfere)
document.write("<br><br>The area is: "+area)

// Q16 Supply Calculator 

document.write("<br><br><h1>The Lifetime Supply Calculator</h1>")
document.write("<br><br>Curren age: 15 <br> Maximum age: 65<br> Amount of snacks per day: 3")

var snack = "chocolate"
var currentAge = 15
var maximumAge = 65
var amountPerday = 3
var age = maximumAge-currentAge
var days = age*365
var ripe = days*amountPerday
document.write("<br><br>You will need " +ripe+ " chocolate chip to last you until the ripe old age of 65")

// Assignment#6


// Q1

var a = 2
var b = 1
var result = --a - --b + ++b + b--
document.write("<br><br>a = 2 <br> b = 1")
document.write("<br><br>Result "+result)












