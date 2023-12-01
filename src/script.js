import stylesheet from './style.css'
import { injectingCardStructure,injectingListStructure} from './InjectingHtmlStructure';
import {makeCard,checkStatusCardArray, makeList} from './card-component.js'
import {format} from 'date-fns'
/* our plans:
*/

let cards = [] 
 
const addCardClicker = document.querySelector('.new-card');
addCardClicker.addEventListener('click', () => {
    const dialog = document.querySelector('[data-card-dialog]')
    dialog.showModal();
})

const cardContainer = document.querySelector('.cards-container');

let idCount = 1; //?

const CardSubmitBtn = document.querySelector('.card-btn');
const taskForm = document.querySelector('#task-form');
CardSubmitBtn.addEventListener('click', (e) => { 
    //?
    if(!taskForm.checkValidity()) {
        e.preventDefault();
    } else {
    makeCard(cards,idCount++);
    console.log(idCount);
}
   injectingCardStructure(cardContainer,cards) // something wrong with injectingCardstructe
})
  



const article = document.querySelector('#tasks-container');

article.addEventListener('click', (e) => {
   const currentTarget = e.target;
  

   if (currentTarget.classList.contains('check-btn')) {
       currentTarget.closest('.card').classList.toggle('show-check');
       e.stopImmediatePropagation();
    }
    if (currentTarget.classList.contains('card-star')) {
        console.log(currentTarget.closest('.card').dataset.id);
        e.stopImmediatePropagation();

    }
    if (currentTarget.classList.contains('fa-trash')) {
        const  currentId = currentTarget.closest('.card').dataset.id -1;        

              cards[currentId].isDelete = true; //?
              idCount--;
        e.stopImmediatePropagation();
        checkStatusCardArray(cards)
        
    }
    injectingCardStructure(cardContainer,cards)
 })



const ListCLicker = document.querySelector('#list-clicker');
const listModal = document.querySelector('[data-list-dialog]')
ListCLicker.addEventListener('click', () => {
    listModal.showModal()
    
})
let fixedLists = [{name: 'My Home', 
                   tasksCount: 0, //,
                   arr: [],},
                   {name: 'To do',
                    tasksCount: 0,
                    arr: [],
                },
                   {name: 'Important',
                    tasksCount: 0,
                     arr: [],
                },
                ];

let lists = []
const listSubmitBtn = document.querySelector('#list-btn');
const listForm = document.querySelector('#list-form');
const listContainer = document.querySelector('.list-wrapper') 

listSubmitBtn.addEventListener('click', (e) => {
    const listName = document.querySelector('#list-input').value;

    if(!listForm.checkValidity()) {
       e.preventDefault();
    } else {
         makeList(lists,listName);
         console.log(listContainer);
        injectingListStructure(listContainer,lists);
    }
}) 


// add event for aside to add selectList once
 const sidebar = document.querySelector('#sidebar');
 const pageTitle = document.querySelector('#page-title')
 sidebar.addEventListener('click', (e) => {
     const currentTarget = e.target;
     const textContent = currentTarget.closest('P').textContent;
     const currentTargetList = currentTarget.closest('LI');
     
     pageTitle.textContent = textContent;
     selectCurrentList(currentTargetList);
     
     
    })
    
    const pageTime = document.querySelector('#page-time');
    function updateDateTime(element) {
        const currentDate = new Date();

        // Format the date and time as desired using date-fns
    const formattedDateTime = format(currentDate, "EEEE, MMMM do yyyy, h:mm a");
    
    // Update the content of the <p> tag with the current date and time
    element.textContent = formattedDateTime;
}
updateDateTime(pageTime);





 function selectCurrentList(currentTargetList) {


    if(currentTargetList.tagName == 'LI' )   { 

            const allLists = document.querySelectorAll('li');
            allLists.forEach((list) => {
                list.classList.remove('selected-list');
            })
          currentTargetList.classList.add('selected-list')   
       }
 }


