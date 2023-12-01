import * as listFunctions from './list-component.js';
import stylesheet from './style.css'
import { injectingCardStructure,injectingListStructure} from './InjectingHtmlStructure';
import {makeCard,checkStatusCardArray, makeList, cardClickHandler} from './card-component.js'
// import {format} from 'date-fns'
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
    
    if(!taskForm.checkValidity()) {
        e.preventDefault();
    } else {
    makeCard(cards,idCount++);
    console.log(idCount);
}
   injectingCardStructure(cardContainer,cards) 
})
  



const article = document.querySelector('#tasks-container');

article.addEventListener('click', (e) => {
   const currentTarget = e.target;
    cardClickHandler(currentTarget,e);

    injectingCardStructure(cardContainer,cards)
 })




