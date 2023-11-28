import stylesheet from './style.css'
import {injectingCardStructure,injectingH1Header,} from './InjectingHtmlStructure.js'
// import { injectingCardStructure,injectingListStructure,returnCardStructure,returnListStructure } from './InjectingHtmlStructure';

// injectingCardStructure()

/* our plans:
* storing lists inside an array
* storing cards inside an array with each card as an object with an id and the description
* let user deletes card with corresponding index of the  del-button on the card
* let user marks completing the card with the index of the complete-button on the card
* ... 
*/

let lists = [];
let cards = [ 
    {
    id: 1,
    title: ' I am the first title',
    description: 'I am the test card, I am beautiful',
    dueDate: '20/20/20'
}, {
    id: 2,
    title: 'I am the title',
    description: 'I am strong, resilient, but still lazy'
},];


const addCardClicker = document.querySelector('.new-card');

function makeCard() {
    let newCard = {}
    // take input from dialog inputs
}





addCardClicker.addEventListener('click', () => {
    let newCard = {};
    cards.push(newCard);
    console.log(cards);
})