import stylesheet from './style.css'
// import {injectingCardStructure,injectingH1Header,} from './InjectingHtmlStructure.js'
// import { de } from 'date-fns/locale';
// import
import { injectingCardStructure,injectingListStructure} from './InjectingHtmlStructure';
import {makeCard,checkStatusCardArray} from './card-component.js'
 



/* our plans:
* how to make marked effect and check for isDelete in each element inside an array
* how to create a new array with name to distinguish with other new array give it a property name
*/

let cards = [] // home cards' array;

const listContainer = document.querySelector('.lists-container');
 
const addCardClicker = document.querySelector('.new-card');
addCardClicker.addEventListener('click', () => {
    const dialog = document.querySelector('[data-card-dialog]')
    dialog.showModal();
})

const cardContainer = document.querySelector('.cards-container');

let idCount = 1; // counting is wrong too
const CardSubmitBtn = document.querySelector('.card-btn');
CardSubmitBtn.addEventListener('click', () => { //? 
    makeCard(cards,idCount++);
    makeCard(cards,idCount++);
    console.log(idCount);
    injectingCardStructure(cardContainer,cards)
})
  



// delete logic is wrong now
const article = document.querySelector('#tasks-container');

article.addEventListener('click', (e) => {
   const currentTarget = e.target;
  

   if (currentTarget.classList.contains('check-btn')) {
       // toggle .show-btn for article
       currentTarget.closest('.card').classList.toggle('show-check');

       e.stopImmediatePropagation();
    }
    if (currentTarget.classList.contains('card-star')) {
        console.log(currentTarget.closest('.card').dataset.id);

        e.stopImmediatePropagation();

    }
    if (currentTarget.classList.contains('fa-trash')) {
        const  currentId = currentTarget.closest('.card').dataset.id;
        //   console.log(currentId);
        //   console.log(cards);
        console.log(currentTarget.parentNode.id);
              cards[currentId-1].isDelete = true;
              idCount--;
        e.stopImmediatePropagation();
        checkStatusCardArray(cards)
        injectingCardStructure(cardContainer,cards)

    }
 })


 