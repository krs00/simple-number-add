// BUSINESS LOGIC

function countUpBy(countBy, countTo){
    let Array = []

    for (let index = countBy; index <= countTo; index += countBy) {
        
        console.log(index)
        Array.push(index)
        console.log(Array)
        return Array 

    }
};



// UI LOGIC
// SELECT DOM NODES
const countByDisplay = document.getElementById("display-countby")
const countToDisplay = document.getElementById("display-countto")
const arrayDisplay = document.getElementById("display-arr")
const submitBtn = document.getElementById("submit")

function runForm (event) {
    event.preventDefault();

    const countBy = document.getElementById("countby").value
    const countTo = document.getElementById("countto").value

    console.log(countBy);
    displayVal(countBy, countTo);
}
function displayVal(countBy, countTo){ 
    countByDisplay.innerText = `Count By Number: ${countBy}`
    countToDisplay.innerText = `Count To Number: ${countTo}`
}
const form = document.getElementById("count-form");
form.addEventListener("submit", runForm);

