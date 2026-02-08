const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed' , 'Murad Hasan'];

function smallName(names){
    let check = names[0]
    for( let name of names){
        if( name.length > check.length ){
           check = name

        }
    }
    return check
}

let sname = smallName(heights2)
console.log(sname)