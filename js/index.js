
function enable() {
    if (document.querySelector("#todo").value == 0) {
        alert("Please enter a task")
    }else{
        document.querySelector(".newtask").innerHTML +=`
        <div class="tasks">
        <span id="taskname">
            ${document.querySelector("#todo").value}
        </span>
        <input type="date" name="" id="todoDate">
        <button id="delete">
        <i class="fa fa-trash-o" style="color: #fff;"></i>
        </button>
    </div>
        `
        document.querySelector(".newtask")
        ;
        let currentTask = document.querySelectorAll("#delete");


        
    }
    
}