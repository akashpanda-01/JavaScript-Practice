//When Adding a new task
taskElement.classList.add('task-item');


//when Deleting A task
taskElement.classlist.add('task-delete');
setTimeout(()=> {
    taskElement.remove ();
}, 300); //Watch Animation duraction

// get the add task button element .
const addTaskButton = document.querySelector('#add-task-btn');

// Add event listener for the add task button click
addTaskButton.addEventListener('click', function(e){
    //prevent default for the add task button click
    e.preventDefault();
//get Input value 
    const taskTitle = document.querySelector('#task-title').value; 
    const taskDescription = document.querySelector('#task-description').value;
    const taskPriority = document.querySelector('#task-priority').value;
    const taskDueDate = document.querySelector('#task-due-date').value;

    //create a new task object
    const newTask ={
        id : Date.now(),
        title: taskTitle,
        Description: taskDescription,
        priority: taskPriority,
        dueDate: taskDueDate,
        completed: false
    };
})
// Add the new tasks to task array
tasks.push(newTask);

//save task to local storage
saveToLocalStorage();

// Re-render the task list 
renderTaskList();

// cleare input field
document.querySelector('#task-title').value ='';
document.querySelector('#task-description').value ='';
document.querySelector('#task-prioriyy').value ='normal';
document.querySelector('#task-due-date').value ='';

// optional: provide visual feedback
showToast('Task Added successfully !');


//Get the task list container.
const taskList = document.getElementById('task-list');

//add event listener foe edit vutton clicks
taskList.addEventListener('click', function(e){
    if (e,EventTarget.classList)
})