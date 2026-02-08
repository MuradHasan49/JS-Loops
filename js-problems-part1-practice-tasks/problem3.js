
function counVowels(str) {
    let vowels = "aeiou"
    let count = 0 ;
    for( let s of str){
        if(vowels.includes(s)){
            count = count + s.length
        }
    }
    return count
}

let result = counVowels("Below is a logic review, rating, edge-case testing, and improvement suggestions for each function. I’ll be strict and technical, like a code reviewer in an interview or contest.")
console.log(result)
