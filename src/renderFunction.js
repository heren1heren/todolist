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
 