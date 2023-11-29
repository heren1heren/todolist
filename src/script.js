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
//     toDo: [],
//     important: [],
//     // new name: [],...
// };
let cards = [ // home cards' array
    {
    id: 1,
    title: ' I am the first title',
    description: 'I am the test card, I am beautiful',
    dueDate: '20/20/20',
    isImportant: true,
    isDelete: false,
}, {
    id: 2,
    title: 'I am the title',
    description: 'I am strong, resilient, but still lazy',
    isImportant: false,
    isDelete: true,
},
];


const addCardClicker = document.querySelector('.new-card');
const cardContainer = document.querySelector('.cards-container');
const CardSubmitBtn = document.querySelector('.card-btn');
const listContainer = document.querySelector('.lists-container'); 
CardSubmitBtn.addEventListener('click', () => {
    makeCard(cards);
    injectingCardStructure(cardContainer,cards)
})
  
function showModal() {
    const dialog = document.querySelector('[data-card-dialog]')
    dialog.showModal();

}
addCardClicker.addEventListener('click', () => {
    const dialog = document.querySelector('[data-card-dialog]')
    dialog.showModal();
})
 const deleteCardBtn = document.querySelector();
 const markCardBtn = document.querySelector();
 const importantBtn = document.querySelector();

 // using delegation instead 
 
  checkStatusCardArray(cards)