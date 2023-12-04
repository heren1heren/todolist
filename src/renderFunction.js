
export function renderList(lists,selectedListId,listsContainer) {

    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add("list-name");
        listElement.dataset.listId = list.id
        listElement.innerText = list.name;
    if (list.id === selectedListId) {
     listElement.classList.add('active-list')
    }
    listsContainer.appendChild(listElement);
})    
}
export function createList(name) { //create new list with id, name, and its arr
    return {id: Date.now().toString(), name: name, tasks: []}
}

export  function renderTaskCount(selectedList,listCountElement) {
    const incompleteTasksCount = selectedList.tasks.filter(task => {
        !task.isMarked
    }).length
    const taskString = incompleteTasksCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTasksCount} ${taskString} remaining`
    console.log(incompleteTasksCount);
} 
// tasks
 

export function renderTasks(selectedList,tasksContainer) {
    
    selectedList.tasks.forEach(task => { 
        let source = taskStructure(task);
        tasksContainer.innerHTML += source;

    })
 }
 export class Task {
    constructor(name,description,dueDate) {
      this.id = Date.now().toString();
      this.dueDate = dueDate;
      this.name = name;
      this.description = description;
      this.isDeleted = false; // 
      this.isMarked = false;
      this.isImportant = false;
    }
 }
 export function createTaskIn(taskArray) {

    const titleInput = document.querySelector('#title-input').value;
    const descriptionInput = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#dueDate-input').value;
    const task = new Task(titleInput,descriptionInput,dueDate);
    taskArray.push(task);
}    



 // other low level function

export function clearElement(element) {
    while (element.firstChild) {
     element.removeChild(element.firstChild);
    }
 }

 function taskStructure(task) {
    return ` <div id=" ${task.id}"class="card"> 

    <button class="check-btn"></button>
    <div class="text-wrapper">
      <h3>${task.name}</h3>
      <h4>${task.description}</h4>
     </div>
<div class="button-wrapper">
  
  <p>Due: ${task.dueDate}</p>
      <i id="${task.id}"  class="fa-solid fa-trash"></i>
     <i  id="${task.id}" class="fa-regular fa-star  card-star"></i>
</div>

<div class="task-description-field"> ${task.description}</div>
   </div>
 <hr>`
}