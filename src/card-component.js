export function makeCard(cardArray,idCount) {
    // console.log(cardArray);
    const titleInput = document.querySelector('#title-input').value;
    const descriptionInput = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#dueDate-input').value;
    const card = new Card(idCount,titleInput,descriptionInput,dueDate);
    cardArray.push(card);
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
            // do something for text affect and bg-colour
        }
        if(card.isImportant == true) {
          // push card element to important array
        }
    })    
}

export function makeList(listObject,name) { // when click close button inside the dialog
      const list = new List(name);
         listObject.push(list);
    
}

export class List {
    constructor(name,tasksCount = 0) {
       this.name = name;
    //    this.delete = false;
       this.array = [];
       this.tasksCount = tasksCount;
    }

    isDelete() {
       this.delete = true;
    }
    deleteChild(childId) { // alternative way
        this.array.splice(childId,1)
    }
}
export function cardClickHandler(currentTarget,e) {
    if (currentTarget.classList.contains('check-btn')) {
        currentTarget.closest('.card').classList.toggle('show-check');
        e.stopImmediatePropagation();
     }
     if (currentTarget.classList.contains('card-star')) {
         const currentId = currentTarget.closest('.card').dataset.id;
         cards[currentId].isImportant = true;
         e.stopImmediatePropagation();
 
     }
     if (currentTarget.classList.contains('fa-trash')) {
         const  currentId = currentTarget.closest('.card').dataset.id -1;        
 
               cards[currentId].isDelete = true; //?
               checkStatusCardArray(cards)
               idCount--;
         e.stopImmediatePropagation();
         
     }
 
}
