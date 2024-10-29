


const addTaskInput$$ = document.querySelector("input");  // input for task adding
const addTaskButton$$ = document.querySelector(".btn-add"); // add task button
const mainTasksList$$ = document.querySelector("ul");  // father list of tasks
const noTasksPending$$ = document.querySelector(".empty");  // this div needs to be shown when no tasks are visible and not be shown when tasks are added

// ------------------------------------- APPROACH ----------------------------------
// ------ ADDTASKINPUT -----
// 1.Recives a text expecting it to be a task
// 2. Task needs to be pushed inside the list whit a delete button next to it

// ------- ADDTASKBUTTON ----
// 1. Needs to push the input content inside the main tasks list
// 2. If input empty alert, please introduce some text
// 3. addeventlistener click

// ------- MAINTASKSLIST -----
// 1. Tasks need to be shown (CREATE NEW ARRAY?)
// 2. Delete button needs to be created in each task (LOOP)
// 

// ------- NOTASKSPENDING -----
// Needs to be seen when no tasks are pending but disappear when tasks added.



addTaskButton$$.addEventListener("click", (e) => {
    
    e.preventDefault(); // we have the button inside a form element in html, when there's a button inside a form, everytime you press the button the programm undestands that something needs to be send, so it does like a little refreshing of the site. We do prevent this from happen with prevenDefault.
    let taskInputValue = addTaskInput$$.value; // we keep the value introduced in a variable

    if(taskInputValue !== ""){   // if the input value is not empty proceed

        let liTaskList = document.createElement("li");   // create a li element
        let pTask = document.createElement("p"); // create a p element

        pTask.textContent = taskInputValue;    // asign the value of input to the created p element

        liTaskList.appendChild(pTask);  
        addDeleteButton();           // push p into li
        mainTasksList$$.appendChild(liTaskList);    // push it inside the father list ul

        addTaskInput$$.value = "";  //  this cleanes the input after the task is added
        

    }else{ 
        alert("No se puede añadir una tarea inexistente, nuestra IA está en proceso de mejora para poder leer mentes, mientras tanto le rogamos proporcione la información requerida.")
    }
});

function addDeleteButton(){
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btnDelete"

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        mainTasksList$$.removeChild(item);
        liTaskList.appendChild(deleteBtn)
    })
}






