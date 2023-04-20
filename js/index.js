
function enable() {
    if (document.querySelector("#todo").value == 0) {
        alert("Please Enter a Task to Add")
    }else{
        document.querySelector(".newtask").innerHTML +=`
        <div class="tasks">
        <span id="taskname">
            ${document.querySelector("#todo").value}
        </span>
        <input type="date" name="" id="todoDate">
        <button id="delete">
        <i class="fa fa-trash-o" style="color: #fff;" onclick="deleteTodo()"></i>
        </button>
    </div>
      
        `
        document.querySelector(".newtask")
        ;  
    }
    
}

function deleteTodo() {
    let currentTask = document.querySelector(".tasks");
    currentTask.remove()
}