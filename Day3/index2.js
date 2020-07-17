//<!..Question 2:
//Write a program which will take OS name and version from the user separated by a space.then
//log the OS name and version on the console.
//Input:"Android 9"
//Output:the  OS name is Android and version  is 9..>


console.log("Answer 2");
//taking the input from user and typecasting it into string becoz to fix return error no need to typecast in string
let user_input=String(prompt('Enter OS name and version separated by a space.'));

//splitting the input by space
let user_input_array=user_input.split(" ");

//aceessing element of array as index0 as os name and index1 as version name
console.log(`The OS name is '${user_input_array[0]}'  and version is '${user_input_array[1]}'.`);



