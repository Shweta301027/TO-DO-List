
const btn = document.querySelector('#add-btn');
// const input = document.querySelector('#todo-item');
const ul = document.querySelector('#todo-list');
const error = document.querySelector('.error');
const success = document.querySelector('.success')
 
btn.addEventListener("click", addTaskList)

function addTaskList(e){
    const currBtn = e.currentTarget;
    const currInput = currBtn.previousElementSibling;
    const currTask = currInput.value;

if(currInput.value == ""){
    error.innerText = "Please Write Task";
    error.classList.add("error");
    setTimeout(()=>{
        error.innerText =""
    },1000);
    return;
}

    const newListItem = document.createElement('li');
    newListItem.className = "list-group-item";
    newListItem.innerHTML = `${currTask} <button id="delete" onclick= "deleteTask(this);">Delete</buttom>`;

    ul.appendChild(newListItem);
    currInput.value = ""
    
}

function deleteTask(ele){
    ele.parentElement.remove();
    success.innerText = "Task deleted Successfully";
    success.classList.add("success");
    setTimeout(() =>{
        success.innerText =""
    },2000);
}