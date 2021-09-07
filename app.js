let miles = Number(prompt("What is the estimated number of miles that you drive in a year? (Please don't use commas)"));
let cost = Number(prompt("What is the current cost of gasoline per gallon?(Do not include $)"));

function writer (cost, miles, rating){
    let ele = document.createElement("div");
    let gallons = miles/rating
    let adj = cost * gallons
    let final = Math.round(adj*100)/100;
    ele.innerHTML = "To drive a car with an MPG rating of "+rating+" for "+miles+" miles at $"+cost+" per gallon it would cost $"+final;
    document.body.querySelector( ".write").appendChild(ele);
}

writer(cost, miles, 12);
writer(cost, miles, 17);
writer(cost, miles, 26);
writer(cost, miles, 29);

document.body.querySelector(".myBtn").addEventListener("click", function(){
    document.body.querySelector(".write").innerHTML=" "
    let newMiles = Number(prompt("What is the estimated number of miles that you drive in a year? (Please don't use commas)"));
    let newCost = Number(prompt("What is the current cost of gasoline per gallon?(Do not include $)"));
    writer(newCost, newMiles, 12);
    writer(newCost, newMiles, 17);
    writer(newCost, newMiles, 26);
    writer(newCost, newMiles, 29);
})


