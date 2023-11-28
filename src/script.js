import stylesheet from './style.css'
import { injectingCardStructure,injectingListStructure,returnCardStructure,returnListStructure } from './InjectingHtmlStructure';

// injectingCardStructure()

/* our plans:
* storing lists inside an array
* storing cards inside an array with each card as an object with an id and the description
* let user push() new card
* let user delete card with corresponding index of the button on the card
* ... 
*/

let lists = [];
let cards = [ 
    {
    id: 1,
    description: 'Iam the test card, I am beautiful'
}, {
    id: 2,
    description: 'I am strong, resilient, but still lazy'
},];
