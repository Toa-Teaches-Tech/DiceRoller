// Name: Toa Pita
// Description: Simulate die rolls

function toggleDieHold(event){
    // Grab the data active attr and toggle it
    let die = event.target;
    let currentActiveStatus = die.getAttribute("data-active");
    let newStatus = currentActiveStatus==="true"?false:true;
    die.setAttribute("data-active",newStatus);

    // Apply the held class accordingly
    if(newStatus){
        die.classList.remove("held")
    }else{
        die.classList.add("held")
    }

}


function rollDice(){
    // Grab all active dice
    let allActiveDice = document.querySelectorAll('[data-active="true"]');

    // Roll the dice and update src and alt
    for(let die of allActiveDice){
        let num = Math.floor(Math.random()*6)+1
        die.setAttribute("src",`images/${num}.png`);
        die.setAttribute("alt",`Die ${num}`);
    }
}





function createItem(){
    let item = document.querySelector("input").value;
    let template = document.querySelector("template");
    let newItem = document.importNode(template.content,true);
// text-item
// remove-btn
    newItem.querySelector(".item-text").innerText = item;
    newItem.querySelector(".remove-btn").addEventListener("click",removeShoppingListItem);
    newItem.querySelector("li").addEventListener("click",removeShoppingListItem);

    document.querySelector("#shopping-list").appendChild(newItem)
}

function removeShoppingListItem(e){
    if(e.target.getAttribute("class")==="remove-btn"&&e.currentTarget.getAttribute("class")!="remove-btn"){
        e.currentTarget.remove();
    }
}

document.querySelector("#shopping-form>button").addEventListener("click",createItem)