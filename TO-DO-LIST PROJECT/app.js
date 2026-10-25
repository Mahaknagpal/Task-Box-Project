const input = document.querySelector('#task');
const button = document.querySelector('#ADD');
const button2 = document.querySelector('#CLEAR');
const addtask = document.querySelector('.task-area');
const taskCounter = document.querySelector('#taskCounter');
let count = 0;
// let task = document.createElement("div");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Save task in local storage
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


 button.addEventListener('click' , function(e){
    
    // task.innerText = input.value;
    // addtask.append(task); 

    if(input.value === ""){
        console.log("empty");
    }
    else{
        const newTask = document.createElement("li");
         newTask.innerText = input.value;
         addtask.append(newTask);
         input.value = "";
    

//delete button

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "DELETE";
newTask.append(deleteBtn);
addtask.append(newTask);
count++;
taskCounter.innerText = `Task Added : ${count}`;

//delete task
deleteBtn.addEventListener('click' , function(){
    newTask.remove();

    //local storage
    const index = tasks.indexOf(newTask.firstChild.textContent);
        tasks.splice(index, 1);
        saveTasks();

    count--;
    taskCounter.innerText = `Task Added : ${count}`;
});

button2.addEventListener('click',function(e){
addtask.innerHTML = " ";

//local storage
tasks = [];
localStorage.removeItem("tasks");
console.log("empty");

});


//edit button
const editBtn = document.createElement("button");
editBtn.innerText = "EDIT";
newTask.append(editBtn);

// edit task
editBtn.addEventListener("click", function() {

            let updatedTask = prompt(
                "Edit your task:",
                newTask.firstChild.textContent
            );

            if (updatedTask !== null && updatedTask.trim() !== "") {
                
                // LOCAL STORAGE
                const index = tasks.indexOf(newTask.firstChild.textContent);
                tasks[index] = updatedTask;
                saveTasks();


                newTask.firstChild.textContent = updatedTask;
            }

        });

        input.value = "";
    }
});
    





//add task from enter key
input.addEventListener('keydown' , function(e){
    if(e.key == "Enter"){
        button.click();
    }
});



