//list
export default function renderList() {
    
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

export default function renderTaskCount(selectedList) {
    const incompleteTasksCount = selectedList.tasks.filter(task => {
        !task.complete
    }).length
    const taskString = incompleteTasksCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTasksCount} ${taskString} remaining`
} 
// tasks
function taskStructure(task) {
    return ` <div class="card"> 

    <button class="check-btn"></button>
    <div class="text-wrapper">
      <h3> ${task.name}</h3>
      <h4>${task.description}</h4>
     </div>
<div class="button-wrapper">
  
  <p> ${task.dueDate}</p>
      <i class="fa-solid fa-trash"></i>
     <i class="fa-regular fa-star  card-star"></i>
</div>

<div class="task-description-field"> ${task.description}</div>
   </div>
 <hr>`
}

function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => { // access current array task
    

    })
 }
 export class Task {
    constructor(name,description,dueDate) {
      this.id = Date.now().toString();
      this.dueDate = dueDate;
      this.name = name;
      this.description = description;
      this.delete = false; // 
    }
 }
 export function makeTaskIn(taskArray) {

    const titleInput = document.querySelector('#title-input').value;
    const descriptionInput = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#dueDate-input').value;
    const task = new Task(titleInput,descriptionInput,dueDate);
    taskArray.push(task);
}    



 // other low level function
export function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_KEY, selectedListId)
}

export function clearElement(element) {
    while (element.firstChild) {
     element.removeChild(element.firstChild);
    }
 }
 