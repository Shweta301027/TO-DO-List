
const btn = document.querySelector('#add-btn');
const input = document.querySelector('#todo-item');
const ul = document.querySelector('#todo-list');

const notes = []


function updateOrderedList(){
    const newListItem = document.createElement('li');
    newListItem.innerText = input.value;

    ul.appendChild(newListItem);
}
btn.addEventListener('click', ()=> {
    updateOrderedList();
})