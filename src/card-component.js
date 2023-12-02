export function makeCard(cardArray,idCount) {

    const titleInput = document.querySelector('#title-input').value;
    const descriptionInput = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#dueDate-input').value;
    const card = new Card(idCount,titleInput,descriptionInput,dueDate);
    cardArray.push(card);
    card.isDelete = false;
}    

export class Card {
   constructor(id,title,description,dueDate)  {
       this.id = id;
       this.title = title;
       this.description = description;
       this.dueDate = dueDate;
       
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
            console.log(cardArray);
        }
        if(card.isMarked == true) {
            
        }
        if(card.isImportant == true) {
        }
    })    
}





