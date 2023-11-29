import stylesheet from './style.css'
// import {injectingCardStructure,injectingH1Header,} from './InjectingHtmlStructure.js'
// import { de } from 'date-fns/locale';
// import
import { injectingCardStructure,injectingListStructure} from './InjectingHtmlStructure';
import {makeCard,checkStatusCardArray} from './card-component.js'
// injectingCardStructure()

/* our plans:
* how to make marked effect and check for isDelete in each element inside an array
* how to create a new array with name to distinguish with other new array give it a property name
*/
// let lists =  {
//     home: cards,
//     important: [],
//     // new name: [],...
// };
let cards = [] // home cards' array;


let idCount = 1; 
const addCardClicker = document.querySelector('.new-card');
const cardContainer = document.querySelector('.cards-container');
const CardSubmitBtn = document.querySelector('.card-btn');
const listContainer = document.querySelector('.lists-container'); 
CardSubmitBtn.addEventListener('click', () => {
    makeCard(cards,idCount);
    idCount++;
    injectingCardStructure(cardContainer,cards)
})
  

addCardClicker.addEventListener('click', () => {
    const dialog = document.querySelector('[data-card-dialog]')
    dialog.showModal();
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
          console.log(currentId);
          console.log(cards);
              cards[currentId-1].isDelete = true;
        e.stopImmediatePropagation();
        checkStatusCardArray(cards)
        injectingCardStructure(cardContainer,cards)
    }
 })


 let list = {
    home: cards,
    important: [],
 }