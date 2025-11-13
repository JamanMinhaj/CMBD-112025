// alert("to do app");

// selectors

const form = document.getElementById("form");
const formInput = document.getElementById("input");
const submit = document.getElementById("submit");
const taskListDiv = document.getElementById("task_list");

function createTask(){
    const inputValue = formInput.value.trim();
    formInput.value = ""
    if(inputValue){
        console.log(inputValue);
    }else {
        alert("please Input something to go")
    }
    createTaskList(inputValue);
}

function createTaskList(inputValue){
    taskListDiv.innerHTML += `
    <div id="task_list">
        <div class="task p-3 rounded-lg flex justify-between items-center border mt-10">
            <div class="h3"id="text">${inputValue}</div>
            <div class="button flex gap-x-1">
                <button class="text-white p-2 rounded-md bg-red-500 cursor-pointer">delete</button>
                <button class="text-white p-2 rounded-md bg-green-500 cursor-pointer">edit</button>
            </div>

        </div>
    </div>
    `
}
submit.addEventListener("click",createTask);









