//<!Question 3:
//write a program to take marks as input from the user and grade him accordingly.use coditional
//statement. aslo the same code  using switch or ternary
//Input:50
//Output:Marks are 50 and grade is B..>

console.log("Answer 3");
let marks= Number(prompt("Enter your marks between 0-100"));
//solving using ladder if/else if ladder
console.log("if,else if,else ladder");
if(marks<50){
    console.log(`marks are '${marks}' and grade is 'F' `);
}else if(marks >=50 && marks<=59){
    console.log(`marks are '${marks}'and grade is 'E'`);
}else if(marks>=60 && marks<=69){
    console.log(`marks are '${marks}'and grade is 'D'`);
}else if(marks>=70 && marks<=79){
    console.log(`marks are '${marks}'and grade is 'C'`);
}else if(marks>=80 && marks<=89){
    console.log(`marks are '${marks}'and grade is 'B'`);
}else if(marks>=90 && marks<=100){
    console.log(`marks are '${marks}'and grade is 'A'`);
}else  {
    console.log(`marks are '${marks}'and pls type between 0-100`);
}
    //using ternary operator
    console.log("Ternary operator");
    let result=
    marks<50
    ? `marks are'${marks}' and grade is 'F'`
    :marks >=50 && marks<=59
    ? `marks are '${marks}'and grade is 'E'`
    :marks>=60 && marks<=69
    ? `marks are '${marks}'and grade is 'D'`
    :marks>=70 && marks<=79
    ? `marks are '${marks}'and grade is 'C'`
    :marks>=80 && marks<=89
    ? `marks are '${marks}'and grade is 'B'`
    :marks>=90 && marks<=100
    ? `marks are '${marks}'and grade is 'A'`
    :`marks are '${marks}'and pls type between 0-100`;
    console.log(result);
     //switch case
     //syntax:
     /* switch(true){
         case 1:
             code here;
             break;
             case 2:
                 code here;
                 break;
                 default:
                     code here;
     }
     */

     switch(true){
         case(marks<50):
         console.log(`marks are'${marks}' and grade is 'F'`);
         break;
         case(marks >=50 && marks<=59):
         console.log(`marks are '${marks}'and grade is 'E'`);
         break;
         case(marks>=60 && marks<=69):
         console.log(`marks are '${marks}'and grade is 'D'`);
         break;
         case(marks>=70 && marks<=79):
         console.log(`marks are '${marks}'and grade is 'C'`);
         break;
         case(marks>=80 && marks<=89):
         console.log(`marks are '${marks}'and grade is 'B'`);
         break;
         case(marks>=90 && marks<=100):
         console.log( `marks are '${marks}'and grade is 'A'`);
         break;
         default:
             console.log(`marks are '${marks}'and pls type between 0-100`);
             break;
     }