/*
    SWAPPING TWO VARIABLES IN PYTHON

    a = 45
    b = 55

    a,b = b,a

    a1 = 21
    b1 = 79

    temp = a1
    a1 = b1
    b1 = temp 
    
*/


// Method1
var a1 = 55;
var b1 = 45;

console.log(`Before Swapping: a1=> ${a1} b1=> ${b1}`);
// Swapping

var tempVar = a1;
a1 = b1;
b1 = tempVar;

console.log(`After Swapping : a1=> ${a1} b1=> ${b1}`);


// Method2
var a2 = 31;
var b2 = 69;

console.log(`Before Swapping: a2=> ${a1} b2=> ${b1}`);

[a1 , b1] = [b1 , a1]

console.log(`Before Swapping: a2=> ${a1} b2=> ${b1}`);