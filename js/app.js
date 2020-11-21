document.addEventListener('DOMContentLoaded', () => {
    
    console.log("content loaded");

    const newItemForm = document.querySelector('#new-item-form')
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const delButton = document.querySelector('#delete-all');
    delButton.addEventListener('click', handleDelButtonClick);

    // Text Input
    // const textInput = document.querySelector('#name');
    // textInput.addEventListener('input', handleInput);

    // Integer Input
    // const integerInput1 = document.querySelector('#age');
    // integerInput1.addEventListener('input', handleInput);

    // Integer Input
    // const integerInput2 = document.querySelector('#rings');
    // integerInput2.addEventListener('input', handleInput);

    // Selector
    // const selectorInput = document.querySelector('#qb-team');
    // selectorInput.addEventListener('input', handleInput);

})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();  // this method seems to prevent the info from instantly disappearing after you hit save.  Ask for more clarity in 1-2-1.

    const qbListItem = createQbListItem(event.target);

    const qbList = document.querySelector("#qb-list");
    qbList.appendChild(qbListItem);

    event.target.reset();  // this method clears the input fields so that they are ready for the next list to be populated, otherwise you have to delete the previous entires or type over them.
}

const createQbListItem = function (form) {
    const qbListItem = document.createElement("li");
    qbListItem.classList.add("qb-list-item");

    const name = document.createElement("h4");
    name.textContent = form.name.value;
    qbListItem.appendChild(name);

    const age = document.createElement("h4");
    age.textContent = form.age.value;
    qbListItem.appendChild(age);

    const rings = document.createElement("h4");
    rings.textContent = form.rings.value;
    qbListItem.appendChild(rings);

    const team = document.createElement("h4");
    team.textContent = form.team.value;
    qbListItem.appendChild(team);
    // didn't like it when I had qbTeam - find out why? Had to change everything to "team" instead.

    return qbListItem;
}

const handleDelButtonClick = function (event) {
    const qbList = document.querySelector("#qb-list");
    qbList.innerHTML = "";
}