let inputNote = document.getElementById("inputNote");
let btn = document.getElementById("addTodo");
btn.addEventListener("click",onSumbit)

function onSumbit(e){
    e.preventDefault();
    console.log(inputNote.value)
    createElement();
    inputNote.value = "";
}

function createElement(){
    let newDiv = document.createElement("div");
    newDiv.className = "newLi";
    newDiv.innerHTML = `
        <li>${inputNote.value}</li>
        <button id="edit" class="editTodo">Edit</button>
        <button id="delete" class="deleteTodo">Delete</button>
    `;
    
    let todoList = document.getElementById("addTodoList");
    todoList.appendChild(newDiv);

    
    let editBtn = newDiv.querySelector(".editTodo");
    let deleteBtn = newDiv.querySelector(".deleteTodo");
    
    editBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("editTodo")){
            let noteElement = e.target.parentNode.querySelector("li");
            inputNote.value = noteElement.textContent.trim();
            newDiv.remove();
        }
    });

    deleteBtn.addEventListener("click", (e) => {
        if(confirm("Are Sure to Delete")){
        newDiv.remove();
        }
    });
}