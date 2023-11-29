
function injectingListStructure(listContainer, list) {

    return returnListStructure(list)
}
function injectingCardStructure(cardContainer,card) {
    let sourceCard = card.map((card) => {
        return returnCardStructure(card);    
  })     
  
  return  cardContainer.innerHTML = sourceCard.join('');
}
function returnListStructure() {
    return `        <li><i class="fa-solid fa-skull-crossbones"></i>
    <p>${list.description}</p>
    <span>${list.quantity} </span>
`

}
function returnCardStructure(card) { //implement with id
    return ` <div class="card" data-id="${card.id}"> 

    <button class="check-btn"></button>
    <div class="text-wrapper">
      <h3>${card.title}</h3>
      <h4 class="truncate"> ${card.description} </h4>
     </div>
<div class="button-wrapper">
  
  <p>Due: ${card.dueDate}</p>
      <i class="fa-solid fa-trash"></i>
     <i class="fa-regular fa-star  card-star"></i>
</div>

   </div>
 <hr>
`
}
function returnH1Header() {

}
function injectingH1Header() {

}
export {injectingCardStructure,injectingListStructure,returnCardStructure,returnListStructure}