import {format} from 'date-fns'
import {makeCard,checkStatusCardArray, makeList, cardClickHandler} from './card-component.js'
import  {save,renderList,renderTaskCount,renderTasks,Task,makeTaskIn}from './renderFunction.js'
const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_KEY = 'task.selectedListId'

// let fixedLists = [{name: 'My Home', 
//                    tasksCount: 0, //,
//                    arr: [],},
//                    {name: 'To do',
//                    tasksCount: 0,
//                    arr: [],
//                 },
//                 {name: 'Important',
//                 tasksCount: 0,
//                 arr: [],
//             },
//         ];

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_KEY)

const  listsContainer = document.querySelector('.list-wrapper')        
const listSubmitBtn = document.querySelector('#list-btn');
const listForm = document.querySelector('#list-form');
const deleteListButton = document.querySelector('[data-delete-list-button')

const listDisplayContainer = document.querySelector('[data-list-display-container');
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector('[data-list-count');
const tasksContainer = document.querySelector('.cards-container');
const taskTemplate = document.querySelector('#task-template')

deleteListButton.addEventListener('click', (e) => {
    // using filter to filter lists arr that doesn't contain current list
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null;
    saveAndRender();
})
listsContainer.addEventListener('click',(e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
       selectedListId = e.target.dataset.listId;
       saveAndRender();
    }

} ) 


listSubmitBtn.addEventListener('click', (e) => {
    const listName = document.querySelector('#list-input').value;
    
    if(!listForm.checkValidity()) 
{    e.preventDefault(); return}
     
       const list = createList(listName)
      lists.push(list);
       saveAndRender();
}) 
function createList(name) { //create new list with id, name, and its arr
    return {id: Date.now().toString(), name: name, tasks: []}
}


//     const pageTime = document.querySelector('#page-time');
//     function updateDateTime(element) {
//         const currentDate = new Date();

//         // Format the date and time as desired using date-fns
//         const formattedDateTime = format(currentDate, "EEEE, MMMM do yyyy, h:mm a");
        
//         // Update the content of the <p> tag with the current date and time
//         element.textContent = formattedDateTime;
//     }
//     updateDateTime(pageTime);
    
const CardSubmitBtn = document.querySelector('.card-btn');
const taskForm = document.querySelector('#task-form');
CardSubmitBtn.addEventListener('click', (e) => { 
    
    if(!taskForm.checkValidity()) {
        e.preventDefault();
    } else {
    const selectedList = lists.find(list => list.id === selectedListId)
    makeTaskIn(selectedList.tasks);

}
  renderTasks();
})


   

function render() {
                         
    clearElement(listsContainer);
    renderList();


    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null) {
        listDisplayContainer.style.display = 'none';
    } else {
        listDisplayContainer.style.display = '';
        listTitleElement.innerText = selectedList.name;
        renderTaskCount(selectedList) ;
        clearElement(tasksContainer) 
        renderTasks(selectedList);
    }

  
}   
 function saveAndRender() {
    save();
    render();
}

   
     
    










const ListCLicker = document.querySelector('#list-clicker');
const listModal = document.querySelector('[data-list-dialog]')
ListCLicker.addEventListener('click', () => {
    listModal.showModal()
    
})

