let age = 29;
let over18;
if(age < 18){
    console.log(`No alcohol`);
    over18 = false;
}else{
    console.log(`Cheers`);
    over18 = true;
}
console.log(over18);

over18 = (age < 18) ? false : true;

console.log(over18);