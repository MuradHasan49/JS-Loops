
let bin = "001283498052901958239"

function count_zero(binary){
    let resultIs = []
    for(let bi of binary){
        if( bi == 0){
             resultIs.push(bi)
        }
    }
    return resultIs.length
}

console.log(count_zero(bin))