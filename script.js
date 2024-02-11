// NaN = not a number //
// ||, &&, <,> , !, >=, <=, if else, boolean //
// || => yoki => or => + //
// true , false => boolean 
// true => 1
// false => 0


// if( age1 > age2){
//     alert(`${age1} bigger ${age2}`)
// }




// && => and => va => *

// let age1 = +prompt("Write a random number")
// if (age1 % 2 === 0) {
//     alert(age1 + " : Juft  ")
// } else{
//     alert(age1 + " : Toq    ")         
// }

let num1 = +(prompt("Write first number:"));
let num2 = +(prompt("Write second number:"));

if (!isNaN(num1) && !isNaN(num2)) {
    let trebovanie = confirm("\n 1) If you want plus the number  press 'OK' \n 2) If you want minus the number press 'Отмена'");

    if (trebovanie) {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    }
} else {
    console.log("Error, Your write incorrect numbers. Please write true numbers!");
}







