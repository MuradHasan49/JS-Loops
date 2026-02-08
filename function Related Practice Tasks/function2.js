function check(input) {
    if(input % 2 === 0){
        let result = input * 2;
        return result;
    }else{
        return input / 2
    }
}

console.log(check(3))