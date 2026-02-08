 
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

function yearlyconst(input ){
    let incrimentTotal = 0; 
    let totalSel = 0 ;
    for( let emp of input){
        let r = emp.experience * emp.increment
        incrimentTotal = incrimentTotal + r
         totalSel = totalSel + emp.starting
        }
        return totalSel + incrimentTotal
}



let monthlyCost = yearlyconst(employees)
console.log("total salary has to be provided by the company in a month :",monthlyCost)