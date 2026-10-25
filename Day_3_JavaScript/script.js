// while(10>5){
//     console.log('Infinite loop');
// }

// var a = 0;

// while(a<10){
//     console.log('another infinite loop')
// }

// var a = 0;

// while(a<10){
//     console.log(a);
//     a++
// }

// console.log('loop ke baad')

// var a = Number(prompt('Enter any number'));
// var b = 1;
// while(b <= a){
//     console.log(b);
//     b++
// }




// Even Number


// var a = Number(prompt('Enter any number'));
// var b = 1;
// while(b <= a){
//     if(b%2 == 0)
//         console.log(b);
//     b++
// }




// ODD Number


// var a = Number(prompt('Enter any number'));
// var b = 1;
// while(b <= a){
//     if(b%2 != 0)
//         console.log(b);
//     b++
// }



// Table of any number

// var num = Number(prompt('Enter any number'));
// var a = 1;
// while(a <= 10){
//     console.log( num+' X '+a+' = '+num*a );
//     a++
// }



// Do while loop

// do{
//     var pass = prompt('Enter password')
// }while(pass != '123')
//     console.log('Welcome');




// For loop


// for(var a = 1; a<=10; a++){
//     console.log(a);
// }


// var name = "Jay";
// var age = Number(20);
// var gender = "male";

// console.log(`Hero's name is ${name}, his age is ${age} and he is a ${gender}.`)




// Useful String Methods


// let s = "Hello, World!";

// console.log(s.length);              
// console.log(s.toUpperCase());       
// console.log(s.toLowerCase());       
// console.log(s.indexOf("World"));    
// console.log(s.includes("Hello"));   
// console.log(s.slice(0, 5));         
// console.log(s.substring(7, 12));    
// console.log(s.replace("World", "JS"));   
// console.log(s.split(", "));         
// console.log("   hi   ".trim());     
// console.log("abc".repeat(3));       
// console.log(s.startsWith("Hello")); 
// console.log(s.endsWith("!"));       
// console.log(s.charAt(0));           
// console.log(s[0]);    



// understanding (continue) functionality


// for (var a = 1; a<=10; a++){
//     if (a==5){
//         continue;
//     }
//     if (a==7){
//         continue;
//     }
//     console.log(a);
// }

console.log("Odd Number");

for (var a = 0; a<= 10; a++){
    if (a%2 == 0){
        continue;
    }
    console.log(a);
}

console.log("Even Numbers");

for (var a = 0; a <= 10; a++){
    if ( a%2 != 0 ){
        continue;
    }
    console.log(a)
}