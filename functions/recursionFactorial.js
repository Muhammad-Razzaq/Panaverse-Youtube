function factorial(num){
    console.log(num);
    if(num == 0){
        return 1
    }
    else{
        return num * factorial(--num)
    }
}

console.log(factorial(5));