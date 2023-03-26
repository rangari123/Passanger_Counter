// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;

const incrementBtn = document.getElementById("increment-btn");
const decreaseBtn = document.getElementById("decreament-btn");
const increaseCount = document.getElementById("count-el");
const saveBtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");

function increment() {
  count+=1;
    increaseCount.textContent = count;
}
function decrement(){
   if(count>0){
        count--;
    }
    increaseCount.textContent = count;
    
}
function save(){
    
    let stringCount = count + " - ";
    saveEl.textContent +=stringCount;
    // put zero again as save button click
    count=0;
    increaseCount.textContent = 0;
}

