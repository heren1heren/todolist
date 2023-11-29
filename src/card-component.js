export function makeCard(cardArray) {
    
    const titleInput = document.querySelector('#title-input').value;
    const descriptionInput = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#dueDate-input').value;
    const card = new Card(titleInput,descriptionInput,dueDate);
    cardArray.push(card) 
}
export class Card {
   constructor(title,description,dueDate,important)  {
       this.title = title;
       this.description = description;
       this.dueDate = dueDate;
       this.important = important;
       this.isDelete = false;
       this.isMarked = false;
   }
   delete() { // how to delete itself inside an array
       this.isDelete = true;
   }
   mark() {
      this.isMarked = true;
   }
}

export function checkStatusCardArray(cardArray) {
    cardArray.forEach((card,index) => {
        if (card.isDelete == true) {
            
            cardArray.splice(index,1)
        }
        if(card.isMarked == true) {
            // do something
        }
        if(card.isImportant == true) {
          // push card element to important array
        }
    })    
}
