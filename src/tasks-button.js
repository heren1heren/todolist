
const markButtons = document.querySelectorAll('.check-btn');
const deleteButtons = document.querySelectorAll('.fa-trash');
const importantButtons = document.querySelectorAll('.card-star');
const descriptionFields = document.querySelectorAll('.task-description-field');
const cardRegion = document.querySelectorAll('.card');
const tasksContainer = document.querySelector('#tasks-container')
const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_KEY = 'task.selectedListId'

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_KEY)

// toggle css style doesn't work 
// toggle isMarked for the element inside the array will work

tasksContainer.addEventListener('click', (e) => {
        const currentTarget = e.target;
        const selectedList = lists.find(list => list.id === selectedListId);
        // console.log(selectedList);
        markBtnHandler(currentTarget,e,selectedList);
        deleteBtnHandler(currentTarget,e,selectedList);
        importantBtnHandler(currentTarget,e,selectedList);
        changeTasksStatus(selectedList,e)
})




 function markBtnHandler(currentTarget,e,selectedList) {
        
    if (currentTarget.classList.contains('check-btn')) {
 
         selectedList.tasks.forEach(task => {
              if(task.id = currentTarget.closest('.card').id) {
                 task.isMarked = !(task.isMarked);
                //  console.log(task);
              }           
          })

          e.stopImmediatePropagation();
    }
    

 }

 function deleteBtnHandler(currentTarget,e,selectedList) {
          
    if (currentTarget.classList.contains('fa-trash')) {
        selectedList.tasks.forEach(task => {
            if(task.id = currentTarget.closest('.card').id) {
               task.isDeleted = true;
               
            }           
        })
        e.stopImmediatePropagation();
    }
 }

 function importantBtnHandler(currentTarget,e,selectedList) {
    if (currentTarget.classList.contains('card-star')) {

        selectedList.tasks.forEach(task => {
            if(task.id = currentTarget.closest('.card').id) {
               task.isImportant = !(task.isImportant)
            }           
        })
        e.stopImmediatePropagation();
    }
 }

 function changeTasksStatus(selectedList,e) {
    // check if task.isimportant -> do this
         selectedList.tasks.forEach(task => {

            if (task.isDeleted) {
                //do something
            }
            if ( task.isImportant) {
                //do something
            }
            if ( task.isMarked) {
                //do something
            }
         })      
    
 }