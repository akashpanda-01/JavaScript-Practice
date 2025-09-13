{
// Find Factorial of a given number 5.
    let num = 1;
    for(let i = 1; i <= 5; i++){
        num = num * i;
        console.log(num);
    }
}
{
    //Reverse a given number 123.
    let n = 123;
    let temp = n;
    let reverse = 0;
    for(let i = 1; temp >= 0; i++){
        reverse = reverse * 10 + (temp % 10);
        temp = temp - (temp % 10) / 10;
    };
    console.log(reverse);
    
}